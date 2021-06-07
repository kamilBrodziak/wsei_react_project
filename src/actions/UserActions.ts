import { IStore } from "../reducers/rootReducer";
import { IUserState } from "../reducers/userReducer";
import { IUser, IUserAdditionalInformation } from "../Utils/IRestObjects";
import RestService from "../utils/RestService"

export enum UserActionsEnum {
    'SETUSERS' = 'SET_USERS',
    'SETUSER' = 'SET_USER',
    'GET' = 'GET_USER',
    'LOGOUT' = 'LOGOUT_USER',
    'LOGIN' = 'LOGIN_USER',
    'LOGINLOADING' = 'RESET_LOGIN_LOADING',
    'USERLOADING' = 'RESET_USER_LOADING',
    'ERROR' = 'RESET_ERROR',
    'SETUSERSINF' = 'SET_USERS_INFORMATION'
}

// HELPERS:
export const getLoggedUser = (userState:IUserState) => {
    return userState.users.find(user => user.id === userState.loggedUserId);
}

export const getUser = (users:IUser[], id: number) => {
    return users.find(user => user.id === id);
}

export const getLoggedUserInformation = (userState:IUserState) => {
    return userState.usersInformation.find(userInf => userInf.userId === userState.loggedUserId);
}

export const getUsers = (ids: number[]) => async(dispatch:any, getState:() => IStore) => {
    await fetchMissingUsersAction(ids)(dispatch, getState);
    const users = getState().userState.users;
    return ids.map(id => getUser(users, id)); 
}


const fetchUser = async(id:number) => {
    const returnObj:{user:IUser, userInformation:IUserAdditionalInformation} = {
        user: null,
        userInformation: null
    }
    let user = await RestService.getUser(id);
    if(Object.keys(user).length > 1) {
        user.photo = await RestService.getPhoto(user.id);
        returnObj.user = user;
        returnObj.userInformation = RestService.getUserInformation(id)
    }
    return returnObj;
}

// Actions

export const fetchUserAction = (id:number) => async(dispatch:any, getState:() => IStore) => {
    await fetchUsersAction([id])(dispatch, getState);
}

export const fetchMissingUsersAction = (ids:number[]) => async(dispatch:any, getState:() => IStore) => {
    const idsNotFound = [];
    for (const id of ids) {
        const user = getUser(getState().userState.users, id)
        if(!user) {
            idsNotFound.push(id);
        }
    }
    if(idsNotFound.length) {
        await fetchUsersAction(idsNotFound)(dispatch,getState);
    }
}

export const fetchUsersAction = (ids:number[]) => async(dispatch:any, getState:() => IStore) => {
    let error = '';
    let users:IUser[] = [...getState().userState.users];
    let usersInformation:IUserAdditionalInformation[] = [...getState().userState.usersInformation]
    dispatch({
        type: UserActionsEnum.GET,
        users: users,
        usersInformation: usersInformation,
        error: error,
        userLoading: true,
    })
    for(let i = 0; i < ids.length; ++i) {
        let id = ids[i];
        let user = getUser(users, id);
        if(!user) {
            const returnObj = await fetchUser(id);
            if(returnObj.user) {
                users.push(returnObj.user);
                usersInformation.push(returnObj.userInformation);
            } else {
                error += 'There is no such user with given id';
            }
        }
    }
    dispatch({
        type: UserActionsEnum.GET,
        users: users,
        usersInformation: usersInformation,
        error: error !== "" ? error : null,
        userLoading: false
    });
}

export const loginUser = (id: number) => async(dispatch:any, getState:() => IStore) => {
    dispatch({
        type: UserActionsEnum.LOGIN,
        loggedUserId: null,
        loginLoading: true
    });
    await fetchUserAction(id)(dispatch, getState);
    const user = getUser(getState().userState.users, id);
    dispatch({
        type: UserActionsEnum.LOGIN,
        loggedUserId: user?.id,
        loginLoading: false
    });
}

export const logoutUser = () => {
    return {
        type: UserActionsEnum.LOGOUT,
        loginLoading: false
    }
}

export const updateUser = (user:IUser) => (dispatch:any, getState: () => IStore) => {
    const users = getState().userState.users.map(oldUser => oldUser.id === user.id ? user : oldUser);
    dispatch({
        type: UserActionsEnum.SETUSERS,
        users: users
    })
}

export const updateUserInformation = (userInformation:IUserAdditionalInformation) => (dispatch:any, getState:() => IStore) => {
    const usersInformation = getState().userState.usersInformation.map(oldInf => oldInf.userId === userInformation.userId ? userInformation : oldInf);
    dispatch({
        type: UserActionsEnum.SETUSERSINF,
        usersInformation: usersInformation
    })
}

export const setUser = (user:IUser) => {
    return {
        type: UserActionsEnum.SETUSER,
        user: user
    }
}
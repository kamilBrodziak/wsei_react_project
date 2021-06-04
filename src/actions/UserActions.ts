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

export const fetchUser = (id:number) => async(dispatch:any, getState:() => IStore) => {
    let error = null;
    let users:IUser[] = [...getState().userState.users];
    let usersInformation:IUserAdditionalInformation[] = [...getState().userState.usersInformation]
    dispatch({
        type: UserActionsEnum.GET,
        users: users,
        usersInformation: usersInformation,
        error: error,
        userLoading: true,
    })
    let user = users.find(user => user.id === id);
    if(!user) {
        user = await RestService.getUser(id);
        if(Object.keys(user).length > 1) {
            user.photo = await RestService.getPhoto(user.id);
            users.push(user);
            usersInformation.push(RestService.getUserInformation(user.id));
        } else {
            user = null;
            error = 'There is no such user with given id';
        }
        dispatch({
            type: UserActionsEnum.GET,
            users: users,
            usersInformation: usersInformation,
            error: error,
            userLoading: false
        });
    } else {
        dispatch({
            type: UserActionsEnum.USERLOADING,
            userLoading: false
        })
    }
}

export const getLoggedUser = (userState:IUserState) => {
    return userState.users.find(user => user.id === userState.loggedUserId);
}

export const getLoggedUserInformation = (userState:IUserState) => {
    return userState.usersInformation.find(userInf => userInf.userId === userState.loggedUserId);
}

export const loginUser = (id: number) => async(dispatch:any, getState:() => IStore) => {
    dispatch({
        type: UserActionsEnum.LOGIN,
        loggedUserId: null,
        loginLoading: true
    });
    await fetchUser(id)(dispatch, getState);
    const users:IUser[] = getState().userState.users;
    const user = users.find(user => user.id === id);
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
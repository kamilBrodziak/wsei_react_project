import { useStore } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { IStore } from "../reducers/rootReducer";
import { IUserState } from "../reducers/userReducer";
import { IUser } from "../Utils/IRestObjects";
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

}

export const fetchUser = (id:number) => async(dispatch:any, getState:() => IStore) => {
    let error = null;
    let users:IUser[] = [...getState().userState.users];
    dispatch({
        type: UserActionsEnum.GET,
        users: users,
        error: error,
        userLoading: true
    })
    let user = users.find(user => user.id === id);
    if(!user) {
        user = await RestService.getUser(id);
        if(Object.keys(user).length > 1) {
            user.photo = await RestService.getPhoto(user.id);
            users.push(user);
        } else {
            user = null;
            error = 'There is no such user with given id';
        }
        dispatch({
            type: UserActionsEnum.GET,
            users: users,
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

export const setUser = (user:IUser) => {
    return {
        type: UserActionsEnum.SETUSER,
        user: user
    }
}
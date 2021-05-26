import { AnyAction, Dispatch } from "redux";
import { IUserState } from "../reducers/userReducer";
import { IUser } from "../Utils/IRestObjects";
import RestService from "../utils/RestService"

export enum UserActionsEnum {
    'SET' = 'SET_USER',
    'GET' = 'GET_USER',
    'LOGOUT' = 'LOGOUT_USER',
    'LOGIN' = 'LOGIN_USER'
}

export function fetchUser(id:number) {
    return {
        type: UserActionsEnum.GET,
        id: id
    }
}

export const loginUser = (id: number) => async(dispatch:any) => {
    let error = null;
    dispatch({
        type: UserActionsEnum.LOGIN,
        user: null,
        loading: true,
        error: error
    });
    let user = await RestService.getUser(id);
    if(Object.keys(user).length > 1) {
        user.photo = await RestService.getPhoto(user.id);
    } else {
        user = null;
        error = 'There is no such user with given id';
    }
    dispatch({
        type: UserActionsEnum.LOGIN,
        user: user,
        loading: false,
        error: error
    });
}

export const logoutUser = () => {
    return {
        type: UserActionsEnum.LOGOUT,
        user: null,
        loading: false
    }
}

export function setUser(id: number) {
    return {
        type: UserActionsEnum.SET,
        id: id
    }
}
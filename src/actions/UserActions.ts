import { AnyAction, Dispatch } from "redux";
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
    const user = await RestService.getUser(id);
    user.photo = await RestService.getPhoto(user.id);
    dispatch({
        type: UserActionsEnum.LOGIN,
        user: user
    });
}

export function logoutUser(id: number) {
    return {
        type: UserActionsEnum.LOGOUT,
        id: id
    }
}

export function setUser(id: number) {
    return {
        type: UserActionsEnum.SET,
        id: id
    }
}
import { AnyAction } from "redux";
import { UserActionsEnum } from "../actions/UserActions";
import { IUser } from "../Utils/IRestObjects";

export interface IUserState {
    loginLoading: boolean,
    loggedUserId: number,
    userLoading: boolean,
    error: string,
    users: IUser[]
}

const initState : IUserState = {
    loginLoading: false,
    userLoading: false,
    loggedUserId: null,
    error: null,
    users: []
}

const userReducer = (state = initState, action:AnyAction) => {
    switch(action.type) {
        case UserActionsEnum.GET: return {...state, users: action.users, error: action.error,
            userLoading: action.userLoading};
        case UserActionsEnum.LOGIN: return {...state, loggedUserId: action.loggedUserId, 
            loginLoading: action.loginLoading};
        case UserActionsEnum.LOGOUT: return {...state, loggedUserId: null};
        case UserActionsEnum.LOGINLOADING: return {...state, loginLoading: action.loginLoading}
        case UserActionsEnum.USERLOADING: return {...state, userLoading: action.userLoading};
        case UserActionsEnum.SETUSERS: return {...state, users: action.users};
        default: return state;
    }
}
export default userReducer;
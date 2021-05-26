import { AnyAction } from "redux";
import { UserActionsEnum } from "../actions/UserActions";
import { IUser } from "../Utils/IRestObjects";

export interface IUserState {
    loading: boolean,
    user: IUser,
    error: string
}

const initState : IUserState = {
    loading: false,
    user: null,
    error: null
}


const userReducer = (state = initState, action : AnyAction) => {
    switch(action.type) {
        case UserActionsEnum.GET: return state;
        case UserActionsEnum.LOGIN: return {...state, user: action.user, loading: action.loading, error: action.error};
        case UserActionsEnum.LOGOUT: return {...state, user: action.user, loading: action.loading}
        default: return state;
    }
}
export default userReducer;
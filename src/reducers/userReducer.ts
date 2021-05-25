import { AnyAction } from "redux";
import { UserActionsEnum } from "../actions/UserActions";
import { IUser } from "../Utils/IRestObjects";

export interface IUserState {
    loading: boolean,
    user: IUser
}

const initState : IUserState = {
    loading: true,
    user: null
}


const userReducer = (state = initState, action : AnyAction) => {
    switch(action.type) {
        case UserActionsEnum.GET: return state;
        case UserActionsEnum.LOGIN: return {...state, user: action.user, loading: false};
        default: return state;
    }
}
export default userReducer;
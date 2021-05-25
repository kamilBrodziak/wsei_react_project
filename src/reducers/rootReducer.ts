import { AnyAction, combineReducers } from "redux";
import { UserActionsEnum } from "../actions/UserActions";
import { IUser } from "../utils/IRestObjects";
import RestService from "../utils/RestService";
import userReducer, { IUserState } from "./userReducer";


export interface IRootState {}

export interface IStore extends IRootState, IUserState  {
    userState: IUserState
    rootState: IRootState
}

const initState : IRootState = {
}



const rootReducer = (state = initState, action : AnyAction) => {
    return state;
}

export default combineReducers({
    rootState: rootReducer,
    userState: userReducer
});
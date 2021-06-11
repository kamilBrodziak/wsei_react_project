import { AnyAction, combineReducers } from "redux";
import photoReducer, { IPhotoState } from "./photoReducer";
import postReducer, { IPostState } from "./postReducer";
import userReducer, { IUserState } from "./userReducer";


export interface IRootState {}

export interface IStore extends IRootState, IUserState  {
    userState: IUserState
    rootState: IRootState,
    postState: IPostState,
    photoState: IPhotoState
}

const initState : IRootState = {
}



const rootReducer = (state = initState, action : AnyAction) => {
    return state;
}

export default combineReducers({
    rootState: rootReducer,
    userState: userReducer,
    postState: postReducer,
    photoState: photoReducer
});
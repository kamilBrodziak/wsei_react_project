import { AnyAction, combineReducers } from "redux";
import commentReducer, { ICommentState } from "./commentReducer";
import photoReducer, { IPhotoState } from "./photoReducer";
import postReducer, { IPostState } from "./postReducer";
import userReducer, { IUserState } from "./userReducer";


export interface IRootState {}

export interface IStore extends IRootState {
    userState: IUserState
    rootState: IRootState,
    postState: IPostState,
    photoState: IPhotoState,
    commentState: ICommentState
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
    photoState: photoReducer,
    commentState: commentReducer
});
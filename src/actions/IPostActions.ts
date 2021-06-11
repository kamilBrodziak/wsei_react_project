import { IPost } from "../utils/IRestPost";
import { TFetchPhotoActions } from "./IPhotoActions";

export enum PostActionsEnum {
    'FETCH_POST_BEGIN' = 'FETCH_POST_BEGIN',
    'FETCH_POST_SUCCESS' = 'FETCH_POST_SUCCESS',
    'FETCH_POST_ERROR' = 'FETCH_POST_ERROR'
}

export interface IFetchPostBeginAction {
    type: PostActionsEnum.FETCH_POST_BEGIN
}

export interface IFetchPostSuccessAction {
    type: PostActionsEnum.FETCH_POST_SUCCESS,
    posts: {[id:number]:IPost}
}

export interface IFetchPostErrorAction {
    type: PostActionsEnum.FETCH_POST_ERROR,
    error: string
}

export type TFetchPostActions = IFetchPostBeginAction | IFetchPostErrorAction | IFetchPostSuccessAction;
export type TFetchFullPostAction = TFetchPostActions | TFetchPhotoActions;

export type TPostActions = TFetchPostActions;
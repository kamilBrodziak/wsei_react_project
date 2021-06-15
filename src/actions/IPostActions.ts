import { IPhoto } from "../utils/IRestFiles";
import { IPost, IRestPost } from "../utils/IRestPost";
import { IUser } from "../utils/IRestUser";
import { TFetchPhotoActions } from "./IPhotoActions";

export enum PostActionsEnum {
    'FETCH_POST_BEGIN' = 'FETCH_POST_BEGIN',
    'FETCH_POST_SUCCESS' = 'FETCH_POST_SUCCESS',
    'FETCH_POST_ERROR' = 'FETCH_POST_ERROR',
    'FETCH_POST_QUERY_SUCCESS' = 'FETCH_POST_QUERY_SUCCESS'
}

export interface IFetchPostBeginAction {
    type: PostActionsEnum.FETCH_POST_BEGIN
}

export interface IFetchPostSuccessAction {
    type: PostActionsEnum.FETCH_POST_SUCCESS,
    posts: {[id:number]:IRestPost}
}

export interface IFetchPostQuerySuccessAction {
    type: PostActionsEnum.FETCH_POST_QUERY_SUCCESS,
    posts: {[id:number]:IRestPost},
    queries: {[query:string]:number[]}
}

export interface IFetchPostErrorAction {
    type: PostActionsEnum.FETCH_POST_ERROR,
    error: string
}

export type TFetchPostActions = IFetchPostBeginAction | IFetchPostErrorAction | IFetchPostSuccessAction |
    IFetchPostQuerySuccessAction;
export type TFetchFullPostAction = TFetchPostActions | TFetchPhotoActions;

export type TPostActions = TFetchPostActions;

export interface IPostRequiredStates {
    posts: {[key:number]:IPost},
    queries: {[key:string]:number[]},
    photos: {[key:number]:IPhoto},
    users: IUser[]
}
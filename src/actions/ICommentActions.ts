import { ICommentQuery, TCommentQueries } from "../reducers/commentReducer";
import { IComment, IRestComment } from "../utils/IRestComments";
import { IUser } from "../utils/IRestUser";

export enum CommentActionsEnum {
    'FETCH_BEGIN' = 'FETCH_COMMENT_BEGIN',
    'FETCH_COMMENT_SUCCESS' = 'FETCH_COMMENT_SUCCESS',
    'FETCH_ERROR' = 'FETCH_COMMENT_ERROR',
    'FETCH_QUERY_SUCCESS' = 'FETCH_COMMENT_QUERY_SUCCESS'
}

export interface IFetchCommentBeginAction {
    type: CommentActionsEnum.FETCH_BEGIN
}

export interface IFetchCommentSuccessAction {
    type: CommentActionsEnum.FETCH_COMMENT_SUCCESS,
    comments: {[id:number]:IComment}
}

export interface IFetchCommentQuerySuccessAction {
    type: CommentActionsEnum.FETCH_QUERY_SUCCESS,
    comments: {[id:number]:IComment}
    queries: TCommentQueries
}

export interface IFetchCommentErrorAction {
    type: CommentActionsEnum.FETCH_ERROR,
    error: string
}

export type TFetchCommentActions = IFetchCommentBeginAction | IFetchCommentSuccessAction | IFetchCommentQuerySuccessAction |
    IFetchCommentErrorAction;
export type TFetchFullCommentAction = TFetchCommentActions;

export interface ICommentRequiredStates {
    posts: {[key:number]:IComment},
    queries: TCommentQueries,
    users: IUser[]
}
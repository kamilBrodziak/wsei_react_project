import { Dispatch } from "react";
import { TCommentQueries } from "../reducers/commentReducer";
import { IStore } from "../reducers/rootReducer";
import { IComment, IExtendedComment } from "../utils/IRestComments";
import { IQuery, IQueryOptions } from "../utils/IRestQuery";
import { IUser } from "../utils/IRestUser";
import RestService, { getQueryString } from "../utils/RestService";
import { distinctArr } from "../utils/Utils";
import { CommentActionsEnum, TFetchFullCommentAction } from "./ICommentActions";
import { fetchMissingUsersAction } from "./UserActions";

// HELPERS
// export const fetchCommentPromise = (ids:number[]) => {
//     return Promise.all(ids.map(id => RestService.getComment(id)));
// }

export const getQueryComment = (options: IQueryOptions) => (dispatch:Dispatch<TFetchFullCommentAction>, getState:() => IStore) => {
    const state = getState();
    return state.postState.queries[getQueryString(options)]?.map(id => getComment(id, state.commentState.comments, state.userState.users));
}

export const getComments = (options:IQueryOptions, queries:TCommentQueries, comments:{[key:number]:IComment},
        users:IUser[]):IQuery<IExtendedComment[]> => {
    const query = queries[getQueryString(options)];
    if(query?.ids) {
        return {
            ...query,
            items:query.ids?.map(id => getComment(id, comments, users))
        };
    }
    return null;
}

export const getComment = (id:number, comments:{[key:number]:IComment}, users:IUser[]):IExtendedComment => {
    const comment = comments[id];
    if(comment) {
        return {
            id: comment.id,
            postId: comment.postId,
            name: comment.name,
            body: comment.body,
            email: comment.email,
            user: users.find(user => user.id === comment.userId),
        }
    }
}

// ACTIONS
export const fetchCommentsQueryAction = (options:IQueryOptions) => async(dispatch:Dispatch<TFetchFullCommentAction>, getState:() => IStore) => {
    const postState = getState().postState;
    const queryStr = getQueryString(options);
    if(!postState.queries[queryStr]) {
        dispatch({
            type: CommentActionsEnum.FETCH_BEGIN
        })
        return RestService.getCommentQuery(queryStr).then( fComments => {
            const usersIds = fComments.items.map(comment => comment.userId);
            Promise.all([
                fetchMissingUsersAction(distinctArr(usersIds))(dispatch, getState)
            ]).then(() => {
                const comments:{[id: number]:IComment} = Object.assign({}, ...fComments.items.map(comment => ({[comment.id]:comment})));
                dispatch({
                    type:CommentActionsEnum.FETCH_QUERY_SUCCESS,
                    queries: {[queryStr]: {
                        ids: fComments.items.map(comment => comment.id),
                        total: fComments.total
                    }},
                    comments: comments
                })
            })
        }).catch(error => 
            dispatch({
                type: CommentActionsEnum.FETCH_ERROR,
                error: "There was an error with fetching posts, please try again later"
            })    
        )
    }
}
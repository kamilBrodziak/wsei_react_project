import { Dispatch } from "react";
import { IStore } from "../reducers/rootReducer";
import { IPhoto } from "../utils/IRestFiles";
import { IPost, IRestPost } from "../utils/IRestPost";
import { IQueryOptions } from "../utils/IRestQuery";
import { IUser } from "../utils/IRestUser";
import RestService, { getQueryString } from "../utils/RestService";
import { distinctArr, missingValues } from "../utils/Utils";
import { PostActionsEnum, TFetchFullPostAction, TFetchPostActions } from "./IPostActions";
import { fetchPhotosAction } from "./PhotoActions";
import { fetchMissingUsersAction } from "./UserActions";

// HELPERS
export const fetchPostsPromise = (ids:number[]) => {
    return Promise.all(ids.map(id => RestService.getPost(id)));
}

export const getQueryPost = (options: IQueryOptions) => (dispatch:Dispatch<TFetchFullPostAction>, getState:() => IStore) => {
    const state = getState();
    return state.postState.queries[getQueryString(options)]?.map(id => getPost(id, state.postState.posts, state.photoState.photos, state.userState.users));
}

export const getPosts = (options:IQueryOptions, queries:{[key:string]:number[]}, posts:{[key:number]:IRestPost},
    photos:{[key:number]:IPhoto}, users:IUser[]):IPost[] => {
        const ids = queries[getQueryString(options)];
        if(ids) {
            return ids?.map(id => {
                const post = posts[id];
                return {
                    id: post.id,
                    title: post.title,
                    body: post.body,
                    date: post.date,
                    photo: photos[post.photoId],
                    user: users.find(user => user.id === post.userId)
                }
            });
        }
        return null;
}

export const getPost = (id:number, posts:{[key:number]:IRestPost}, photos:{[key:number]:IPhoto}, users:IUser[]):IPost => {
    const post = posts[id];
    if(post) {
        return {
            id: post.id,
            title: post.title,
            body: post.body,
            date: post.date,
            photo: photos[post.photoId],
            user: users.find(user => user.id === post.userId)
        }
    }
}

// ACTIONS
// może zawsze zwracać promise i obsługiwać w publications bez loadingu?
export const fetchPostsQueryAction = (options:IQueryOptions) => async(dispatch:Dispatch<TFetchFullPostAction>, getState:() => IStore) => {
    const postState = getState().postState;
    const queryStr = getQueryString(options);
    if(!postState.queries[queryStr]) {
        dispatch({
            type: PostActionsEnum.FETCH_POST_BEGIN
        })
        return RestService.getPostQuery(queryStr).then( fPosts => {
            const photosIds = fPosts.map(post => post.photoId);
            const usersIds = fPosts.map(post => post.userId);
            Promise.all([
                fetchPhotosAction(distinctArr(photosIds))(dispatch, getState),
                fetchMissingUsersAction(distinctArr(usersIds))(dispatch, getState)
            ]).then(() => {
                const posts:{[id: number]:IRestPost} = Object.assign({}, ...fPosts.map(post => ({[post.id]:post})));
                dispatch({
                    type:PostActionsEnum.FETCH_POST_QUERY_SUCCESS,
                    queries: {[queryStr]: fPosts.map(post => post.id)},
                    posts: posts
                })
            })
        }).catch(error => 
            dispatch({
                type: PostActionsEnum.FETCH_POST_ERROR,
                error: "There was an error with fetching posts, please try again later"
            })    
        )
    }
}

export const fetchPostAction = (id:number) => async(dispatch:Dispatch<TFetchPostActions>, getState:() => IStore) => {
    fetchPostsAction([id])(dispatch, getState);
}

export const fetchPostsAction = (ids:number[]) => async(dispatch:Dispatch<TFetchFullPostAction>, getState:() => IStore) => {
    const postState = getState().postState;
    const allIds = Object.keys(postState.posts).map(id => parseInt(id));
    const missingIds = missingValues(ids, allIds);
    if(missingIds.length) {
        dispatch({
            type: PostActionsEnum.FETCH_POST_BEGIN
        })
        return fetchPostsPromise(missingIds).then( fPosts => {
            const photosIds = fPosts.map(post => post.photoId);
            const usersIds = fPosts.map(post => post.userId);
            Promise.all([
                fetchPhotosAction(distinctArr(photosIds))(dispatch, getState),
                fetchMissingUsersAction(distinctArr(usersIds))(dispatch, getState)
            ]).then(() => {
                const posts:{[id: number]:IRestPost} = Object.assign({}, ...fPosts.map(post => ({[post.id]:post})));
                dispatch({
                    type: PostActionsEnum.FETCH_POST_SUCCESS,
                    posts: posts 
                })
            })
        }).catch(error => 
            dispatch({
                type: PostActionsEnum.FETCH_POST_ERROR,
                error: "There was an error with fetching posts, please try again later"
            })    
        )
    }
}

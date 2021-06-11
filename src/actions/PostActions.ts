import { Dispatch } from "react";
import { IStore } from "../reducers/rootReducer";
import { IPost } from "../utils/IRestPost";
import RestService from "../utils/RestService";
import { distinctArr, missingValues } from "../utils/Utils";
import { PostActionsEnum, TFetchFullPostAction, TFetchPostActions } from "./IPostActions";
import { fetchPhotosAction } from "./PhotoActions";
import { fetchMissingUsersAction } from "./UserActions";

// HELPERS
export const fetchPostsPromise = (ids:number[]) => {
    return Promise.all(ids.map(id => RestService.getPost(id)));
}

// ACTIONS

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
                const state = getState();
                const posts:{[id: number]:IPost} = {};
                fPosts.forEach(post => {
                    posts[post.id] = {
                        id: post.id,
                        title: post.title,
                        body: post.body,
                        date: post.date,
                        photo: state.photoState.photos[post.photoId],
                        user: state.userState.users.find(user => user.id === post.userId),
                    }
                })
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

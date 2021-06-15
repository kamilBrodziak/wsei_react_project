import { PostActionsEnum, TPostActions } from "../actions/IPostActions";
import { IPost, IRestPost } from "../utils/IRestPost";

export interface IPostState {
    posts: {[id: number]: IRestPost},
    fetching: boolean,
    error: string,
    queries: {[key: string]: number[]} // example: "{"_page=1&_limit=10": [0,1,2,3,4,10,15,20,21,33]}" 
}

const initState : IPostState = {
    posts: {},
    fetching: false,
    error: null,
    queries: {}
}

const postReducer = (state = initState, action:TPostActions):IPostState => {
    switch(action.type) {
        case PostActionsEnum.FETCH_POST_BEGIN: return {...state, 
            error: null,
            fetching: true            
        };
        case PostActionsEnum.FETCH_POST_ERROR: return {...state,
            fetching: false,
            error: action.error
        };
        case PostActionsEnum.FETCH_POST_SUCCESS: return {...state,
            fetching: false,
            posts: {...state.posts, ...action.posts}
        };
        case PostActionsEnum.FETCH_POST_QUERY_SUCCESS: return {...state,
            queries: {...state.queries, ...action.queries},
            fetching: false,
            posts: {...state.posts, ...action.posts}
        }
        default: return state;
    }
}
export default postReducer;
import { PostActionsEnum, TPostActions } from "../actions/IPostActions";
import { IPost } from "../utils/IRestPost";

export interface IPostState {
    posts: {[id: number]: IPost},
    fetching: boolean,
    error: string
}

const initState : IPostState = {
    posts: {},
    fetching: false,
    error: null
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
        default: return state;
    }
}
export default postReducer;
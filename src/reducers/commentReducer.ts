import { CommentActionsEnum, TFetchCommentActions } from "../actions/ICommentActions";
import { IComment } from "../utils/IRestComments";

export interface ICommentState {
    comments: {[id: number]: IComment},
    fetching: boolean,
    error: string,
    queries: TCommentQueries 
}

export interface ICommentQuery {
    ids: number[],
    total: number
}

export type TCommentQueries = {[key:string]:ICommentQuery}// example: "{"_page=1&_limit=10": ICommentQuery}" 

const initState : ICommentState = {
    comments: {},
    fetching: false,
    error: null,
    queries: {}
}

const commentReducer = (state = initState, action:TFetchCommentActions):ICommentState => {
    switch(action.type) {
        case CommentActionsEnum.FETCH_BEGIN: return {...state, 
            error: null,
            fetching: true            
        };
        case CommentActionsEnum.FETCH_ERROR: return {...state,
            fetching: false,
            error: action.error
        };
        case CommentActionsEnum.FETCH_COMMENT_SUCCESS: return {...state,
            fetching: false,
            comments: {...state.comments, ...action.comments}
        };
        case CommentActionsEnum.FETCH_QUERY_SUCCESS: return {...state,
            queries: {...state.queries, ...action.queries},
            fetching: false,
            comments: {...state.comments, ...action.comments}
        }
        default: return state;
    }
}
export default commentReducer;
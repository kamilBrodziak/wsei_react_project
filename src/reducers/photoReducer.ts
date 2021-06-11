import { PhotoActionsEnum, TPhotoActions } from "../actions/IPhotoActions";
import { IPhoto } from "../utils/IRestFiles";

export interface IPhotoState {
    photos: {[id: number]:IPhoto},
    fetching: boolean,
    error: string
}

const initState : IPhotoState = {
    photos: {},
    fetching: false,
    error: null
}

const photoReducer = (state = initState, action:TPhotoActions):IPhotoState => {
    switch(action.type) {
        case PhotoActionsEnum.FETCH_PHOTO_BEGIN: return {...state, 
            error: null,
            fetching: true            
        };
        case PhotoActionsEnum.FETCH_PHOTO_ERROR: return {...state,
            fetching: false,
            error: action.error
        };
        case PhotoActionsEnum.FETCH_PHOTO_SUCCESS: return {...state,
            fetching: false,
            photos: {...state.photos, ...action.photos}
        };
        default: return state;
    }
}
export default photoReducer;
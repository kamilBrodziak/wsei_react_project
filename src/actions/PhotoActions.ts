import { Dispatch } from "react";
import { IStore } from "../reducers/rootReducer";
import { IPhoto } from "../utils/IRestFiles";
import RestService from "../utils/RestService";
import { missingValues } from "../utils/Utils";
import { PhotoActionsEnum, TFetchPhotoActions } from "./IPhotoActions";

// HELPERS
export const fetchPhotosPromise = (ids:number[]) => {
    return Promise.all(ids.map(id => RestService.getPhoto(id)));
}

// ACTIONS

export const fetchPhotoAction = (id:number) => async(dispatch:Dispatch<TFetchPhotoActions>, getState:() => IStore) => {
    fetchPhotosAction([id])(dispatch, getState);
}

export const fetchPhotosAction = (ids:number[]) => async(dispatch:Dispatch<TFetchPhotoActions>, getState:() => IStore) => {
    const photosState = getState().photoState;
    const allIds = Object.keys(photosState.photos).map(id => parseInt(id));
    const missingIds = missingValues(ids, allIds);
    if(missingIds.length > 0) {
        dispatch({
            type: PhotoActionsEnum.FETCH_PHOTO_BEGIN
        })
        return fetchPhotosPromise(missingIds).then( fPhotos => {
            const photos:{[id: number]:IPhoto} = {};
            fPhotos.forEach(photo => {
                photos[photo.id] = photo;
            })
            dispatch({
                type: PhotoActionsEnum.FETCH_PHOTO_SUCCESS,
                photos: photos
            })
        }).catch(error => 
            dispatch({
                type: PhotoActionsEnum.FETCH_PHOTO_ERROR,
                error: 'There was error with fetching photos, please try again'
            })
        )
    }

}

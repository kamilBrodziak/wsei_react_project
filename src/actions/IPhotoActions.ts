import { IPhoto } from "../utils/IRestFiles";

export enum PhotoActionsEnum {
    'FETCH_PHOTO_BEGIN' = 'FETCH_PHOTO_BEGIN',
    'FETCH_PHOTO_SUCCESS' = 'FETCH_PHOTO_SUCCESS',
    'FETCH_PHOTO_ERROR' = 'FETCH_PHOTO_ERROR'
}

export interface IFetchPhotoBeginAction {
    type: PhotoActionsEnum.FETCH_PHOTO_BEGIN
}

export interface IFetchPhotoSuccessAction {
    type: PhotoActionsEnum.FETCH_PHOTO_SUCCESS,
    photos: {[id:number]:IPhoto}
}

export interface IFetchPhotoErrorAction {
    type: PhotoActionsEnum.FETCH_PHOTO_ERROR,
    error: string
}

export type TFetchPhotoActions = IFetchPhotoBeginAction | IFetchPhotoErrorAction | IFetchPhotoSuccessAction;

export type TPhotoActions = TFetchPhotoActions;
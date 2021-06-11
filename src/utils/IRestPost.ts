import { IPhoto } from "./IRestFiles";
import { IUser } from "./IRestUser";

export interface IRestPost {
    id: number;
    userId: number;
    photoId: number;
    title: string;
    body: string;
    date: Date;
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    date: Date;
    photo: IPhoto;
    user: IUser;
}

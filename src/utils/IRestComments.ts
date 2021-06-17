import { IPhoto } from "./IRestFiles";
import { IUser } from "./IRestUser";

export interface IRestComment {
    id: number;
    postId: number,
    name: string,
    email: string,
    body: string;
}

export interface IComment {
    id: number;
    postId: number,
    name: string,
    email: string,
    body: string,
    userId: number;
}

export interface IExtendedComment {
    id: number;
    postId: number,
    name: string,
    email: string,
    body: string,
    user: IUser;
}

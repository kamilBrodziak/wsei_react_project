export interface IPhoto {
    id: number,
    albumId: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface IAttachment {
    name: string;
    path: string;
}
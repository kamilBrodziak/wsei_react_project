export enum QueryParamsEnum {
    PAGE = "_page",
    LIMIT = "_limit",
    LIKE = "_like"
}

export interface IQueryOptions {
    _page?: number;
    _limit?: number;
    _like?: {[key:string]:string}
}

export interface IQuery<T> {
    items: T,
    total?: number;
}

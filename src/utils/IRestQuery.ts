export enum QueryParamsEnum {
    PAGE = "_page",
    LIMIT = "_limit"
}

export interface IQueryOptions {
    _page?: number;
    _limit?: number;
}

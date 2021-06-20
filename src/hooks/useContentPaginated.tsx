import React, { MutableRefObject, useEffect, useState } from "react"
import { useMeasure } from "react-use";
import Loading from "../components/Common/Animations/Loading";
import Pagination from "../components/Common/Paginations/Pagination";
import { IQuery, IQueryOptions } from "../utils/IRestQuery";
import useFetching from "./useFetching";
import useQuerySearch from "./useQuerySearch";

interface TContentPaginatedResult {
    content:JSX.Element,
    pagination:JSX.Element,
    changeOption: (options:IQueryOptions) => void,
    options: IQueryOptions
};

const useContentPaginated = <T extends object>(
        fetch: (options:IQueryOptions) => void,
        loading:boolean,
        getData: (options:IQueryOptions) => IQuery<T>,
        element:(data:T) => JSX.Element,
        startingOptions?:IQueryOptions,
        ):TContentPaginatedResult => {
    const [ref, {height}] = useMeasure<HTMLElement>();
    const {changeOption, options} = useQuerySearch(startingOptions);
    const {data, total} = useFetching<T>(() => fetch(options), options, loading, () => getData(options))
    const paginationAction = (page:number) => {
        const newOptions = {...options, _page:page+1}
        changeOption(newOptions)
    }
    let content = <Loading width="100%" height={`${height > 0 ? height : 200}px`} />
    if(!loading) {
        if(data) {
            content = <div ref={ref}>{element(data)}</div>
        } else {
            content = <div ref={ref}>No records found</div>
        }
    }
    const pagination = <Pagination page={options._page - 1} maxPage={Math.ceil(total / options._limit)} onClick={paginationAction}/>
            
    const onSubmit = (search:string) => {
        changeOption({...options, _like:{name:search}, _page:1})
    }
    return {content: content, pagination: pagination, changeOption: changeOption, options: options}
    
}

export default useContentPaginated;
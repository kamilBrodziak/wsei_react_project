

import { MutableRefObject, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { IQuery, IQueryOptions } from "../utils/IRestQuery";
import queryString from 'query-string'

interface IUseQuerySearchResult {
    changeOption: (options: IQueryOptions) => void;
    options: IQueryOptions;
}

const useQuerySearch = (startingOptions?:IQueryOptions) : IUseQuerySearchResult => {
    const history = useHistory();
    const params = queryString.parse(history.location.search) as {page: string};
    
    const initOptions = {
        _page: params.page && /[0-9]+/.test(params.page) ? parseInt(params.page) : 1,
        _limit: 10,
        _like: Object.assign({}, ...Object.entries(params)
            .filter(([key, val])=>key.endsWith("_like"))
            .map(([key, val])=> ({[key.replace(/_like$/, '')]: val})))
    }
    const [options, setOptions] = useState<IQueryOptions>(startingOptions ? {...initOptions, ...startingOptions} : initOptions);
    
    useEffect(() => {
        const search = Object.entries(options._like).filter(([key, val])=> val !== '')
            .map(([key, val]) => `${key}_like=${val}`).join('&');
        history.push({
            search: `?page=${options._page}${search.length ? `&${search}` : ''}`
        })
    }, [options])
    
    const changeOption = (newOptions:IQueryOptions) => {
        setOptions({...options, ...newOptions})
    }
    return {
        changeOption: changeOption,
        options: options
    }
}

export default useQuerySearch;
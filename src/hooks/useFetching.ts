import { MutableRefObject, useEffect, useState } from "react"
import { IQuery, IQueryOptions } from "../utils/IRestQuery";

interface IUseFetchingResult<T> {
    total: number,
    data: T
}

const useFetching = <T>(fetch: () => void, options:IQueryOptions, loading:boolean, getData: () => IQuery<T>) : IUseFetchingResult<T> => {
    const [data, setData] = useState<T>(null);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        fetch()
    }, [, options])
    useEffect(() => {
        const query = getData()
        setData(query?.items)
        if(query) {
            setTotal(query?.total)
        }
    }, [loading, options])

    return {data:data, total:total}
}

export default useFetching;
import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMeasure, useSearchParam } from 'react-use';
import styled from 'styled-components';
import { IStore } from '../../../../../reducers/rootReducer';
import { IComment, IExtendedComment } from '../../../../../utils/IRestComments';
import { IUser } from '../../../../../utils/IRestUser';
import queryString from 'query-string'
import { IQueryOptions } from '../../../../../utils/IRestQuery';
import { fetchCommentsQueryAction, getComments } from '../../../../../actions/CommentActions';
import Loading from '../../../../Common/Animations/Loading';
import List from './List/List';
import Colors from '../../../../../styledHelpers/Colors';
import Pagination from '../../../../Common/Paginations/Pagination';
import SearchInput from '../../../../Common/Inputs/SearchInput';
import { TCommentQueries } from '../../../../../reducers/commentReducer';

const WidgetStyled = styled.section`
    margin: 20px 0 0 0;
`

const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
`

const Navstyled = styled.nav`

`

const TitleStyled = styled.h2`
    color: ${Colors.darkGray};
    font-size: 2.5rem;
    font-weight: bold;
    flex: 1;
`

const SearchInputStyled = styled(SearchInput)`
    && {
        margin: 0 10px 0 0;
        width: 200px;
    }
`

interface IProps {
    comments: {[key:number]:IComment},
    queries: TCommentQueries,
    users: IUser[],
    loading: boolean,
    fetchComments: (query:IQueryOptions) => void;
}

const ResumeWorkWidget:FC<IProps> = ({comments, queries, users, loading, fetchComments}) => {
    const [ref, {height}] = useMeasure<HTMLElement>();
    const [commentsDisplayed, setCommentsDisplayed] = useState<IExtendedComment[]>(null);
    const [commentsTotal, setCommentsTotal] = useState(0);
    const history = useHistory();
    const params = queryString.parse(history.location.search) as {page: string, s:string};
    const [options, setOptions] = useState<IQueryOptions>({
        _page: params.page ? parseInt(params.page) : 1,
        _limit: 10,
        _like: params.s ? {name:params.s} : {},
    })
    const paginationAction = (page:number) => {
        const newOptions = {...options, _page:page+1}
        setOptions(newOptions)
        history.push({
            search: `?page=${page+1}${newOptions._like['name'] ? `&s=${newOptions._like['name']}` : ''}`
        })
        fetchComments(newOptions)
    }
    useEffect(() => {
        fetchComments(options)     
    }, [])
    useEffect(() => {
        fetchComments(options)     
    }, [options])
    useEffect(() => {
        const query = getComments(options, queries, comments, users)
        setCommentsDisplayed(query?.items)
        if(query) {
            setCommentsTotal(query?.total)
        }
    }, [loading, queries, options])
    let content = <Loading width="100%" height={`${height > 0 ? height : 200}px`} />
    if(!loading && commentsDisplayed) {
        content = <div ref={ref}><List comments={commentsDisplayed} /></div>
    }

    const onSubmit = (search:string) => {
        setOptions({...options, _like:{name:search}, _page:1});
        history.push({
            search: `?page=${1}${search ? `&s=${search}` : ''}`
        })
    }

    return (
        <WidgetStyled>
            <HeaderStyled>
                <TitleStyled>Resume your work</TitleStyled>
                <SearchInputStyled placeholder="Filter by title..." onSubmit={onSubmit} />
                <Navstyled>Followed</Navstyled>
            </HeaderStyled>
            {content}
            <Pagination page={options._page - 1} maxPage={Math.ceil(commentsTotal / options._limit)} onClick={paginationAction}/>
        </WidgetStyled>
    )
}

const mapStateToProps = (state:IStore) => {
    return {
        loading: state.commentState.fetching,
        comments: state.commentState.comments,
        queries: state.commentState.queries,
        users: state.userState.users
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchComments: (options:IQueryOptions) => dispatch(fetchCommentsQueryAction(options))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeWorkWidget);
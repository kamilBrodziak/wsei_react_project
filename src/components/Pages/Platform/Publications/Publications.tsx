import React, { FC, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { RouteProps } from 'react-router';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { useLocation, useMeasure, useSearchParam } from 'react-use';
import styled from 'styled-components';
import { fetchPostsQueryAction, getPosts, getQueryPost as getQueryPosts } from '../../../../actions/PostActions';
import { IStore } from '../../../../reducers/rootReducer';
import Colors from '../../../../styledHelpers/Colors';
import { IPhoto } from '../../../../utils/IRestFiles';
import { IPost, IRestPost } from '../../../../utils/IRestPost';
import { IQueryOptions } from '../../../../utils/IRestQuery';
import { IUser } from '../../../../utils/IRestUser';
import Loading from '../../../Common/Animations/Loading';
import Pagination from '../../../Common/Paginations/Pagination';
import ShortPost from './Common/ShortPost';
import queryString from 'query-string'

const PublicationsStyled = styled.section`

`;

const HeaderStyled = styled.h1`
    font-size: 2.2rem;
    color: ${Colors.darkGray};
    text-align: center;
    margin: 0 0 20px 0;
`

const PostsStyled = styled.div`
    display: flex;
    flex-direction: column;
`

const PostStyled = styled(ShortPost)`
    margin: 0 0 10px 0;
`

interface IProps extends RouteProps {
    loading: boolean,
    fetchPosts: (options:IQueryOptions) => Promise<void>;
    photos: {[key:number]:IPhoto};
    users: IUser[];
    posts: {[key:number]:IRestPost};
    queries: {[key:string]:number[]};
}

const Publications:FC<IProps> = ({loading, fetchPosts, queries, photos, users, posts}) => {
    const [ref, {height}] = useMeasure<HTMLDivElement>();
    const [postsDisplayed, setPostsDisplayed] = useState<IPost[]>(null);
    const history = useHistory();
    const params = queryString.parse(history.location.search) as {page: string};
    const [options, setOptions] = useState<IQueryOptions>({
        _page: params.page ? parseInt(params.page) : 1,
        _limit: 10
    })
    const paginationAction = (page:number) => {
        const newOptions = {...options, _page:page+1}
        setOptions(newOptions)
        history.push({
            search: `?page=${page+1}`
        })
        fetchPosts(newOptions)
    }
    useEffect(() => {
        fetchPosts(options)     
    }, [])
    useEffect(() => {
        setPostsDisplayed(getPosts(options, queries, posts, photos, users))
    }, [queries, options])
    let content = <Loading width="100%" height={`${height > 0 ? height : 200}px`} />
    if(!loading && postsDisplayed) {
        content = <PostsStyled ref={ref}>
            { postsDisplayed.map((post, i) => <PostStyled key={i} post={post}/>)
            }
        </PostsStyled>
    }
    return (
        <PublicationsStyled>
            <HeaderStyled>Publications</HeaderStyled>
            {content}
            <Pagination page={options._page - 1} maxPage={10} onClick={paginationAction}/>
        </PublicationsStyled>
    )
}

const mapStateToProps = (state:IStore) => {
    return {
        loading: state.postState.fetching,
        users: state.userState.users,
        posts: state.postState.posts,
        queries: state.postState.queries,
        photos: state.photoState.photos
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchPosts: (options:IQueryOptions) => dispatch(fetchPostsQueryAction(options))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
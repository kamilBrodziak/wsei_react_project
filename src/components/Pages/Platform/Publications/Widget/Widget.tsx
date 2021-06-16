import { Dispatch, FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchPhotosAction } from '../../../../../actions/PhotoActions';
import { fetchPostsAction, fetchPostsQueryAction, getPost, getPosts, getQueryPost as getQueryPosts } from '../../../../../actions/PostActions';
import { IStore } from '../../../../../reducers/rootReducer';
import { PlatformPaths } from '../../../../../routes/PlatformRoutes';
import Colors from '../../../../../styledHelpers/Colors';
import { IPhoto } from '../../../../../utils/IRestFiles';
import { IPost, IRestPost } from '../../../../../utils/IRestPost';
import { IQueryOptions } from '../../../../../utils/IRestQuery';
import { IUser } from '../../../../../utils/IRestUser';
import { missingValues } from '../../../../../utils/Utils';
import Loading from '../../../../Common/Animations/Loading';
import Link from '../../../../Common/Links/Link';
import ImageHeader from '../Common/ImageHeader';
import ShortPost from '../Common/ShortPost';

const WidgetStyled = styled.section`
    border-radius: 5px;
    box-shadow: 1px 2px 2px 1px ${Colors.boxShadow};
    display: flex;
`

const ImageHeaderStyled = styled(ImageHeader)`
    width: 310px;
    height: 310px;
`

const ContentContainer = styled.div`
    flex: 1;
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ShortPostStyled = styled(ShortPost)`
    margin: 0 0 10px 0;
`

const TitleStyled = styled.h2`
    color: ${Colors.darkGray};
    font-size: 2.2rem;
    font-weight: bold;
    margin: 0 0 10px 0;
`

const LinkStyled = styled(Link)`
    && {
        color: ${Colors.linkDark};
    }
    padding: 10px 0 0 0;
    font-size: 1.7rem;
`

interface IProps {
    fetchPosts: (query:IQueryOptions) => void;
    loading: boolean;
    photos: {[key:number]:IPhoto};
    users: IUser[];
    posts: {[key:number]:IRestPost};
    queries: {[key:string]:number[]};
}

const Widget:FC<IProps> = ({loading, fetchPosts, queries, posts, photos, users}) => {
    let content = <Loading width="100%" height="200px" />
    const options:IQueryOptions = {_page: 1, _limit: 4}
    const [postsDisplayed, setPostsDisplayed] = useState<IPost[]>(null);
    useEffect(() => {
        fetchPosts(options)     
    }, [])
    useEffect(() => {
        setPostsDisplayed(getPosts(options, queries, posts, photos, users))
    }, [queries, loading])

    if(!loading && postsDisplayed) {
        const link = `${PlatformPaths.PUBLICATIONS}`;
        content = <>
            <ImageHeaderStyled post={postsDisplayed[0]} />
            <ContentContainer>
                <TitleStyled>Latest publications</TitleStyled>
                {postsDisplayed.map((post, i) => i !== 0 ? <ShortPostStyled key={i} post={post} /> : null)}
                <LinkStyled to={link}>See more publications</LinkStyled>
            </ContentContainer>
        </>
    }
    return (
        <WidgetStyled>
            {content}
        </WidgetStyled>
    )
}

const mapStateToProps = (state: IStore) => {
    return {
        loading: state.postState.fetching,
        queries: state.postState.queries,
        posts: state.postState.posts,
        photos: state.photoState.photos,
        users: state.userState.users
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchPosts: (query:IQueryOptions) => dispatch(fetchPostsQueryAction(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPostAction, getPost } from '../../../../actions/PostActions';
import { IStore } from '../../../../reducers/rootReducer';
import { IPhoto } from '../../../../utils/IRestFiles';
import { IPost, IRestPost } from '../../../../utils/IRestPost';
import { IUser } from '../../../../utils/IRestUser';
import Loading from '../../../Common/Animations/Loading';
import ImageHeader from './Common/ImageHeader';

const PublicationStyled = styled.article`

`

const ImageHeaderStyled = styled(ImageHeader)`
    && {
        height: 300px;
        text-align: center;
        align-items: center;
    }
`

const PostContent = styled.section`
    font-size: 1.8rem;
    margin: 20px 0 0 0;
`

interface IProps {
    loading: boolean,
    fetchPost: (id:number) => Promise<void>;
    photos: {[key:number]:IPhoto};
    users: IUser[];
    posts: {[key:number]:IRestPost};
}

const Publication:FC<IProps> = ({loading, fetchPost, photos, users, posts}) => {
    const [post, setPost] = useState<IPost>(null);
    const route = useRouteMatch<{id:string}>()
    const id = parseInt(route.params.id);
    useEffect(() => {
        const tempPost = getPost(id, posts, photos, users);
        if(tempPost) {
            setPost(getPost(id, posts, photos, users));
        } else {
            fetchPost(id)
        }
    }, [])
    useEffect(() => {
        if(!loading) 
            setPost(getPost(id, posts, photos, users));
    }, [loading])
    let content = <Loading width="100%" height={`500px`} />;
    if(!loading ) {
        content = post ?  <>
            <ImageHeaderStyled post={post} />
            <PostContent>{post.body}</PostContent>
        </> : <PostContent>No such post with that id</PostContent>
    }
    return (
        <PublicationStyled>
            {content}
        </PublicationStyled>
    )
}

const mapStateToProps = (state:IStore) => {
    return {
        loading: state.postState.fetching,
        users: state.userState.users,
        posts: state.postState.posts,
        photos: state.photoState.photos
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchPost: (id:number) => dispatch(fetchPostAction(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Publication);

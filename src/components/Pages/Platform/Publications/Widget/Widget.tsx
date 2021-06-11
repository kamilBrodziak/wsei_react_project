import { FC } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchPhotosAction } from '../../../../../actions/PhotoActions';
import { fetchPostsAction } from '../../../../../actions/PostActions';
import { IStore } from '../../../../../reducers/rootReducer';
import { PlatformPaths } from '../../../../../routes/PlatformRoutes';
import Colors from '../../../../../styledHelpers/Colors';
import { IPost } from '../../../../../utils/IRestPost';
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
    getPosts: (ids:number[]) => IPost[];
    posts: {[key:number]:IPost}
    loading: boolean;
}

const Widget:FC<IProps> = ({loading, getPosts, posts}) => {
    const ids = [1,2,3,4];
    let content = <Loading width="100%" height="200px" />
    const postsIds = Object.keys(posts).map(id => parseInt(id));
    const missingIds = missingValues(ids, postsIds);
    if(missingIds.length) {
        getPosts(ids);
    } else if(!loading) {
        const link = `${PlatformPaths.PUBLICATIONS}`;
        content = <>
            <ImageHeaderStyled post={posts[1]} />
            <ContentContainer>
                <TitleStyled>Latest publications</TitleStyled>
                {ids.map((id, i) => i !== 0 ? <ShortPostStyled key={i} post={posts[id]} /> : null)}
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
        posts: state.postState.posts
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        getPosts: (ids:number[]) => dispatch(fetchPostsAction(ids))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
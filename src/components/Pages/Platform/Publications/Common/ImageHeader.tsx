import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PlatformPaths } from '../../../../../routes/PlatformRoutes';
import Colors from '../../../../../styledHelpers/Colors';
import { IPost } from '../../../../../utils/IRestPost';
import { dateToString } from '../../../../../utils/Utils';
import Author from './Author';

const ImageHeaderStyled = styled.div<ImgProps>`
    position: relative;
    background: ${({url}) => `url('${url}')`};
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 8px 20px 8px;
    background-size: cover;
    background-position: center;
`


const TitleLinkStyled = styled(Link)`
    font-weight: bold;
    color: white;
`

const MetaStyled = styled.div`
    display: flex;
    font-size: 1.5rem;
    padding: 3px 0 0 0;
`

const Datestyled = styled.span`
    color: ${Colors.lightGray};
`

const AuthorStyled = styled(Author)`
    a {
        color: ${Colors.lightGray};
    }
`


interface ImgProps {
    url: string;
}

interface IProps {
    post: IPost;
    className?: string;
}

const ImageHeader:FC<IProps> = ({className, post}) => {
    const link = `${PlatformPaths.PUBLICATIONS}?id=${post.id}`;
    return (
        <ImageHeaderStyled className={className} url={post.photo.url}>
            <TitleLinkStyled to={link}>{post.title}</TitleLinkStyled>
            <MetaStyled>
                <Datestyled>
                    {dateToString("d MMM. yyyy",post.date)}
                </Datestyled>
                <AuthorStyled user={post.user}/>
            </MetaStyled>
        </ImageHeaderStyled>
    )
}

export default ImageHeader;
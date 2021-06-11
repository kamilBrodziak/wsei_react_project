import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PlatformPaths } from '../../../../../routes/PlatformRoutes';
import Colors from '../../../../../styledHelpers/Colors';
import { IUser } from '../../../../../utils/IRestUser';
import Figure from '../../../../Common/Icons/Figure';
import Icon from '../../../../Common/Icons/Icon';

const AuthorStyled = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 0 8px;
`

const AuthorFigureStyled = styled(Figure)`
    margin: 0 10px 0 0;
    img {
        border-radius: 50%;
    }
`

const AuthorLinkStyled = styled(Link)`
    color: ${Colors.darkGray};
    cursor: pointer;
`

interface IProps {
    user: IUser;
    className?: string;
}

const Author:FC<IProps> = ({className, user}) => {
    const userLink = `${PlatformPaths.PEOPLE}?id=${user.id}`;
    return (
        <AuthorStyled className={className}>
            <AuthorFigureStyled width="12px" height="12px">
                <Icon src={user.photo.thumbnailUrl} alt={user.photo.title} />
            </AuthorFigureStyled>
            <AuthorLinkStyled to={userLink}>{user.name}</AuthorLinkStyled>
        </AuthorStyled>
    );
}

export default Author;
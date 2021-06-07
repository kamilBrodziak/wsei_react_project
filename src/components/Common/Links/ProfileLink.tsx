import { FC } from 'react';
import styled from 'styled-components';
import { AccountPaths } from '../../../routes/AccountRoutes';
import { IPhoto } from '../../../Utils/IRestObjects';
import Figure from '../Icons/Figure';
import Link from './Link';
import DefaultIcon from '../../../assets/icons/bell.svg';
import Icon from '../Icons/Icon';
import { FlexCentered } from '../../../styledHelpers/Positioning';

const ProfileLinkStyled = styled(Link)`
    ${FlexCentered}
    color: black;
`

const ProfileFigureStyled = styled(Figure)`
    margin: 0 3px 0 0;
`

interface IProps {
    userId: number;
    photo?: IPhoto;
    includeDefaultIcon?: boolean;
    isLoggedUser?: boolean;
    text: string;
}

const ProfileLink:FC<IProps> = ({userId, photo, includeDefaultIcon = false, isLoggedUser=false, text}) => {
    const link = isLoggedUser ?  `${AccountPaths.PROFILE}` : `${AccountPaths.PROFILE}/${userId}`
    const src = photo ? photo.url : (includeDefaultIcon ? DefaultIcon : null);
    const alt = photo ? photo.title : "Profile icon";
    return (
        <ProfileLinkStyled to={link}>
            { src && 
                <ProfileFigureStyled width="18px" height="18px">
                    <Icon src={src} alt={alt} />
                </ProfileFigureStyled>
            }
            {text}
        </ProfileLinkStyled>
    )
} 

export default ProfileLink;
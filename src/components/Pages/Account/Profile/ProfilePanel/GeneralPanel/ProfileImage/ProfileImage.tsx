import { FC } from 'react'
import styled from 'styled-components';
import AccountRoutes from '../../../../../../../routes/AccountRoutes';
import PlatformRoutes from '../../../../../../../routes/PlatformRoutes';
import WorkspacesRoutes from '../../../../../../../routes/WorkspacesRoutes';
import { FlexCentered } from '../../../../../../../styledHelpers/Positioning';
import { IPhoto } from '../../../../../../../Utils/IRestObjects';
import Figure from '../../../../../../Common/Icons/Figure';
import Icon from '../../../../../../Common/Icons/Icon';
import Link from '../../../../../../Common/Links/Link';


const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    ${FlexCentered}
    width: 100px;
`

const FigureStyled = styled(Figure)`
    position: relative;
    margin: 0 0 10px 0;
`

const LinkStyled = styled(Link)`
    text-decoration: none;
    font-size: 1.7rem;
`

const ProfileImgStyled = styled(Icon)`
    border-radius: 50%;
`

const CompanyIconStyled = styled(Icon)`
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: white;
    border-radius: 50%;
    padding: 4px;
    width: 20px;
    height: 20px;

`

interface IProps {
    photo: IPhoto;
    companyPhoto?: IPhoto;
    editable?: boolean;
    userId?: number;
}

const ProfileImage:FC<IProps> = ({photo, userId = null, companyPhoto = null, editable = false}) => {
    const profilePath:string = userId === null ? null : 
        PlatformRoutes.routes.find(route => route.name === "People").path + `/?id=${userId}`;
    
    return (
        <ContainerStyled>
            <FigureStyled width="60px" height="60px">
                <ProfileImgStyled src={photo.thumbnailUrl} alt={photo.title} />
                {companyPhoto && 
                    <CompanyIconStyled src={photo.thumbnailUrl} alt={photo.title} />            
                }
            </FigureStyled>
            {profilePath && 
                <LinkStyled to={profilePath}>See profile</LinkStyled>
            }
        </ContainerStyled>
    )
}


export default ProfileImage;
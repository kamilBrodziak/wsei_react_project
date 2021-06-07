import { FC } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { IStore } from '../../../../reducers/rootReducer';
import AccountRoutes from '../../../../routes/AccountRoutes';
import Colors from '../../../../styledHelpers/Colors';
import { FlexCentered } from '../../../../styledHelpers/Positioning';
import { IUser } from '../../../../utils/IRestObjects';
import Figure from '../../../Common/Icons/Figure';
import Icon from '../../../Common/Icons/Icon';
import Link from '../../../Common/Links/Link';


const ProfileImgStyled = styled(Icon)`
    border-radius: 50%;
`

const DetailsSpanStyled = styled.span`
    font-size: 1.4rem;
    color: ${Colors.gray};
`;

const DetailsStyled = styled.div`
    width: 100%;
    border: solid lightgray;
    border-width: 0 0 1px 0;
    ${FlexCentered}
    flex-direction: column;
    padding: 25px 0;
`;

const LinkStyled = styled(Link)`
    font-size: 1.7rem;
    text-decoration: none;
    margin: 5px 0 10px 0;
    color: ${Colors.linkDark};
    &:visited {
        color: ${Colors.linkDark};
    }
`;

interface IProps {
    user: IUser;
}


const Details:FC<IProps> = ({user}) => {
    const jobTitle = "Job title";
    
    return (
        <DetailsStyled>
            <Figure width="80px" height="80px">
                <ProfileImgStyled src={user?.photo?.thumbnailUrl} alt={user?.photo?.title} />
            </Figure>
            <LinkStyled to={AccountRoutes.routes.find((el) => el.name === "Profile").path}>
                {user?.name}
            </LinkStyled>
            <DetailsSpanStyled>{jobTitle} - {user?.company?.name}</DetailsSpanStyled>
        </DetailsStyled>
    )
}




export default Details;
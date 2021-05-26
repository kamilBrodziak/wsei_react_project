import React, { Dispatch, FC } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logoutUser } from '../../../../../../actions/UserActions';
import { IStore } from '../../../../../../reducers/rootReducer';
import AccountRoutes from '../../../../../../routes/AccountRoutes';
import PlatformRoutes from '../../../../../../Routes/PlatformRoutes';
import { FlexCentered } from '../../../../../../styledHelpers/Positioning';
import Figure from '../../../../../Common/Icons/Figure';
import Icon from '../../../../../Common/Icons/Icon';
import Link from '../../../../../Common/Links/Link';



const LogoutSpanStyled = styled.span`
    font-size: 2rem;
    color: gray;
    padding: 0 0 0 20px;     
`;



const LogoutLinkStyled = styled(Link)`
    ${FlexCentered}
    cursor: pointer;
    padding: 10px 0;
    text-decoration: none;
`;

interface IProps {
    onClick: (e:React.MouseEvent) => void;
}

const LogoutLink:FC<IProps> = ({onClick}) => {
    const logoutComponent = AccountRoutes.routes.find((route) => route.name==="Logout");
    return (
        <LogoutLinkStyled to={logoutComponent.path} onClick={onClick}>
            <Figure width={"25px"} height={"25px"}>
                <Icon src={logoutComponent.icon} alt={logoutComponent.iconAlt}/>
            </Figure>
            <LogoutSpanStyled>{logoutComponent.name}</LogoutSpanStyled>
        </LogoutLinkStyled>
    )
}



export default LogoutLink;
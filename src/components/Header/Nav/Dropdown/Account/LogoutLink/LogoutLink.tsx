import React, { FC } from 'react'
import styled from 'styled-components';
import AccountRoutes from '../../../../../../routes/AccountRoutes';
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
    const logout = AccountRoutes.routes.find((route) => route.name==="Logout");
    return (
        <LogoutLinkStyled to={logout.path} onClick={onClick}>
            <Figure width={"25px"} height={"25px"}>
                <Icon src={logout.icon} alt={logout.iconAlt}/>
            </Figure>
            <LogoutSpanStyled>{logout.name}</LogoutSpanStyled>
        </LogoutLinkStyled>
    )
}

export default LogoutLink;
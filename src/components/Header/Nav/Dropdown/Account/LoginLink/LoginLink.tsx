import React, { FC } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logoutUser } from '../../../../../../actions/UserActions';
import { IStore } from '../../../../../../reducers/rootReducer';
import AccountRoutes from '../../../../../../routes/AccountRoutes';
import { FlexCentered } from '../../../../../../styledHelpers/Positioning';
import Figure from '../../../../../Common/Icons/Figure';
import Icon from '../../../../../Common/Icons/Icon';
import Link from '../../../../../Common/Links/Link';

const LoginSpanStyled = styled.span`
    font-size: 2rem;
    color: gray;
    padding: 0 0 0 20px;     
`;

const LoginLinkStyled = styled(Link)`
    ${FlexCentered}
    cursor: pointer;
    padding: 10px 0;
    text-decoration: none;
`;

interface IProps {
    type: string;
    onClick: (e:React.MouseEvent) => void;
}

const LoginLink:FC<IProps> = ({onClick, type}) => {
    const component = AccountRoutes.routes.find(route => route.name === type);
    return (
        <LoginLinkStyled to={component.path} onClick={onClick}>
            <Figure width={"25px"} height={"25px"}>
                <Icon src={component.icon} alt={component.iconAlt}/>
            </Figure>
            <LoginSpanStyled>{component.name}</LoginSpanStyled>
        </LoginLinkStyled>
    )
}



export default LoginLink;
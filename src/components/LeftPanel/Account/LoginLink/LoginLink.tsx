import React, { FC, MouseEvent } from 'react'
import styled from 'styled-components';
import AccountRoutes from '../../../../routes/AccountRoutes';
import { IAppRoute } from '../../../../routes/IRoutes';
import { FlexCentered } from '../../../../styledHelpers/Positioning';
import Icon from '../../../Common/Icons/Icon';
import Link from '../../../Common/Links/Link';


const LoginLinkStyled = styled(Link)`
    width: 100%;
    color: black;
    cursor: pointer;
    ${FlexCentered}    
`;

const SpanStyled = styled.span`
    padding: 0 0 0 10px;
    font-size: 1.7rem;
`

const FigureStyled = styled.figure`
    width: 40px;
    height: 40px;
`

interface IProps {
    type: string;
    onClick: (e:React.MouseEvent, icon?: string, name?: string, iconAlt?: string) => void;
}


const LoginLink:FC<IProps> = ({type, onClick}) => {
    let component : IAppRoute = null;
    if(type == "Login") {
        component = AccountRoutes.routes.find(route => route.name === "Login");
    } else {
        component = AccountRoutes.routes.find(route => route.name === "Register");
    }
    return (
        <LoginLinkStyled to={component.path} pageName={component.name} onClick={(e) => onClick(e, component.icon, component.name, component.iconAlt)}>
            <FigureStyled>
                <Icon src={component.icon} alt={component.iconAlt} />
            </FigureStyled>
            <SpanStyled>Login</SpanStyled>
        </LoginLinkStyled>
    )
}

export default LoginLink;
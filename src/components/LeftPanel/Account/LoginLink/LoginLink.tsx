import React, { FC, MouseEvent } from 'react'
import styled from 'styled-components';
import AccountRoutes from '../../../../routes/AccountRoutes';
import { IAppRoute } from '../../../../routes/IRoutes';
import Colors from '../../../../styledHelpers/Colors';
import { FlexCentered } from '../../../../styledHelpers/Positioning';
import Figure from '../../../Common/Icons/Figure';
import Icon from '../../../Common/Icons/Icon';
import Link from '../../../Common/Links/Link';


const LoginLinkStyled = styled(Link)`
    width: 150px;
    color: black;
    cursor: pointer;
    ${FlexCentered}
    text-decoration: none;
    margin: 0 auto;
    margin: 10px 0;
    font-weight: bold;
    color: ${Colors.gray};
    padding: 10px 0;
`;

const SpanStyled = styled.span`
    padding: 0 0 0 20px;
    font-size: 1.7rem;
    flex: 1;
`

const FigureStyled = styled(Figure)`
    justify-content: flex-end;
    flex: 1;
`

interface IProps {
    type: string;
}


const LoginLink:FC<IProps> = ({type}) => {
    const component = AccountRoutes.routes.find(route => route.name === type);
    return (
        <LoginLinkStyled to={component.path} >
            <FigureStyled width="40px" height="30px">
                <Icon src={component.icon} alt={component.iconAlt} />
            </FigureStyled>
            <SpanStyled>{component.name}</SpanStyled>
        </LoginLinkStyled>
    )
}

export default LoginLink;
import React, { FC } from 'react'
import styled from 'styled-components';
import PlatformRoutes from '../../../../routes/PlatformRoutes';
import AppRoutes from '../../../../routes/Routes';
import Button from '../../../Common/Buttons/Button';
import Figure from '../../../Common/Icons/Figure';
import Icon from '../../../Common/Icons/Icon';
import Link from '../../../Common/Links/Link';
import PlusIconSrc from '../../../../assets/icons/plus.svg';
import UserPlusIconSrc from '../../../../assets/icons/user-plus.svg';
import { FlexCentered } from '../../../../styledHelpers/Positioning';
import Colors from '../../../../styledHelpers/Colors';

const ListStyled = styled.ul`
    list-style: none;
    padding: 10px 20px;
    width: 100%;
`;

const LiStyled = styled.li`
    ${FlexCentered}
    padding: 5px 0;
`;

const IconContainerStyled = styled(Figure)`
`

const LinkAddStyled = styled(Link)`
    ${FlexCentered};
    width: 35px;
    height: 25px;
    padding: 3px;
    border: 2px solid black;
    border-radius: 5px;
`

const LinkStyled = styled(Link)`
    margin: 0 auto 0 10px;
    font-weight: bold;
    font-size: 1.7rem;
    color: black;
    text-decoration: none;
    &::visited {
        color: black;
    }
`

const Menu:FC = () => {
    const network = {
        name: "Your network",
        icon: UserPlusIconSrc,
        alt: 'Add user icon',
        route: PlatformRoutes.routes.find(el => el.name === "People")
    };
    const publications = {
        name: "Your publications",
        icon: PlusIconSrc,
        alt: "Add publication icon",
        route: PlatformRoutes.routes.find(el => el.name === "Publications" )
    };
    const elements = [network, publications].map((el, i) => {
        return (
            <LiStyled key={i}>
                <IconContainerStyled width="25px" height="25px">
                    <Icon src={el.route.icon} alt={el.route.iconAlt} />
                </IconContainerStyled>
                <LinkStyled to={el.route.path}>{el.name}</LinkStyled>
                <LinkAddStyled to={el.route.path}>
                    <Icon src={el.icon} alt={el.alt} />
                </LinkAddStyled>
            </LiStyled>
        )
    })
    return (
        <ListStyled>
            {elements}
        </ListStyled>
    )
}

export default Menu;
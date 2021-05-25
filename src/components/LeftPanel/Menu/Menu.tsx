import React, { FC } from 'react'
import styled from 'styled-components';
import PlatformRoutes from '../../../routes/PlatformRoutes';
import Colors from '../../../styledHelpers/Colors';
import Figure from '../../Common/Icons/Figure';
import Icon from '../../Common/Icons/Icon';
import Link from '../../Common/Links/Link';

const ListStyled = styled.ul`
    list-style: none;
    padding: 20px;
    color: ${Colors.darkGray};
`

const LiStyled = styled.li`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

const IconContainerStyled = styled(Figure)`

`;

const LinkStyled = styled(Link)`
    margin: 0 0 0 20px;
    font-size: 1.7rem;
    color: ${Colors.darkGray};
    text-decoration: none;
`;

const Menu:FC = () => {
    const publications = PlatformRoutes.routes.find(el => el.name === "Publications");
    const ecosystem = PlatformRoutes.routes.find(el => el.name === "Entities");
    const entities = PlatformRoutes.routes.find(el => el.name === "Entities");

    const elements = [publications, ecosystem, entities].map(el => {
        return (
            <LiStyled>
                <IconContainerStyled width="35px" height="35px">
                    <Icon src={el.icon} alt={el.iconAlt}/>
                </IconContainerStyled>
                <LinkStyled to={el.path}>{el.name}</LinkStyled>
            </LiStyled>
        )
    });
    return (
        <ListStyled>
            {elements}
        </ListStyled>
    )
}


export default Menu;

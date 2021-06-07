import React, { FC, MouseEvent } from 'react'
import styled from 'styled-components';
import { IAppRoute } from '../../../../../../routes/IRoutes';
import { FlexCentered } from '../../../../../../styledHelpers/Positioning';
import Figure from '../../../../../Common/Icons/Figure';
import Icon from '../../../../../Common/Icons/Icon';
import Link from '../../../../../Common/Links/Link';
const iconWidth = 25;

const ListItemStyled = styled.li`
    margin: 0 0 5px 0;
`;

const LinkStyled = styled(Link)`
    ${FlexCentered}
    padding: 5px 0;
    flex-direction: row;
    text-decoration: none;
`

const TextStyled = styled.span`
    flex: 1;
    color: black;
    font-size: 2rem;
    padding: 0 0 0 5px;
`;


interface IProps extends IAppRoute {
    onClick: (e:MouseEvent) => void
}

const MenuItem:FC<IProps> = ({onClick, name, path, icon, iconAlt}) => {
    return (
        <ListItemStyled >
            <LinkStyled to={path} onClick={(e:MouseEvent) => onClick(e)}>
                <Figure width={`${iconWidth}px`} height={`${iconWidth}px`}>
                    <Icon src={icon} alt={iconAlt} />
                </Figure>
                <TextStyled>{name}</TextStyled>
            </LinkStyled>
        </ListItemStyled>
    );
}


export default MenuItem;
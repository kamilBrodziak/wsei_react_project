import React, { FC, MouseEvent } from 'react'
import styled, { css } from 'styled-components';
import { IAppRoute } from '../../../../../../Routes/Routes';
import { FlexCentered } from '../../../../../../styledHelpers/Positioning';
import Figure from '../../../../../Common/Icons/Figure';
import Icon from '../../../../../Common/Icons/Icon';
import Link from '../../../../../Common/Links/Link';
import ListItem from '../../../../../Common/List/ListItem';
const iconWidth = 25;

const itemStyle = css`
    margin: 0 0 5px 0;
`;

const anchorStyle = css`
    ${FlexCentered}
    padding: 5px 0;
    flex-direction: row;
    color: black;
    text-decoration: none;
`

const TextStyled = styled.span`
    flex: 1;
    font-size: 2rem;
    padding: 0 0 0 5px;
`;


interface IProps extends IAppRoute {
    onClick: (e:MouseEvent, icon?: string, name?: string, iconAlt?: string) => void
    key: number;
}

const MenuItem:FC<IProps> = ({onClick, name, key, path, icon, iconAlt}) => {
    return (
        <ListItem css={itemStyle} key={key}>
            <Link to={path} onClick={(e:MouseEvent) => onClick(e, icon, name, iconAlt)} css={anchorStyle}>
                <Figure width={`${iconWidth}px`} height={`${iconWidth}px`}>
                    <Icon src={icon} alt={iconAlt} />
                </Figure>
                <TextStyled>{name}</TextStyled>
            </Link>
        </ListItem>
    );
}


export default MenuItem;
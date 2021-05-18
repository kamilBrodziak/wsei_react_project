import React, { FC } from 'react'
import styled, { css } from 'styled-components';
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

export interface IDropdownMenuItemProps {
    name: string;
    url: string;
    id: number;
    iconSrc?: string;
    iconAlt?: string;
}

interface IProps extends IDropdownMenuItemProps {
    onClick: Function;
}

const MenuItem:FC<IProps> = ({id, onClick, name, url, iconSrc, iconAlt}) => {
    return (
        <ListItem css={itemStyle} key={id}>
            <Link href={url} onClick={() => onClick()} css={anchorStyle}>
                <Figure width={`${iconWidth}px`} height={`${iconWidth}px`}>
                    <Icon src={iconSrc} alt={iconAlt} />
                </Figure>
                <TextStyled>{name}</TextStyled>
            </Link>
        </ListItem>
    );
}


export default MenuItem;
import React, { FC } from 'react'
import styled, { css } from 'styled-components';
import List from '../../../../Common/List/List';
import ListItem from '../../../../Common/List/ListItem';
import MenuItem, { IDropdownMenuItemProps } from './MenuItem/MenuItem';
const mainListStyle = css`
    list-style: none;
    overflow-y: auto;
    overflow-x: hidden;
    border: solid #e6e6e6;
    border-width: 0 0 2px 0;
    padding: 2px 10px;
`

const nestedListStyle = css`
    list-style: none;
    padding: 2px;
`;

const LabelStyle = css`
    color: #707070;
    font-size: 1.6rem;
`;

export interface IDropdownMenuList {
    label?: string;
    id: number;
    items: IDropdownMenuItemProps[]
}

export interface IDropdownMenuProps {
    lists: IDropdownMenuList[];
    label?: string;
}

interface IProps extends IDropdownMenuProps {
    onClick: Function;
}

const Menu:FC<IProps> = ({lists, onClick}) => {
    const listsDOM = lists.map(({items, id, label}) => {
        return (
            <ListItem key={id}>
                <List label={label} css={nestedListStyle} labelCss={LabelStyle}>
                    {
                        items.map(({...others}) => {
                            return (
                                <MenuItem onClick={() => onClick()} {...others}/>
                            );
                        })
                    }
                </List>
            </ListItem>
        );
    })
    return (
        <List css={mainListStyle}>
            {listsDOM}
        </List>
    );
}


export default Menu;
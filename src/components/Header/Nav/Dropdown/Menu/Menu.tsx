import React, { FC, MouseEvent } from 'react'
import styled, { css } from 'styled-components';
import { IAppRoutes } from '../../../../../Routes/Routes';
import List from '../../../../Common/List/List';
import ListItem from '../../../../Common/List/ListItem';
import MenuItem from './MenuItem/MenuItem';
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

interface IProps {
    lists: IAppRoutes[];
    label?: string;
    onClick: (e:MouseEvent, icon?: string, name?: string, iconAlt?: string) => void

}

const Menu:FC<IProps> = ({lists, onClick}) => {
    console.log(lists);
    const listsDOM = lists.map(({routes,  label}, i:number) => {
        return (
            <ListItem key={i}>
                <List key={0} label={label} css={nestedListStyle} labelCss={LabelStyle}>
                    {
                        routes.map(({...others}, j:number) => {
                            return (
                                <MenuItem key={j} onClick={onClick} {...others}/>
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
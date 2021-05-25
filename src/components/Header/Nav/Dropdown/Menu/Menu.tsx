import React, { FC, MouseEvent } from 'react'
import styled, { css }  from 'styled-components';
import { IAppRoutes } from '../../../../../routes/IRoutes';
import MenuItem from './MenuItem/MenuItem';

const MainListStyled = styled.ul`
    list-style: none;
    overflow-y: auto;
    overflow-x: hidden;
    border: solid #e6e6e6;
    border-width: 0 0 2px 0;
    padding: 2px 10px;
    font-size: 1.8rem;
    flex: 1;
    height: 300px;
`

const NestedListStyled = styled.ul`
    list-style: none;
    padding: 5px;
`;

const NestedListLabelStyled = styled.span`
    color: #707070;
    font-size: 1.6rem;
`;

const ListItemStyled = styled.li`

`;

interface IProps {
    lists: IAppRoutes[];
    label?: string;
    onClick: (e:MouseEvent, icon?: string, name?: string, iconAlt?: string) => void

}

const Menu:FC<IProps> = ({lists, onClick}) => {
    let key = 0;
    const listsDOM = lists.map(({routes,  label}) => {
        return (
            <ListItemStyled key={key++}>
                <NestedListLabelStyled>{label}</NestedListLabelStyled>
                <NestedListStyled key={key++}>
                    {
                        routes.map(({...others}) => {
                            return (
                                <MenuItem key={key++} onClick={onClick} {...others}/>
                            );
                        })
                    }
                </NestedListStyled>
            </ListItemStyled>
        );
    })
    return (
        <MainListStyled>
            {listsDOM.length > 0 ? listsDOM : "No matches"}
        </MainListStyled>
    );
}


export default Menu;
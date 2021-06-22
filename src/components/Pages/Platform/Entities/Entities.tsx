import React, { FC } from 'react'
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { PanelCss } from '../../../../styledHelpers/Common';
import { SortOptionsEnum } from './Nav/LowerNav/LeftSection/Sort';
import Nav from './Nav/Nav';
import { ViewSwitchEnum } from './Nav/UpperNav/Partials/ViewSwitch';
import TileIcon from '../../../../assets/images/contract.jpg';
import TileIcon2 from '../../../../assets/images/corporate.jpg';
import TileIcon3 from '../../../../assets/images/norms.jpg';
import Tile from './Tile/Tile';


const EntitiesStyled = styled.section<{isFullscreen:boolean}>`
    background: white;
    ${PanelCss}
    padding: 10px;
    ${props => props.isFullscreen && css`
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
        overflow-y: auto;
        width: 100vw;
        height: 100vh;
    `}
`;

const EntitiesList = styled.ul<{mode:ViewSwitchEnum}>`
    padding: 10px;
    ${props => props.mode === ViewSwitchEnum.MOSAIC ? css`
        display: grid;
        grid-template-columns: repeat(auto-fit, 260px);
        grid-gap: 10px;
        justify-content: space-around;
    `: css`
        display: flex;
        & > * {
            margin: 0 0 10px 0;
        }
        flex-direction: column;
    `}
    
    list-style: none;
`

interface IProps {

}

const Entities:FC<IProps> = () => {
    const [view, setView] = useState(ViewSwitchEnum.MOSAIC);
    const [fullscreen, setFullscreen] = useState(false);
    const allData = [
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon2, iconAlt: 'entity icon'},
        {title: 'Subsid Corp Ltd', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon3, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon2, iconAlt: 'entity icon'},
        {title: 'Subsid Corp Ltd', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon3, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon2, iconAlt: 'entity icon'},
        {title: 'Subsid Corp Ltd', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon3, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon2, iconAlt: 'entity icon'},
        {title: 'Subsid Corp Ltd', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon3, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon2, iconAlt: 'entity icon'},
        {title: 'Subsid Corp Ltd', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon3, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon2, iconAlt: 'entity icon'},
        {title: 'Subsid Corp Ltd', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon3, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon2, iconAlt: 'entity icon'},
        {title: 'Subsid Corp Ltd', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon3, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon2, iconAlt: 'entity icon'},
        {title: 'Subsid Corp Ltd', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon3, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon2, iconAlt: 'entity icon'},
        {title: 'Subsid Corp Ltd', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon3, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon, iconAlt: 'entity icon'},
        {title: 'ABC generic company', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon2, iconAlt: 'entity icon'},
        {title: 'Subsid Corp Ltd', meta: 'Caracas 1050, Distrito Capital, Venezuela', icon: TileIcon3, iconAlt: 'entity icon'},
    ]
    const handleViewSwitch = (type:ViewSwitchEnum) => {
        setView(type);
    }
    
    const handleDropdown = () => {

    }

    const handleFilter = () => {
    }

    const handleSearch = (search:string) => {

    }

    const handleFullscreen = () => {
        setFullscreen(!fullscreen);
    }

    const handleGroupOptions = () => {

    }

    const handleSort = (type:SortOptionsEnum) => {
        
    }

    return (
        <EntitiesStyled isFullscreen={fullscreen}>
            <Nav handleViewSwitch={handleViewSwitch} handleSearch={handleSearch}
                handleFilter={handleFilter} handleDropdown={handleDropdown} handleFullScreen={handleFullscreen}
                handleGroupOptions={handleGroupOptions} handleSort={handleSort}
                />
            <EntitiesList mode={view}>
                {allData.map(({title, icon, iconAlt, meta}, i) => <Tile mode={view} title={title} 
                    icon={icon} iconAlt={iconAlt} meta={meta} key={i} />)}
            </EntitiesList>
        </EntitiesStyled>
    )
}

export default Entities;
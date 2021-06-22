import { FC, useState } from 'react';
import styled from 'styled-components';
import { IDropdownOption } from '../../../../Common/Dropdowns/OptionsDropdown';
import Filters from './Filters/Filters';
import { SortOptionsEnum } from './LowerNav/LeftSection/Sort';
import LowerNav from './LowerNav/LowerNav';
import { ViewSwitchEnum } from './UpperNav/Partials/ViewSwitch';
import UpperNav from './UpperNav/UpperNav';

const NavStyled = styled.nav`

`

const UpperStyled = styled.div`
    display: flex;
    justify-content: space-between;
`


interface IProps {
    handleViewSwitch: (type:ViewSwitchEnum) => void;
    handleDropdown: (options:IDropdownOption[]) => void;
    handleSort: (type:SortOptionsEnum) => void;
    handleFilter: () => void;
    handleFullScreen: () => void;
    handleSearch: (search:string) => void;
    handleGroupOptions: (options:IDropdownOption[]) => void;
}

const Nav:FC<IProps> = ({handleViewSwitch, handleDropdown, handleSort,
         handleFilter, handleFullScreen, handleSearch, handleGroupOptions}) => {
    const [filtersShowed, setFiltersShowed] = useState(false); 
    
    const onFilterClick = () => {
        setFiltersShowed(!filtersShowed);
    }
    return (
        <NavStyled>
            <UpperNav handleViewSwitch={handleViewSwitch} />
            <LowerNav handleFilter={onFilterClick} handleFullScreen={handleFullScreen} handleSort={handleSort}
                handleSearch={handleSearch} />
            <Filters opened={filtersShowed}/>
        </NavStyled>
    )
}

export default Nav;
import React, {FC, MouseEvent, useState} from 'react'
import styled from 'styled-components';
import Breakpoints from '../../../styledHelpers/Breakpoints';
import Dropdown from './Dropdown/Dropdown';
import UpperNav from './UpperNav/UpperNav';
import useDropdown from '../../../../node_modules/react-dropdown-hook/build/index';
import { HomeRoute } from '../../../routes/PlatformRoutes';

const NavContainer = styled.nav`
    height: 100%;
    @media ${Breakpoints.tablet} {
        width: 100%;
        width: 250px;
    }
    position: relative;
`

interface IState {
    activeIcon : string;
    activeText : string;
}

interface IProps{
}

const Nav:FC<IProps> = (props:IProps) => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    
    const onLinkClick = (e:MouseEvent) => {
        closeDropdown();
    }
        
    return (
        <NavContainer ref={wrapperRef}>
            <UpperNav changeOpen={toggleDropdown} />
            {dropdownOpen && <Dropdown onClick={onLinkClick}/>}
        </NavContainer>
    )
}

export default Nav;
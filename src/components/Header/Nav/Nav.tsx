import React, {FC, MouseEvent, useState} from 'react'
import styled from 'styled-components';
import Breakpoints from '../../../styledHelpers/Breakpoints';
import Dropdown from './Dropdown/Dropdown';
import UpperNav from './UpperNav/UpperNav';
import { HomeRoute } from '../../../Routes/Routes';
import useDropdown from '../../../../node_modules/react-dropdown-hook/build/index';

const NavContainer = styled.nav`
    width: 100%;
    height: 100%;
    @media ${Breakpoints.tablet} {
        width: 250px;
    }
`

interface IState {
    activeIcon : string;
    activeText : string;
}

interface IProps{
}

const Nav:FC<IProps> = (props:IProps) => {
    const [state, setState] = useState({
        icon: HomeRoute.icon,
        name: HomeRoute.name
    }
    );
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    
    const onLinkClick = (e:MouseEvent, icon: string,name: string, iconAlt: string) => {
        setState({
            icon:icon,
            name: name
        })
        closeDropdown();
    }
        
    return (
        <NavContainer ref={wrapperRef}>
            <UpperNav activeIcon={state.icon} activeText={state.name} changeOpen={toggleDropdown} />
            {dropdownOpen && <Dropdown onClick={onLinkClick}/>}
        </NavContainer>
    )
}

export default Nav;
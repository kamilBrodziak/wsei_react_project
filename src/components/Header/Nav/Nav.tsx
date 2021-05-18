import houseSrc from '../../../assets/icons/house.svg'
import peopleSrc from '../../../assets/icons/people.svg'

import React from 'react'
import iconSrc from "../../../assets/icons/house.svg"
import styled from 'styled-components';
import Breakpoints from '../../../styledHelpers/Breakpoints';
import Dropdown from './Dropdown/Dropdown';
import { IDropdownMenuProps } from './Dropdown/Menu/Menu';
import UpperNav from './UpperNav/UpperNav';
import OutsideClickHandler, { IOutsideClickHandler } from '../../../Utils/OutsideClickHandler';

const NavContainer = styled.nav`
    width: 100%;
    height: 100%;
    @media ${Breakpoints.tablet} {
        width: 250px;
    }
`

interface IState {
    open : boolean;
    activeIcon : string;
    activeText : string;
}

interface IProps {
}

export default class Nav extends React.Component<IProps, IState> implements IOutsideClickHandler{
    outsideClickHandler: OutsideClickHandler;
    state = {
        open: false,
        activeIcon: iconSrc,
        activeText: "Home"
    }
    dropdownClosedByOutsideClick = false;
    constructor(props:IProps) {
        super(props);
        this.closeDropdown = this.closeDropdown.bind(this);
        this.changeOpen = this.changeOpen.bind(this);
        this.openDropdown = this.openDropdown.bind(this);
        this.outsideClickHandler = new OutsideClickHandler(this);
    }

    handleClickOutside() {
        this.changeOpen();
    }

    componentDidMount() {
        this.outsideClickHandler.setComponent(this);
    }

    changeOpen () {
        this.outsideClickHandler.adjustListener(!this.state.open)
        this.setState({open: !this.state.open})
    };

    openDropdown() {
        this.setState({open: true});
    }

    onLinkClick = (icon: string,name: string) => {
        this.setState({
            activeIcon: icon,
            activeText: name
        });
        this.closeDropdown();
    }

    closeDropdown() {
        this.setState({open: false})
    }

    

    render() {
        const lists:IDropdownMenuProps = {
            lists: [
                {
                    label: "Platform",
                    id: 0,
                    items: [
                        {
                            id: 1,
                            name: "Home",
                            url: "Home",
                            iconAlt: "Home",
                            iconSrc: houseSrc
                        },
                        {
                            id: 2,
                            name: "Publications",
                            url: "Publications",
                            iconAlt: "Home",
                            iconSrc: houseSrc
                        },
                        {
                            id: 3,
                            name: "People",
                            url: "People",
                            iconAlt: "Home",
                            iconSrc: peopleSrc
                        },
                        {
                            id: 4,
                            name: "Entities",
                            url: "Entities",
                            iconAlt: "Home",
                            iconSrc: houseSrc
                        },
                        {
                            id: 5,
                            name: "Administration",
                            url: "Administration",
                            iconAlt: "Home",
                            iconSrc: houseSrc
                        }
                    ]
                }
            ]
        }
        return (
            <NavContainer ref={this.outsideClickHandler.setWrapperRef}>
                <UpperNav activeIcon={this.state.activeIcon} activeText={this.state.activeText} changeOpen={this.changeOpen} />
                {this.state.open && <Dropdown lists={lists.lists} onClick={this.onLinkClick}/>}
            </NavContainer>
        )
    }
}
import React from 'react'
import FigureIcon from '../../Common/Icons/Figure';
import iconSrc from "../../../assets/icons/house.svg"
import styled from 'styled-components';
import {FlexCentered} from '../../../styledHelpers/Positioning';
import arrowDownSrc from '../../../assets/icons/arrow-down.svg';
import Icon from '../../Common/Icons/Icon';
import Breakpoints from '../../../styledHelpers/Breakpoints';
const iconWidth = 25;
const arrowWidth = 9;

const NavContainer = styled.nav`
    width: 100%;
    height: 100%;
    ${FlexCentered}
    flex-direction: row;
    padding: 8px 0;
    cursor: pointer;

    @media ${Breakpoints.tablet} {
        width: 250px;
        position: relative;
    }
`
const ActiveText = styled.span`
    display: block;
    text-align: left;
    flex: 1;
    font-size: 1.8rem;
    padding: 0 0 0 10px;
`


interface IState {
    open : boolean;
    activeIcon : string;
    activeText : string;
}

interface IProps {}

export default class Nav extends React.Component<IProps, IState> {
    state = {
        open: false,
        activeIcon: iconSrc,
        activeText: "Home"
    }
    render() {
        return (
            <NavContainer>
                <FigureIcon width={`${iconWidth}px`} height="100%">
                    <Icon src={this.state.activeIcon} alt="Logo" />
                </FigureIcon>
                <ActiveText>{this.state.activeText}</ActiveText>
                <FigureIcon width={`${arrowWidth}px`} height="100%">
                    <Icon src={arrowDownSrc} alt="arrow" />
                </FigureIcon>
            </NavContainer>
        )
    }
}
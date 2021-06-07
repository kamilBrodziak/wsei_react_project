import React from 'react'
import styled from 'styled-components';
import Nav from "./Nav/Nav";
import iconSrc from "../../assets/icons/React-icon.svg";
import Search from './Search/Search';
import FigureIcon from '../Common/Icons/Figure';
import Figure from '../Common/Icons/Figure';
import Icon from '../Common/Icons/Icon';
import Notifications from './Notifications/Notifications';
import Breakpoints from '../../styledHelpers/Breakpoints';
import { FlexCentered } from '../../styledHelpers/Positioning';
import Colors from '../../styledHelpers/Colors';
// import {} from '../../styledHelpers/Positioning'
const HeaderStyled = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    background: white;
    z-index: 1000;
`;

const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: auto auto; 
    grid-template-areas: "logo search" "nav nav";
    align-items: center;
    position: relative;
    height: auto;
    width: 100%;
    box-shadow: 0 0 6px 1px gray;
    border-radius: 5px;
    padding: 2px 10px;
    @media ${Breakpoints.tablet} {
        display: flex;
        flex-direction: row;
    }

    & > *:nth-child(1) {
        grid-area: logo;
    }
    & > *:nth-child(3) {
        grid-area: search
    }
    & > *:nth-child(2) {
        grid-area: nav;
    }
`

const LogoStyled = styled.figure`
    ${FlexCentered}
    @media ${Breakpoints.tablet} {
        width: 50px;
        height: 50px;
    }
`

interface IProps {

}

export default class Header extends React.Component<IProps> {
    render() {
        return (
            <HeaderStyled id="siteHeader">
                <HeaderContainer>
                    <LogoStyled>
                        <Icon src={iconSrc} alt="Logo" />
                    </LogoStyled>
                    <Nav />
                    <Search />
                    <Notifications />
                </HeaderContainer>
            </HeaderStyled>
        )
    }
}
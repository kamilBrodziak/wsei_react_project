import React from 'react'
import styled from 'styled-components';
import Nav from "./Nav/Nav";
import iconSrc from "../../assets/icons/React-icon.svg";
import Search from './Search/Search';
import FigureIcon from '../Common/Icons/Figure';
import Figure from '../Common/Icons/Figure';
import Icon from '../Common/Icons/Icon';
import Notifications from './Notifications/Notifications';
// import {} from '../../styledHelpers/Positioning'
const HeaderStyled = styled.header`
    height: auto;
    width: 100%;
    box-shadow: 0 0 3px 1px black;
    padding: 2px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

export default class Header extends React.Component {
    render() {
        return (
            <HeaderStyled>
                <Figure width="50px" height="50px">
                    <Icon src={iconSrc} alt="Logo" />
                </Figure>
                <Nav />
                <Search />
                <Notifications />
            </HeaderStyled>
        )
    }
}
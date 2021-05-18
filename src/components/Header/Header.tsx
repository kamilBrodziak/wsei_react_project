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
    position: sticky;
    top: 0;
    left: 0;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    height: auto;
    width: 100%;
    box-shadow: 0 0 6px 1px gray;
    border-radius: 5px;
    padding: 2px 10px;
`

interface IProps {

}

export default class Header extends React.Component<IProps> {
    render() {
        return (
            <HeaderStyled id="siteHeader">
                <HeaderContainer>
                    <Figure width="50px" height="50px">
                        <Icon src={iconSrc} alt="Logo" />
                    </Figure>
                    <Nav />
                    <Search />
                    <Notifications />
                </HeaderContainer>
            </HeaderStyled>
        )
    }
}
import React from 'react'
import styled, { css } from 'styled-components';
import List from '../../../../Common/List/List';
import ListItem from '../../../../Common/List/ListItem';
import Menu from '../Menu/Menu';
import MenuItem from '../Menu/MenuItem/MenuItem';
import logoutIcon from "../../../../../assets/icons/logout.svg";
import privacyIcon from "../../../../../assets/icons/privacy.svg";
import settingsIcon from "../../../../../assets/icons/settings.svg";
import Link from '../../../../Common/Links/Link';
import Figure from '../../../../Common/Icons/Figure';
import Icon from '../../../../Common/Icons/Icon';
import {FlexCentered} from "../../../../../styledHelpers/Positioning";
const accountIconWidth = 40;

const AccountStyled = styled.div`
    padding: 2px 0;
`

const accountListCss = css`
    list-style: none;
    padding: 0 10px;
    margin: 0;
    border: solid #e6e6e6;
    border-width: 0 0 2px 0;
`

const accountLabelCss = css`
    color: #707070;
    font-size: 1.6rem;
    padding: 0 10px;
`

const accountListItemCss = css`
    display: flex;
    align-items: center;
`;

const LogoutSpanStyled = styled.span`
    font-size: 2rem;
    color: gray;
    padding: 0 0 0 20px;     
`;



const logoutLinkCss = css`
    ${FlexCentered}
    cursor: pointer;
    padding: 10px 0;
`;


const accountIconCss = css`
    border-radius: 50%;
    overflow: hidden;
`;

const AccountDivStyled = styled.div`
    width: calc(100% - 50px);
    padding: 5px 0 5px 10px;
`

const AccountSpanStyled = styled.span`
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.8rem;
    display: block;
    height: 2rem;
    overflow: hidden;
    width: calc(100% - 1px);
    color: black;
`

const accountLinkCss = css`
    color: #3232bb;
    font-size: 1.6rem;
    cursor: pointer;
`;


class Account extends React.Component {


    onClick = (e:MouseEvent) => {
        e.preventDefault();
    }

    logoutOnClick = (e:MouseEvent) => {
        e.preventDefault();
    }

    render() {
        const accountName = "Jeanne-Marie de la climbeass";
        const accountLink = "See profile";
        const privacyName = "Privacy";
        const privacyAlt = "Privacy Icon";
        const privacyUrl = "privacy";
        const settingsName = "Settings";
        const settingsAlt = "Settings Icon"
        const settingsUrl = "settings";
        const logoutName = "Logout";
        const logoutUrl = "Logout";
        const logoutAlt = "Logout Icon";
        const accountLabel = "Account";
        return (
            <AccountStyled>
                <List key={0} label={accountLabel} css={accountListCss} labelCss={accountLabelCss}>
                    <ListItem key={0} css={accountListItemCss}>
                        <Figure css={accountIconCss} width={`${accountIconWidth}px`} height={`${accountIconWidth}px`}>
                            <Icon src={settingsIcon} alt={settingsAlt}/>
                        </Figure>
                        <AccountDivStyled>
                            <AccountSpanStyled>{accountName}</AccountSpanStyled>
                            <Link css={accountLinkCss}>{accountLink}</Link>
                        </AccountDivStyled>
                    </ListItem>
                    <MenuItem onClick={this.onClick} id={1} name={privacyName} 
                        url={privacyUrl} iconSrc={privacyIcon} iconAlt={privacyAlt}/>
                    <MenuItem onClick={this.onClick} id={2} name={settingsName} 
                        url={settingsUrl} iconSrc={settingsIcon} iconAlt={settingsAlt}/>
                </List>
                <Link css={logoutLinkCss}>
                    <Figure width={"25px"} height={"25px"}>
                        <Icon src={logoutIcon} alt={logoutAlt}/>
                    </Figure>
                    <LogoutSpanStyled>{logoutName}</LogoutSpanStyled>
                </Link>
            </AccountStyled>
        )
    }
}

export default Account;
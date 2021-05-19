import React, { FC, MouseEvent } from 'react'
import styled, { css } from 'styled-components';
import List from '../../../../Common/List/List';
import ListItem from '../../../../Common/List/ListItem';
import MenuItem from '../Menu/MenuItem/MenuItem';
import privacyIcon from "../../../../../assets/icons/privacy.svg";
import Link from '../../../../Common/Links/Link';
import Figure from '../../../../Common/Icons/Figure';
import Icon from '../../../../Common/Icons/Icon';
import {FlexCentered} from "../../../../../styledHelpers/Positioning";
import { AccountRoutes, HomeRoute, IAppRoute, IAppRoutes } from '../../../../../Routes/Routes';
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
    text-decoration: none;
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
    text-decoration: none;
`;


interface IProps {
    onClick: (e:MouseEvent, icon?: string, name?: string, iconAlt?: string) => void
}

class Account extends React.Component<IProps> {
    constructor(props:IProps) {
        super(props);
    }

    logoutOnClick = (e:MouseEvent) => {
        e.preventDefault();
    }

    render() {
        const {onClick} = this.props;
        const profile = AccountRoutes.routes.find((route) => route.name==="Profile");
        const settings = AccountRoutes.routes.find((route) => route.name==="Settings");
        const privacy = AccountRoutes.routes.find((route) => route.name==="Privacy");
        const logout = AccountRoutes.routes.find((route) => route.name==="Logout");
        return (
            <AccountStyled>
                <List key={0} label={AccountRoutes.label} css={accountListCss} labelCss={accountLabelCss}>
                    <ListItem key={0} css={accountListItemCss}>
                        <Figure css={accountIconCss} width={`${accountIconWidth}px`} height={`${accountIconWidth}px`}>
                            <Icon src={profile.icon} alt={profile.iconAlt}/>
                        </Figure>
                        <AccountDivStyled>
                            <AccountSpanStyled>{profile.name}</AccountSpanStyled>
                            <Link to={profile.path} css={accountLinkCss} 
                                onClick={(e) => onClick(e, profile.icon, profile.name, profile.iconAlt)}>See profile</Link>
                        </AccountDivStyled>
                    </ListItem>
                    <MenuItem onClick={onClick} key={1} name={privacy.name}
                        path={privacy.path} icon={privacyIcon} iconAlt={privacy.iconAlt}/>
                    <MenuItem onClick={onClick} key={2} name={settings.name} 
                        path={settings.path} icon={settings.icon} iconAlt={settings.iconAlt}/>
                </List>
                <Link css={logoutLinkCss} to={logout.path} onClick={(e) => onClick(e, HomeRoute.icon, HomeRoute.name, HomeRoute.iconAlt)}>
                    <Figure width={"25px"} height={"25px"}>
                        <Icon src={logout.icon} alt={logout.iconAlt}/>
                    </Figure>
                    <LogoutSpanStyled>{logout.name}</LogoutSpanStyled>
                </Link>
            </AccountStyled>
        )
    }
}

export default Account;
import React, { FC } from 'react'
import styled from 'styled-components';
import AccountRoutes from '../../../../../../routes/AccountRoutes';
import { IUser } from '../../../../../../Utils/IRestObjects';
import Figure from '../../../../../Common/Icons/Figure';
import Icon from '../../../../../Common/Icons/Icon';
import Link from '../../../../../Common/Links/Link';
import MenuItem from '../../Menu/MenuItem/MenuItem';
const accountIconWidth = 40;


const AccountListStyled = styled.ul`
    list-style: none;
    padding: 0 10px;
    margin: 0;
    border: solid #e6e6e6;
    border-width: 0 0 2px 0;

`

const AccountLabelStyled = styled.span`
    color: #707070;
    font-size: 1.6rem;
`

const AccountListItemStyled = styled.li`
    display: flex;
    align-items: center;
`;

const AccountIconContainerStyled = styled(Figure)`
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

const AccountLinkStyled = styled(Link)`
    color: #3232bb;
    font-size: 1.6rem;
    cursor: pointer;
    text-decoration: none;
`;

interface IProps {
    user: IUser;
    onClick: (e:React.MouseEvent) => void;
}

const Menu:FC<IProps> = ({onClick, user}) => {
    
    const profile = AccountRoutes.routes.find((route) => route.name==="Profile");
    const profilePath = `${profile.path}/${user?.id}`;
    const settings = AccountRoutes.routes.find((route) => route.name==="Settings");
    const privacy = AccountRoutes.routes.find((route) => route.name==="Privacy");
    let key = 0;
    return (
        <>
            
            <AccountLabelStyled key={key++}>{AccountRoutes.label}</AccountLabelStyled>
            <AccountListStyled key={key++}>
                <AccountListItemStyled key={key++}>
                    <AccountIconContainerStyled width={`${accountIconWidth}px`} height={`${accountIconWidth}px`}>
                        <Icon src={user?.photo?.thumbnailUrl} alt={user?.photo?.title}/>
                    </AccountIconContainerStyled>
                    <AccountDivStyled>
                        <AccountSpanStyled>{user.name}</AccountSpanStyled>
                        <AccountLinkStyled to={profilePath}>
                                See profile
                        </AccountLinkStyled>
                    </AccountDivStyled>
                </AccountListItemStyled>
                <MenuItem key={key++} name={privacy.name} onClick={onClick}
                    path={privacy.path} icon={privacy.icon} iconAlt={privacy.iconAlt}/>
                <MenuItem key={key++} name={settings.name} onClick={onClick}
                    path={settings.path} icon={settings.icon} iconAlt={settings.iconAlt}/>
            </AccountListStyled>
        </>
    );
}

export default Menu;
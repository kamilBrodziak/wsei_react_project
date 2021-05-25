import React from 'react'
import commentsIconSrc from "../../../assets/icons/comments.svg"
import bellIconSrc from "../../../assets/icons/bell.svg"
import homeIconSrc from "../../../assets/icons/house.svg"
import Button from '../../Common/Buttons/Button'
import styled, { css } from 'styled-components';
import Icon from '../../Common/Icons/Icon';
import Breakpoints from '../../../styledHelpers/Breakpoints';
import NotificationCount from './NotificationCount/NotificationCount';
import Link from '../../Common/Links/Link'
import { HomeRoute } from '../../../routes/PlatformRoutes'
const iconWidth = 40;
const containerWidth = 140;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: ${iconWidth}px;
    height: ${containerWidth}px;
    position: fixed;
    bottom: 5px;
    right: 5px;
    @media ${Breakpoints.tablet} {
        width: ${containerWidth}px;
        height: 100%;
        flex-direction: row;
        position: static;
    }
`

const defaultButtonCss = css`
    width: ${iconWidth}px;
    height: ${iconWidth}px;
    padding: 8px;
    border: 0;
    outline: none;
    background: none;
    cursor: pointer;
`

const HomeLinkStyled = styled(Link)`
    ${defaultButtonCss}
`

const NotificationButtonStyled = styled(Button)`
    ${defaultButtonCss}
    background: #e2e2e2;
    border-radius: 50%;    
`;  

interface INotification {
    key: number;
    count: number;
    open: boolean;
    src: string;
    alt: string;
}

interface IState {
    notifications: INotification[]
}


interface IProps {}

export default class Notifications extends React.Component<IProps, IState> {
    state = {
        notifications: [
            {
                key: 0,
                count: 0,
                open: false,
                src: commentsIconSrc,
                alt: "Comments"
            },
            {
                key: 1,
                count: 3,
                open: false,
                src: bellIconSrc,
                alt: "Notifications"
            }
        ]
    }
    render() {
        const notifications = this.state.notifications.map((el) => {
            return (
            <NotificationButtonStyled key={el.key} width={`${iconWidth}px`} height={`${iconWidth}px`}>
                <Icon src={el.src} alt={el.alt} />
                <NotificationCount count={el.count}/>
            </NotificationButtonStyled>);
        })
        return (
            <Container>
                <HomeLinkStyled to={HomeRoute.path}>
                    <Icon src={homeIconSrc} alt="Home"/>
                </HomeLinkStyled>
                {notifications} 
            </Container>
        )
    }
}
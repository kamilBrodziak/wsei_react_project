import React from 'react'
import FigureIcon from '../../Common/Icons/Figure';
import commentsIconSrc from "../../../assets/icons/comments.svg"
import bellIconSrc from "../../../assets/icons/bell.svg"
import homeIconSrc from "../../../assets/icons/house.svg"

import Button from '../../Common/Buttons/Button'
import styled from 'styled-components';
import {FlexCentered} from '../../../styledHelpers/Positioning';
import Icon from '../../Common/Icons/Icon';
import Notification from './NotificationCount/NotificationCount';
import Breakpoints from '../../../styledHelpers/Breakpoints';
import NotificationCount from './NotificationCount/NotificationCount';
const iconWidth = 40;
const containerWidth = 140;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: ${iconWidth * 2};
    height: ${containerWidth};
    position: fixed;
    bottom: 5px;
    right: 5px;
    @media ${Breakpoints.tablet} {
        width: ${containerWidth};
        height: 100%;
        flex-direction: row;
        position: static;
    }
`

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
            <Button width={`${iconWidth}px`} height={`${iconWidth}px`} 
                    padding="8px" background="#e2e2e2" borderRadius="50%">
                <Icon src={el.src} alt={el.alt} />
                <NotificationCount count={el.count}/>
            </Button>);
        })
        return (
            <Container>
                <Button width={`${iconWidth}px`} height={`${iconWidth}px`} 
                    padding="8px">
                    <Icon src={homeIconSrc} alt="Home"/>
                </Button>
                {notifications}
            </Container>
        )
    }
}
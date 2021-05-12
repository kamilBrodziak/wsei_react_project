import React, { FC } from 'react'
import styled from 'styled-components';
import Breakpoints from '../../../../styledHelpers/Breakpoints';

const NotificationsCount = styled.span`
    display: block;
    width: 18px;
    height: auto;
    font-size: 1rem;
    text-align: center;
    padding: 1px 2px;
    position: absolute;
    border-radius: 40%;
    background: #00aeff;
    color: white;
    top: 0;
    right: 0;
    @media ${Breakpoints.tablet} {
    }
`

interface IProps {
    count: number;
}

const NotificationCount : FC<IProps> = ({count}) => {
    return count > 0 ? (
        <NotificationsCount>{count}</NotificationsCount>
    ) : null;
}

export default NotificationCount;
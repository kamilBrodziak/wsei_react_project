import React, { FC } from 'react'
import styled from 'styled-components';
import { FlexCentered } from '../../../styledHelpers/Positioning';


const Loadingstyled = styled.div<IProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    ${FlexCentered}
    &:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: black transparent black transparent;
        animation: loading 1.2s linear infinite;
    }
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

interface IProps {
    width: string;
    height: string;
}

const Loading:FC<IProps> = ({...other}) => {
    return (
        <Loadingstyled {...other}></Loadingstyled>
    )
}

export default Loading;
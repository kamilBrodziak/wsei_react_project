import { ButtonHTMLAttributes, FC} from 'react'
import styled from 'styled-components';
import {FlexCentered} from '../../../styledHelpers/Positioning';

const ButtonStyled = styled.button<IProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.background ? props.background : "none"};
    border: ${props => props.border ? props.border : "0"};
    border-radius: ${props => props.borderRadius ? props.borderRadius : "0"};
    border-width: ${props => props.borderWidth ? props.borderWidth : "0"};
    padding: ${props => props.padding ? props.padding : "0"};
    outline: ${props => props.outline ? props.outline : "0"};
    cursor: pointer;
    position: relative;
    ${FlexCentered}
`;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    width: string;
    height: string;
    background?: string;
    border?: string;
    borderWidth?: string;
    borderRadius?: string;
    padding?: string;
    outline?: string;
}


const Button : FC<IProps> = (props) => {
    const {...other} = props;
    return (
        <ButtonStyled {...other}>
            {props.children}
        </ButtonStyled>
    );
}

export default Button;
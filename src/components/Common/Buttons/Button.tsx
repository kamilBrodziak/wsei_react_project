import { ButtonHTMLAttributes, FC} from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import {FlexCentered} from '../../../styledHelpers/Positioning';

const ButtonStyled = styled.button<IProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    cursor: pointer;
    position: relative;
    outline: none;
    border: none;
    font: inherit;
    ${FlexCentered}
`;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    width: string;
    height: string;
    className?: string;
}


const Button : FC<IProps> = ({children, ...other}) => {
    return (
        <ButtonStyled {...other}>
            {children}
        </ButtonStyled>
    );
}

export default Button;
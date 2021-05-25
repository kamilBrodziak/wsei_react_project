import { ButtonHTMLAttributes, FC} from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import {FlexCentered} from '../../../styledHelpers/Positioning';

const ButtonStyled = styled.button<IProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    cursor: pointer;
    position: relative;
    ${FlexCentered}
`;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    width: string;
    height: string;
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
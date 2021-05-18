import { FC} from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import {FlexCentered} from '../../../styledHelpers/Positioning';

const FigureComponent = styled.figure<IProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    ${FlexCentered}
    ${({css}) => css !== undefined && css}
`;

interface IProps {
    width: string;
    height: string;
    css?: FlattenSimpleInterpolation;
}


const Figure : FC<IProps> = (props) => {
    const {...other} = props;
    return (
        <FigureComponent {...other}>
            {props.children}
        </FigureComponent>
    );
}

export default Figure;
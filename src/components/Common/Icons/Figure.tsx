import { FC} from 'react'
import styled from 'styled-components';
import {FlexCentered} from '../../../styledHelpers/Positioning';

const FigureComponent = styled.figure<IProps>`
    width: ${props => props.width};
    height: ${props => props.height};
    ${FlexCentered}
`;

interface IProps {
    width: string;
    height: string;
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
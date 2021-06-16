import { FC } from 'react';
import styled from 'styled-components';
import Figure from './Figure';
import Icon from './Icon';

const IconWithTextStyled = styled.div`
    display: flex;
    align-items: center;
`

const TextStyled = styled.span`

`

const FigureStyled = styled(Figure)`
    margin: 0 10px 0 0;
`

interface IProps {
    icon: string;
    iconAlt: string;
    text: string;
    className?: string;
}

const IconWithText:FC<IProps> = ({className, icon, iconAlt, text}) => {
    return (
        <IconWithTextStyled className={className}>
            <FigureStyled width="12px" height="12px">
                <Icon src={icon} alt={iconAlt}/>
            </FigureStyled>
            <TextStyled>{text}</TextStyled>
        </IconWithTextStyled>
    )
}

export default IconWithText;
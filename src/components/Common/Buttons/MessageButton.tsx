import { FC } from 'react';
import styled from 'styled-components';
import Figure from '../Icons/Figure';
import DefaultIcon from '../../../assets/icons/bell.svg';
import Icon from '../Icons/Icon';
import { FlexCentered } from '../../../styledHelpers/Positioning';

const ButtonStyled = styled.button`
    width: auto;
    background: none;
    border: 0;
    outline: 0;
    ${FlexCentered}
    color: black;
    font-size: inherit;
    font: inherit;
    cursor: pointer;
`

const FigureStyled = styled(Figure)`
    margin: 0 3px 0 0;
`

interface IProps {
    text: string;
}

const MessageButton:FC<IProps> = ({text}) => {
    return (
        <ButtonStyled>
            <FigureStyled width="18px" height="18px">
                <Icon src={DefaultIcon} alt="Message icon"/>
            </FigureStyled>
            {text}
        </ButtonStyled>
    )
}

export default MessageButton;
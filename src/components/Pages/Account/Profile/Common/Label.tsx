import React, { FC } from 'react'
import styled from 'styled-components';
import Colors from '../../../../../styledHelpers/Colors';

const LabelStyled = styled.span`
    display: block;
    width: 100%;
    font-size: 1.7rem;
    color: ${Colors.gray};
`

interface IProps {
    text: string;
    className?: string;
}

const Label:FC<IProps> = ({className, text}) => {
    return (
        <LabelStyled className={className}>{text}</LabelStyled>
    )
}

export default Label;
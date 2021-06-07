import React, { FC } from 'react'
import styled from 'styled-components';
import Colors from '../../../../../styledHelpers/Colors';

const PanelStyled = styled.section`
    padding: 10px 0;
    border-top: 1px solid ${Colors.lightGray};
`

interface IProps {
    className?: string;
}

const Panel:FC<IProps> = ({children, className}) => {
    return (
        <PanelStyled className={className} >{children}</PanelStyled>
    )
} 

export default Panel;
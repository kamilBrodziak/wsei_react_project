import React, { FC } from 'react'
import styled from 'styled-components';

const HeaderStyled = styled.h2`
    font-weight: bold;
    font-size: 1.8rem;
    margin: 10px 0;
`

interface IProps {
    className?: string;
}

const Header:FC<IProps> = ({className, children}) => {
    return (
        <HeaderStyled>{children}</HeaderStyled>
    )
}

export default Header;
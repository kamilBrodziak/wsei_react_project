import React, {AnchorHTMLAttributes} from 'react';
import { FC } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { LinkProps, NavLink } from 'react-router-dom'

const LinkStyled = styled(NavLink)<IProps>`
    ${({css}) => css !== undefined && css}
`

interface IProps extends LinkProps {
    css?: FlattenSimpleInterpolation;
}

const Link:FC<IProps> = ({children, ...other}) => {
    return (
        <LinkStyled {...other}>
            {children}
        </LinkStyled>
    );
}

export default Link;
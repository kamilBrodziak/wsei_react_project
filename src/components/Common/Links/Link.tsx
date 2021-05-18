import React, {AnchorHTMLAttributes} from 'react';
import { FC } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components';

const LinkStyled = styled.a<IProps>`
    ${({css}) => css !== undefined && css}
`

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
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
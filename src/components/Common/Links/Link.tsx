import React, {AnchorHTMLAttributes} from 'react';
import { FC } from 'react'
import styled from 'styled-components';
import { LinkProps, NavLink } from 'react-router-dom'
import Colors from '../../../styledHelpers/Colors';

const LinkStyled = styled(NavLink)<IProps>`
    text-decoration: none;
    color: ${Colors.link};
    &:visited {
        color: inherit; 
    }
`

interface IProps extends LinkProps {
}

const Link:FC<IProps> = ({children, ...other}) => {
    return (
        <LinkStyled {...other}>
            {children}
        </LinkStyled>
    );
}

export default Link;
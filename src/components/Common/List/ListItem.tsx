import React, {FC, LiHTMLAttributes} from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components';

const ListItemStyled = styled.li<IProps>`
    ${({css}) => css}
`

interface IProps extends LiHTMLAttributes<HTMLLIElement> {
    css?: FlattenSimpleInterpolation;
}

const ListItem : FC<IProps> = ({children, ...other}) => {
    return (
        <ListItemStyled {...other}>
            {children}
        </ListItemStyled>
    );
}


export default ListItem;
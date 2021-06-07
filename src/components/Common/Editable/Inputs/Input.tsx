import React, { FC } from 'react'
import styled from 'styled-components';
import Colors from '../../../../styledHelpers/Colors';
const InputStyled = styled.input`
    font-size: 1.7rem;
    border-radius: 5px;
    padding: 8px 7px 8px 8px;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 1px);
    background: none;    
    outline: none;
    border: 2px solid ${Colors.lightGray};
    font-family: inherit;
    visibility: visible;
`


interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input:FC<IProps> = ({...other}) => {
    return (
        <InputStyled {...other}/>
    )
}


export default Input;
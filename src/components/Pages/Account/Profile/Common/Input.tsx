import React, { FC, InputHTMLAttributes, useState } from 'react'
import styled from 'styled-components';
import Colors from '../../../../../styledHelpers/Colors';

const InputStyled = styled.input<IInputProps>`
    padding: 5px;
    width: 100%;
    background: none;
    outline: 0;
    border: 2px solid ${props => props.valid ? Colors.lightGray : "red"};
    border-radius: 5px;
`

interface IInputProps {
    valid?: boolean;
}

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    onChange?: (val: string, id?:number) => void;
    valid?: boolean;
}

const Input:FC<IProps> = ({valid=true, onChange, ...other}) => {
    const inputOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        onChange(val);
    }

    return (
        <InputStyled onChange={inputOnChange} valid={valid} {...other} />
    );
}

export default Input;
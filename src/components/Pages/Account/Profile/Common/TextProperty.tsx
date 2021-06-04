import React, { FC, InputHTMLAttributes, useState } from 'react'
import styled, { css } from 'styled-components';
import { IStore } from '../../../../../reducers/rootReducer';
import Colors from '../../../../../styledHelpers/Colors';

const InputGeneralCss = css<IInputProps>`
    padding: 5px;
    width: auto;
    margin: 5px;
    font-weight: ${props => props.bold ? "bold" : "normal"};

`

const InputStyled = styled.input<IInputProps>`
    ${InputGeneralCss}
    background: none;
    outline: 0;
    border: 2px solid ${props => props.valid ? Colors.lightGray : "red"};
    border-radius: 5px;
`

const SpanStyled = styled.span<IInputProps>`
    ${InputGeneralCss}
`

const LinkStyled = styled.a`
    ${InputGeneralCss}
`

// type TextPropertyOnChange = (event:React.ChangeEvent<HTMLInputElement>, name:string) => void;

interface IInputProps {
    valid?: boolean;
    bold?: boolean;
}

interface IProps {
    value: string;
    editable: boolean;
    type?: string;
    linkPrefix?: string;
    name: string;
    bold?: boolean;
    onChange?: (val: string, id?:number) => void;
    id?: number;
    valid: boolean;
}

const TextProperty:FC<IProps> = ({editable, bold = false, name, valid, value, onChange, id=0, type = "text", linkPrefix}) => {
    

    const inputOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        const valid = val !== "";
        onChange(val, id);
    }

    return editable ? (
        <InputStyled bold={bold} type={type} value={value} placeholder={name} onChange={inputOnChange} 
            valid={valid} required/>
    ) : (
        linkPrefix === undefined ? (
            <SpanStyled bold={bold}>{value}</SpanStyled> 
        ) : (
            <LinkStyled bold={bold} href={`${linkPrefix}${value}`}>{value}</LinkStyled>

        )
    );
}

// export {TextPropertyOnChange}
export default TextProperty;
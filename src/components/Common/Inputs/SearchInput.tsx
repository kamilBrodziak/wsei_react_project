import React, { useState } from 'react'
import Icon from '../Icons/Icon';
import iconSrc from '../../../assets/icons/search.svg';
import styled from 'styled-components';
import { FlexCentered } from '../../../styledHelpers/Positioning';
import Breakpoints from '../../../styledHelpers/Breakpoints';
import Button from '../Buttons/Button';
import { FC } from 'react';
const iconWidth = 15;
const SearchForm = styled.form`
    display: flex;
    height: 100%;
    ${FlexCentered}
    padding: 5px 8px;
    border: 2px solid #e6e6e6;
    border-radius: 5px;
    width: 100%;
    background: white;
`

const InputStyled = styled.input`
    flex: 1;
    width: 100%;
    height: 100%;
    border: 0;
    outline: 0;
    text-align: center;
`;

const ButtonStyled = styled(Button)`
    background: none;
    border: 0;
    outline: none;
`;

interface IProps {
    onChange?: (search:string) => void,
    value?: string,
    placeholder?: string,
    onSubmit?: (search:string) => void,
    className?: string;
}


const SearchInput:FC<IProps> = ({className, onChange, onSubmit,  value, ...others}) => {
    const [state, setState] = useState(value ? value : "");
    
    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        setState(e.currentTarget.value);
        if(onChange)
            onChange(e.currentTarget.value);
    }

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(onSubmit)
            onSubmit(state)
    }

    return (
        <SearchForm className={className} onSubmit={(e) => handleOnSubmit(e)}>
            <InputStyled onChange={handleOnChange} value={state} {...others}/>
            <ButtonStyled width={`${iconWidth}px`} height="100%">
                <Icon src={iconSrc} alt="Search icon" />
            </ButtonStyled>
        </SearchForm>
    )
}

export default SearchInput;
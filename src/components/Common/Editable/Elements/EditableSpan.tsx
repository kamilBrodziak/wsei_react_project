import React, { FC } from 'react'
import styled from 'styled-components';
import Input from '../Inputs/Input';
const SpanStyled = styled.span<ISpanProps>`
    font-size: 1.7rem;
    border-radius: 5px;
    position: relative;
    display: block;
    padding: 10px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ${props=>props.editing ? "initial": "ellipsis"};
    white-space: nowrap;
    visibility:${props=>props.editing ? "hidden" : "visible" };
    white-space: ${props => props.editing ? "pre" : "nowrap"};
`

interface ISpanProps {
    editing: boolean;
}

interface IProps extends React.InputHTMLAttributes<HTMLInputElement>{
    editingState: boolean;
}

const EditableSpan:FC<IProps> = ({editingState, className, value, ...other}) => {
    return (
        <SpanStyled className={className} editing={editingState}> 
            {value}
            { editingState &&
                <Input value={value} {...other} />
            }
        </SpanStyled>
    )
}


export default EditableSpan;
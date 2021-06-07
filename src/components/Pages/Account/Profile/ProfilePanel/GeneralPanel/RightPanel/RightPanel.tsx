import React, { FC } from 'react'
import styled, { css } from 'styled-components';
import Colors from '../../../../../../../styledHelpers/Colors';
import { IUser } from '../../../../../../../Utils/IRestObjects';

const RightPanelStyled = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`

const commonCss = css<IInputProps>`
    font-size: 1.8rem;
`

const InputStyled = styled.input<IInputProps>`
    ${commonCss}
    padding: 1px 3px;
    width: auto;
    margin: 2px 0;
    outline: 0;
    border: 2px solid ${props => props.valid ? Colors.lightGray : "red"};
    &:focus {
        border: 2px solid black;
    }
    border-radius: 5px;
    font-size: 1.8rem;
`

const LinkStyled = styled.a<IInputProps>`
    ${commonCss}
    padding: 5px 0;
    
`
interface IInputProps {
    valid?: boolean;
}

interface IProps {
    user: IUser;
    handleOnChange: (properties: object, valid: boolean) => void;
    editingState: boolean;
}

const RightPanel:FC<IProps> = ({user, handleOnChange, editingState}) => {
    const childs = [{
            name: 'Email',
            onChange: (val:string, childId:number) => handleChange({email: val}, val !== "", childId),
            value: user.email,
            valid: user.email !== "",
            linkPrefix: "mailto:",
            type:"email",
        }, {
            name: 'Phone',
            onChange: (val:string, childId:number) => handleChange({phone: val}, val !== "", childId),
            value: user.phone,
            valid: user.phone !== "",
            linkPrefix: "tel:",
        }
    ]

    
    const handleChange = (updatedProperty:object, valid:boolean, childId: number) => {
        childs[childId].valid = valid;
        handleOnChange(updatedProperty, childs.filter(child => !child.valid).length === 0);
    }
    
    return (
        <RightPanelStyled>
            {
                childs.map(({name, onChange, value, linkPrefix, ...other}, i) => 
                    { return editingState ?
                        <InputStyled key={i} value={value} {...other}
                            onChange={(e) => onChange(e.currentTarget.value, i)}/> :
                        <LinkStyled key={i} href={`${linkPrefix}${value}`}>{value}</LinkStyled>
                    }
                )
            }
        </RightPanelStyled>
    )
}

export default RightPanel;
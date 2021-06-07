import React, { FC } from 'react'
import styled, { css } from 'styled-components';
import Colors from '../../../../../../../styledHelpers/Colors';
import { IUser } from '../../../../../../../Utils/IRestObjects';

const MiddlePanelStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const commonCss = css<IInputProps>`
    font-weight: ${props => props.bold ? "bold" : "normal"};
    font-size: 1.8rem;
`

const InputStyled = styled.input<IInputProps>`
    ${commonCss}
    width: 100%;
    padding: 1px 3px;
    margin: 2px 0;
    outline: 0;
    border: 2px solid ${props => props.valid ? Colors.lightGray : "red"};
    &:focus {
        border: 2px solid black;
    }
    border-radius: 5px;
    font-size: 1.8rem;
`

const SpanStyled = styled.span<IInputProps>`
    ${commonCss}
    padding: 5px 0;
`

interface IInputProps {
    valid?: boolean;
    bold?: boolean;
}

interface IProps {
    user: IUser;
    handleOnChange: (properties: object, valid: boolean) => void;
    editingState: boolean;
}

const MiddlePanel:FC<IProps> = ({user, handleOnChange, editingState}) => {
    const childs = [{
            name: 'Name',
            onChange: (val:string, childId:number) => handleChange({name: val}, val !== "", childId),
            value: user.name,
            valid: user.name !== "",
            bold: true
        }, {
            name: 'Company name',
            onChange: (val:string, childId:number) => handleChange({company: {...user.company, name: val}}, val !== "", childId),
            value: user.company.name,
            valid: user.company.name !== "",
            bold: true
        }, {
            name: 'City',
            onChange: (val:string, childId:number) => handleChange({address: {...user.address, city: val}}, val !== "", childId),
            value: user.address.city,
            valid: user.address.city !== "",
        }, {
            name: 'Website',
            onChange: (val:string, childId:number) => handleChange({website: val}, val !== "", childId),
            value: user.website,
            valid: user.website !== "",
        }
    ]
    const handleChange = (updatedProperty:object, valid:boolean, childId: number) => {
        childs[childId].valid = valid;
        handleOnChange(updatedProperty, childs.filter(child => !child.valid).length === 0);
    }
    return (
        <MiddlePanelStyled>
            {
                childs.map(({name, onChange, value, bold=false, ...other}, i) => 
                    { return editingState ?
                        <InputStyled key={i} placeholder={name} value={value} bold={bold}
                            onChange={(e) => onChange(e.currentTarget.value, i)} {...other} /> :
                        <SpanStyled key={i} bold={bold}>{value}</SpanStyled>
                    }
                )
            }
        </MiddlePanelStyled>
    );
}

export default MiddlePanel;
import React, { FC } from 'react'
import styled from 'styled-components';
import { IUser } from '../../../../../../../Utils/IRestObjects';
import TextProperty from '../../../Common/TextProperty';

const RightPanelStyled = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`

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
            bold: false
        }, {
            name: 'Phone',
            onChange: (val:string, childId:number) => handleChange({phone: val}, val !== "", childId),
            value: user.phone,
            valid: user.phone !== "",
            linkPrefix: "tel:",
            bold: false
        }
    ]

    
    const handleChange = (updatedProperty:object, valid:boolean, childId: number) => {
        childs[childId].valid = valid;
        handleOnChange(updatedProperty, childs.filter(child => !child.valid).length === 0);
    }
    
    return (
        <RightPanelStyled>
            {
                childs.map(({name, value, onChange, ...other}, i) => 
                    <TextProperty key={i} value={value} name={name} {...other}
                        editable={editingState} onChange={(val:string) => onChange(val, i)}/>
                )
            }
        </RightPanelStyled>
    )
}

export default RightPanel;
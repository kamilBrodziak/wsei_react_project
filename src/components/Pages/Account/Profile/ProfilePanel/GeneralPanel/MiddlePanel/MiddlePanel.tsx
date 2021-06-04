import React, { FC } from 'react'
import styled from 'styled-components';
import { IUser } from '../../../../../../../Utils/IRestObjects';
import TextProperty from '../../../Common/TextProperty';

const MiddlePanelStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

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
            bold: false
        }, {
            name: 'Website',
            onChange: (val:string, childId:number) => handleChange({website: val}, val !== "", childId),
            value: user.website,
            valid: user.website !== "",
            bold: false
        }
    ]
    const handleChange = (updatedProperty:object, valid:boolean, childId: number) => {
        childs[childId].valid = valid;
        handleOnChange(updatedProperty, childs.filter(child => !child.valid).length === 0);
    }
    return (
        <MiddlePanelStyled>
            {
                childs.map(({name, valid, value, onChange, ...other}, i) => 
                    <TextProperty key={i} value={value} name={name} valid={valid} {...other}
                        editable={editingState} onChange={(val:string) => onChange(val, i)}/>
                )
            }
        </MiddlePanelStyled>
    );
}

export default MiddlePanel;
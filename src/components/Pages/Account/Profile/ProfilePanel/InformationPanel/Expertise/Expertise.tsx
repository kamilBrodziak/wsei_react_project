import React, { FC, useState } from 'react'
import styled from 'styled-components';
import { IUserExpertise } from '../../../../../../../Utils/IRestObjects';
import { deepClone } from '../../../../../../../utils/Utils';
import Item from './Items/Item';

const ExpertiseStyled = styled.ul`
    list-style: none;
`

interface IProps {
    expertise: IUserExpertise;
    editingState: boolean;
    parentHandleOnChange: (expertise: IUserExpertise) => void;
}

const Expertise:FC<IProps> = ({expertise, editingState, parentHandleOnChange}) => {
    const handleOnChange = (key:number, items:string[]) => {
        const newExpertise = {...expertise};
        switch(key) {
            case 0:
                newExpertise.expertise = [...items];
                break;
            case 1:
                newExpertise.specialties = [...items];
                break;
            case 2:
                newExpertise.admissions = [...items];
                break;
            case 3:
                newExpertise.counties = [...items];
                break;
        }
        parentHandleOnChange(newExpertise);
    }
    
    return (
        <ExpertiseStyled>
            <Item key={0} header={"Expertise"} items={expertise.expertise} editing={editingState} 
                parentHandleOnChange={(items:string[]) => handleOnChange(0, items)} />
            <Item key={1} header={"Specialties"} items={expertise.specialties} editing={editingState} 
                parentHandleOnChange={(items:string[]) => handleOnChange(1, items)} />
            <Item key={2} header={"Admission to practice law"} items={expertise.admissions} editing={editingState} 
                parentHandleOnChange={(items:string[]) => handleOnChange(2, items)} />
            <Item key={3} header={"Counties"} items={expertise.counties} editing={editingState} 
                parentHandleOnChange={(items:string[]) => handleOnChange(3, items)} />
        </ExpertiseStyled>
    )
}

export default Expertise;
import React, { FC, useState } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateUserInformation } from '../../../../../../actions/UserActions';
import { IStore } from '../../../../../../reducers/rootReducer';
import { IUserAdditionalInformation, IUserExpertise } from '../../../../../../Utils/IRestObjects';
import { deepClone } from '../../../../../../utils/Utils';
import SaveButton from '../../Common/SaveButton';
import Expertise from './Expertise/Expertise';


const InformationPanelStyled = styled.div`
    position: relative;
`


interface IProps {
    userInformation: IUserAdditionalInformation;
    updateInformation: (informations: IUserAdditionalInformation) => void;
    editable: boolean;
}

const InformationPanel:FC<IProps> = ({userInformation, editable, updateInformation}) => {
    const [updatingState, setUpdatingState] = useState(false);
    const [editingState, setEditingState] = useState(false);
    const [expertiseState, setExpertiseState] = useState(userInformation.expertise);
    
    const filterExpertise = (values:string[]) => values.map(item => item.trim()).filter(item => item.length > 0)
    
    const handleSave = () => {
        if(editingState) {
            setUpdatingState(true);
            const newUserInformations = deepClone(userInformation);
            const expertise = expertiseState;
            expertise.expertise = filterExpertise(expertise.expertise);
            expertise.specialties = filterExpertise(expertise.specialties);
            expertise.admissions = filterExpertise(expertise.admissions);
            expertise.counties = filterExpertise(expertise.counties);
            setExpertiseState(expertiseState);
            newUserInformations.expertise = expertiseState;
            updateInformation(newUserInformations);
            setUpdatingState(false);
            setEditingState(false);
        } else {
            setEditingState(true);
        }
    }
    const handleExpertiseOnChange = (expertise: IUserExpertise) => {
        setExpertiseState(expertise);
        
    }
    return (
        <InformationPanelStyled>
            <Expertise expertise={expertiseState} editingState={editingState} parentHandleOnChange={handleExpertiseOnChange} />
            <SaveButton editingState={editingState} validState={true} handleSave={handleSave} 
                updatingState={updatingState}/>
        </InformationPanelStyled>
    )
}


const mapStateToProps = (state:IStore) => {
    return {}
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateInformation: (informations:IUserAdditionalInformation) => dispatch(updateUserInformation(informations))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationPanel);

import React, { FC, useState } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateUserInformationAction } from '../../../../../../actions/UserActions';
import { IStore } from '../../../../../../reducers/rootReducer';
import { IUserAdditionalInformation, IUserExpertise, IUserPanelInformation } from '../../../../../../Utils/IRestObjects';
import { deepClone } from '../../../../../../utils/Utils';
import SaveButton from '../../Common/SaveButton';
import Expertise from './Expertise/Expertise';
import Fees from './Fees/Fees';
import Informations from './Informations/Informations';
import InternalCorrespondants from './Informations/InternalCorrespondants/InternalCorrespondants';
import ServicesAndProjects from './Informations/ServicesAndProjects/ServicesAndProjects';
import InternalReviews from './InternalReviews/InternalReviews';
import Proposals from './Proposals/Proposals';


const InformationPanelStyled = styled.div`
    position: relative;
`

const SaveButtonStyled = styled(SaveButton)`
    top: 20px;
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
    const [informationState, setInformationState] = useState(userInformation.panelInformation);
    const filterExpertise = (values:string[]) => values.map(item => item.replace(/&nbsp;/g, ' ')
        .trim().replace(/  +/g, ' ')).filter(item => item.length > 0)
    
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

    const handleInformationOnChange = (information: IUserPanelInformation) => {
        setInformationState(information);
    }

    return (
        <InformationPanelStyled>
            <Expertise expertise={expertiseState} editingState={editingState} parentHandleOnChange={handleExpertiseOnChange} />
            <Informations editingState={editingState} information={informationState}
                parentHandleOnChange={handleInformationOnChange} />
            <Proposals userId={userInformation.userId} />
            <InternalReviews userId={userInformation.userId} />
            <Fees userId={userInformation.userId} />
            { editable && 
                <SaveButtonStyled editingState={editingState} validState={true} handleSave={handleSave} 
                    updatingState={updatingState}/>
            }
        </InformationPanelStyled>
    )
}


const mapStateToProps = (state:IStore) => {
    return {}
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateInformation: (informations:IUserAdditionalInformation) => dispatch(updateUserInformationAction(informations))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InformationPanel);

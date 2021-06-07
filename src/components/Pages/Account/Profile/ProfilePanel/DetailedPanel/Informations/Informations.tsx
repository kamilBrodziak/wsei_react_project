import React, { FC } from 'react'
import styled from 'styled-components';
import { IUserPanelInformation } from '../../../../../../../Utils/IRestObjects';
import Header from '../../../Common/Header';
import Panel from '../../../Common/Panel';
import Fee from './Fee/Fee';
import InternalCorrespondants from './InternalCorrespondants/InternalCorrespondants';
import ServicesAndProjects from './ServicesAndProjects/ServicesAndProjects';
import Terms from './Terms/Terms';

const InformationsStyled = styled(Panel)`
`

interface IProps {
    information: IUserPanelInformation;
    editingState: boolean;
    parentHandleOnChange: (information: IUserPanelInformation) => void;
}


const Informations:FC<IProps> = ({information, editingState, parentHandleOnChange}) => {
    return (
        <InformationsStyled>
            <Header>Panel informations</Header>
            {
                ((!editingState && information.fee.length > 0) || editingState ) &&
                    <Fee value={information.fee} editingState={editingState}
                        parentHandleOnChange={(val) => parentHandleOnChange({...information, fee: val})} />
            }
            {
                ((!editingState && (information.terms.attachment.name.length > 0 || information.terms.text.length > 0)) || editingState ) &&
                    <Terms terms={information.terms} editingState={editingState} 
                        parentHandleOnChange={(terms) => parentHandleOnChange({...information, terms: terms})}/>
            }
            <ServicesAndProjects />
            <InternalCorrespondants correspondantsIds={information.correspondants} />
        </InformationsStyled>
    )
}

export default Informations;
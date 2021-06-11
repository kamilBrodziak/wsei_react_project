import React, { FC } from 'react'
import styled from 'styled-components';
import { IUserPanelInformationTerms } from '../../../../../../../../utils/IRestUser';
import EditableSpan from '../../../../../../../Common/Editable/Elements/EditableSpan';
import AttachmentInput from '../../../../Common/AttachmentInput';
import Input from '../../../../Common/Input';
import Label from '../../../../Common/Label';


const SpanStyled = styled(EditableSpan)`
    
    && {
        padding: 10px 10px 10px 0;
    }
    input {
        padding: 8px 7px 8px 0;
    }
`

interface IProps {
    terms: IUserPanelInformationTerms;
    parentHandleOnChange: (terms: IUserPanelInformationTerms) => void;
    editingState: boolean;
}

const Terms:FC<IProps> = ({terms, editingState, parentHandleOnChange}) => {
    return (
        <>
            <Label text={"Terms & conditions"} />
            <SpanStyled placeholder="Fee" value={terms.text} editingState={editingState}
                onChange={(e) => parentHandleOnChange({...terms, text: e.currentTarget.value})} 
            />
            <AttachmentInput editable={editingState} attachment={terms.attachment}
                onChange={(attachment) => parentHandleOnChange({...terms, attachment: attachment})} />
        </>
    )
}

export default Terms;
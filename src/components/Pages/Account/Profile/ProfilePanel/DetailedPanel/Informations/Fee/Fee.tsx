import React, { FC } from 'react'
import styled from 'styled-components';
import EditableSpan from '../../../../../../../Common/Editable/Elements/EditableSpan';
import Input from '../../../../Common/Input';
import Label from '../../../../Common/Label';
import TextProperty from '../../../../Common/TextProperty';


interface IProps {
    value: string;
    parentHandleOnChange: (val:string) => void;
    editingState: boolean;
}

const LabelStyled = styled(Label)`
    margin: 10px 0 0 0;
`

const SpanStyled = styled(EditableSpan)`
    && {
        padding: 10px 10px 10px 0;
    }
    input {
        padding: 8px 7px 8px 0;
    }
`

const Fee:FC<IProps> = ({value, editingState, parentHandleOnChange}) => {
    return (
        <>
            <LabelStyled text={"Hourly fee"} />
            <SpanStyled placeholder="Fee" value={value} editingState={editingState}
                onChange={(e) => parentHandleOnChange(e.currentTarget.value)} 
            />
        </>
    )
}

export default Fee;
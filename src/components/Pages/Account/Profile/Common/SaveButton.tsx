import React, { FC } from 'react'
import styled from 'styled-components';
import Loading from '../../../../Common/Animations/Loading';
import Button from '../../../../Common/Buttons/Button';

const SaveButtonStyled = styled(Button)`
    position: absolute;
    top: 10px;
    right: 10px;
`

interface IProps {
    handleSave: () => void;
    editingState: boolean;
    validState: boolean;
}

const SaveButton:FC<IProps> = ({handleSave, editingState, validState}) => {
    return (
            <SaveButtonStyled width="30px" height="30px" onClick={handleSave} disabled={!validState}>
                { editingState && 
                    <Loading width="100%" height="100%" />
                }
            </SaveButtonStyled>
    );
}

export default SaveButton;
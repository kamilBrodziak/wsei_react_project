import React, { FC } from 'react'
import styled from 'styled-components';
import Loading from '../../../../Common/Animations/Loading';
import Button from '../../../../Common/Buttons/Button';

const SaveButtonStyled = styled(Button)`
    position: absolute;
    top: 0;
    right: 0;
`

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    handleSave: () => void;
    editingState: boolean;
    validState: boolean;
    updatingState: boolean;
}

const SaveButton:FC<IProps> = ({className, handleSave, editingState, validState, updatingState}) => {
    return (
            <SaveButtonStyled className={className} width="30px" height="30px" onClick={handleSave} disabled={!validState}>
                { updatingState && 
                    <Loading width="100%" height="100%" />
                }
            </SaveButtonStyled>
    );
}

export default SaveButton;
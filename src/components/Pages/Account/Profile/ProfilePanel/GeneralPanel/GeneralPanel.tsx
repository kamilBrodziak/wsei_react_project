import React, { FC, useState } from 'react'
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { updateUser } from '../../../../../../actions/UserActions';
import { IStore } from '../../../../../../reducers/rootReducer';
import Breakpoints from '../../../../../../styledHelpers/Breakpoints';
import Colors from '../../../../../../styledHelpers/Colors';
import { IUser } from '../../../../../../Utils/IRestObjects';
import { deepClone } from '../../../../../../utils/Utils';
import Loading from '../../../../../Common/Animations/Loading';
import Button from '../../../../../Common/Buttons/Button';
import SaveButton from '../../Common/SaveButton';
import TextProperty from '../../Common/TextProperty';
import MiddlePanel from './MiddlePanel/MiddlePanel';
import ProfileImage from './ProfileImage/ProfileImage';
import RightPanel from './RightPanel/RightPanel';

const GeneralPanelCss = css`
    display: flex;
    flex-direction: column;
    font-size: 1.8rem;
    margin: 0 0 20px 0;
    border-bottom: 1px solid ${Colors.lightGray};
    @media ${Breakpoints.tablet} {
        flex-direction: row;
    }
`

const GeneralPanelStyled = styled.div`
    ${GeneralPanelCss}
    position: relative;

`

const InformationStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media ${Breakpoints.tablet} {
        flex-direction: row;
    }
`


interface IProps {
    user: IUser;
    editable?: boolean;
    updateUser: Function;
}

const GeneralPanel:FC<IProps> = ({user, updateUser, editable = false}) => {
    const [userState, setUserState] = useState(deepClone(user));
    const [validRightState, setValidRightState] = useState(true);
    const [validMiddleState, setValidMiddleState] = useState(true);
    const [updatingState, setUpdatingState] = useState(false);
    const [editingState, setEditingState] = useState(false);

    const handleOnChange = (updatedProperty: object, valid:boolean, panel:string)  =>{
        switch(panel){
            case "middle":
                if(valid != validMiddleState) setValidMiddleState(valid);
                break;
            case "right":
                if(valid != validRightState) setValidRightState(valid);
                break;
        }
        setUserState({...userState, ...updatedProperty});
    }

    const handleSave = () => {
        if(editingState && validMiddleState && validRightState) {
            setUpdatingState(true);
            updateUser(deepClone(userState));
            setUpdatingState(false)
            setEditingState(false);
        } else {
            setEditingState(true);
        }
    }

    return (
        <GeneralPanelStyled>
            <ProfileImage photo={user.photo} userId={user.id} companyPhoto={user.photo} editable={editable}  />
            <InformationStyled>
                <MiddlePanel user={userState} editingState={editingState}
                    handleOnChange={(obj: object, valid: boolean) => handleOnChange(obj, valid, "middle")}  />
                <RightPanel user={userState} editingState={editingState}
                    handleOnChange={(obj: object, valid: boolean) => handleOnChange(obj, valid, "right")} />
            </InformationStyled>
            {editable && <SaveButton editingState={editingState} validState={validMiddleState && validRightState}
                updatingState={updatingState}
                 handleSave={handleSave} />}
        </GeneralPanelStyled>
    )
}

const mapStateToProps = (state: IStore) => {
    return {}
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateUser: (user: IUser) => dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralPanel);
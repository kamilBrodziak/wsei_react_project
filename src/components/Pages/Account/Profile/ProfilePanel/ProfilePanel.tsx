import React, { FC } from 'react'
import styled from 'styled-components';
import { IUser, IUserAdditionalInformation } from '../../../../../Utils/IRestObjects';
import Loading from '../../../../Common/Animations/Loading';
import GeneralPanel from './GeneralPanel/GeneralPanel';
import InformationPanel from './InformationPanel/InformationPanel';

const ProfileStyled = styled.section`
    background: white;
    padding: 10px;
`;

interface IProps {
    user: IUser;
    editable: boolean;
    userInformation: IUserAdditionalInformation;
}

const ProfilePanel:FC<IProps> = ({user, editable, userInformation}) => {
    return (
        <ProfileStyled>
            <GeneralPanel user={user} editable={editable}/>
            <InformationPanel userInformation={userInformation} editable={editable} />
        </ProfileStyled>
    )
}

export default ProfilePanel;
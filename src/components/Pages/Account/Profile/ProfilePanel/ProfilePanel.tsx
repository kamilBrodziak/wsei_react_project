import React, { FC } from 'react'
import styled from 'styled-components';
import { IUser } from '../../../../../Utils/IRestObjects';
import Loading from '../../../../Common/Animations/Loading';
import GeneralPanel from './GeneralPanel/GeneralPanel';

interface IProps {
    user: IUser;
    editable: boolean;
}

const ProfileStyled = styled.section`
    background: white;
`;

const ProfilePanel:FC<IProps> = ({user, editable}) => {
    return (
        <ProfileStyled>
            <GeneralPanel user={user} editable={editable}/>
        </ProfileStyled>
    )
}

export default ProfilePanel;
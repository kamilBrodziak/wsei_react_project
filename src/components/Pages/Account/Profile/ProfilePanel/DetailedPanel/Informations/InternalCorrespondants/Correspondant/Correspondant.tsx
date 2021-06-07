import React, { FC } from 'react';
import styled from 'styled-components';
import Colors from '../../../../../../../../../styledHelpers/Colors';
import { IUser } from '../../../../../../../../../Utils/IRestObjects';
import Figure from '../../../../../../../../Common/Icons/Figure';
import Icon from '../../../../../../../../Common/Icons/Icon';
import MessageIcon from '../../../../../../../../../assets/icons/bell.svg'
import MessageButton from '../../../../../../../../Common/Buttons/MessageButton';
import ProfileLink from '../../../../../../../../Common/Links/ProfileLink';

const UsersListItem = styled.li`
    display: flex;
    align-items: center;
    background: ${Colors.lightGray};
    margin: 0 0 1px 0;
    padding: 5px;
    a, button {
        margin: 0 10px;
    }
`

const UserNameStyled = styled.span`
    font-weight: bold;
    display: block;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
`

const UserNameFigureStyled = styled(Figure)`
    overflow: hidden;
    border-radius: 50%;
    margin: 0 10px 0 0;
`


interface IProps {
    user: IUser;
}

const Correspondant:FC<IProps> = ({user}) => {
    return (
        <UsersListItem>
            <UserNameFigureStyled width="30px" height="30px">
                <Icon src={user.photo.thumbnailUrl} alt={user.photo.title} />
            </UserNameFigureStyled>
            <UserNameStyled>{user.name}</UserNameStyled>
            <MessageButton text="Message" />
            <ProfileLink text="Profile" userId={user.id} includeDefaultIcon={true} />
        </UsersListItem>
    )
}

export default Correspondant;
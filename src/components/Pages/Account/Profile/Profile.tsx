import React, { FC } from 'react'
import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router';
import styled from 'styled-components';
import { fetchUser, getLoggedUser, getLoggedUserInformation } from '../../../../actions/UserActions';
import { IStore } from '../../../../reducers/rootReducer';
import AccountRoutes from '../../../../routes/AccountRoutes';
import { IUser, IUserAdditionalInformation } from '../../../../Utils/IRestObjects';
import Loading from '../../../Common/Animations/Loading';
import GeneralPanel from './ProfilePanel/GeneralPanel/GeneralPanel';
import ProfilePanel from './ProfilePanel/ProfilePanel';




interface IProps {
    user: IUser;
    loading: boolean;
    userInformation: IUserAdditionalInformation
}

const Profile:FC<IProps> = ({user, loading, userInformation}) => {
    const history = useHistory();
    // const match = useRouteMatch();
    let profileUser = user;
    // if(match.params.id) {
    //     profileUser = getUser(match.params.id);
    // }
    if(!user && !loading) {
        history.push(AccountRoutes.routes.find(route => route.name == "Login").path)
    }

    return profileUser ? (
        <ProfilePanel user={profileUser} editable={true} userInformation={userInformation} />
    ) : (
        <Loading width="100%" height="500px"/>
    );
}

const mapStateToProps = (state:IStore) => {
    return {
        user: getLoggedUser(state.userState),
        userInformation: getLoggedUserInformation(state.userState),
        loading: state.userState.loginLoading
    }
}

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         getUser: (id:number) => dispatch(fetchUser(id))
//     }
// }


export default connect(mapStateToProps)(Profile);
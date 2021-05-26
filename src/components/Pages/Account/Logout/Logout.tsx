import React, { FC } from 'react'
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { logoutUser } from '../../../../actions/UserActions';
import { IStore } from '../../../../reducers/rootReducer';
import { IUser } from '../../../../Utils/IRestObjects';
import Loading from '../../../Common/Animations/Loading';

const LogoutStyled = styled.section`

`;


interface IProps extends RouteComponentProps {
    logout: Function;
    user: IUser;
    loading: boolean;
}

class Logout extends React.Component<IProps> {
    constructor(props:IProps) {
        super(props)
        if(props.user) {
            this.props.logout();
        }
        if(!props.loading) {
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <LogoutStyled>
                <Loading width="100%" height="200px"/>
            </LogoutStyled>
        )
    }
}

const mapStateToProps = (state:IStore) => {
    return {
        loading: state.userState.loading,
        user: state.userState.user
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        logout: () => {dispatch(logoutUser())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
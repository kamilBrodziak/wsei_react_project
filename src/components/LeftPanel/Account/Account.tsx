import React, { FC } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getLoggedUser } from '../../../actions/UserActions';
import { IStore } from '../../../reducers/rootReducer';
import { FlexCentered } from '../../../styledHelpers/Positioning';
import { IUser } from '../../../utils/IRestUser';
import Loading from '../../Common/Animations/Loading';
import Details from './Details/Details';
import LoginLink from './LoginLink/LoginLink';
import Menu from './Menu/Menu';

const AccountStyled = styled.div`
    ${FlexCentered}
    flex-direction: column;
    box-shadow: 1px 2px 2px 1px lightgray;
    border-radius: 5px;
    background: white;
    height: 272px;
`


interface IProps {
    user: IUser,
    loading: boolean
}

const Account:FC<IProps> = ({user, loading}) => {
    let content = <></>
    if(loading) {
        content = (
            <Loading width="100%" height="722px"/>
        )
    } else if(user) {
        content = (
            <>
                <Details user={user} />
                <Menu />
            </>
        )
    } else {
        content = (
            <>
                <LoginLink type="Login"/>
                <LoginLink type="Register"/>
            </>
        )
    }
    return (
        <AccountStyled>
            {content}
        </AccountStyled>
    )
}


const mapStateToProps = (state:IStore) => {
    return {
        user: getLoggedUser(state.userState),
        loading: state.userState.loginLoading
    }
}

export default connect(mapStateToProps)(Account);
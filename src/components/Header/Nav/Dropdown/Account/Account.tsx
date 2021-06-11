import { FC, MouseEvent } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { IStore } from '../../../../../reducers/rootReducer';
import { IUser } from '../../../../../utils/IRestUser';
import Menu from './Menu/Menu';
import Loading from '../../../../Common/Animations/Loading';
import LogoutLink from './LogoutLink/LogoutLink';
import LoginLink from './LoginLink/LoginLink';
import { getLoggedUser } from '../../../../../actions/UserActions';

const AccountStyled = styled.div`
    padding: 2px 0;
`


interface IProps {
    onClick: (e:MouseEvent) => void;
    user: IUser;
    loading: boolean;
}

const Account:FC<IProps> = ({onClick, user, loading}) => {
    let content = <></>
    if(loading) {
        content=<Loading width="100px" height="100px"/>
    } else if(user) {
        content= (
            <>
                <Menu onClick={onClick} user={user}/>
                <LogoutLink onClick={onClick}/>
            </>
        )
    } else {
        content=(
            <>
                <LoginLink type="Login" onClick={onClick}/>
                <LoginLink type="Register" onClick={onClick}/>
            </>
        )
    }
    return (
        <AccountStyled>
            {content}
        </AccountStyled>
    )
}

const mapStateToProps = (state : IStore) => {
    return {
        user: getLoggedUser(state.userState),
        loading: state.userState.loginLoading
    }
}

export default connect(mapStateToProps)(Account);
import { FC, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import {getUsers } from '../../../../../../../../actions/UserActions';
import { IStore } from '../../../../../../../../reducers/rootReducer';
import { IUser } from '../../../../../../../../utils/IRestUser';
import Loading from '../../../../../../../Common/Animations/Loading';
import Header from '../../../../Common/Header';
import Correspondant from './Correspondant/Correspondant';

const ContainerStyled = styled.div`

`

const UsersList = styled.ul`
`



interface IProps {
    correspondantsIds: number[],
    getUsers: (ids:number[]) => Promise<IUser[]>;
    loading: boolean;
}

const InternalCorrespondants:FC<IProps> = ({correspondantsIds, getUsers, loading}) => {
    const [usersState, setUsersState] = useState([]);
    let content = <span>No correspondats</span>
    if(correspondantsIds.length) {
        content = <Loading width="100%" height="80px"/>
        useEffect(() => {
            getUsers(correspondantsIds).then(users => {
                setUsersState(users);
            })
        }, []);
        if(!loading) {
            content = usersState.length ? <UsersList>
                {
                    usersState.map((user:IUser, i) => {
                        return <Correspondant user={user} key={i} />
                    })
                }
            </UsersList> : <span>No correspondats</span>
        }
    }
    
    return (
        <ContainerStyled>
            <Header>Internal correspondants</Header>
            {content}
        </ContainerStyled>
    )
}

const mapStateToProps = (state:IStore) => {
    return {
        loading: state.userState.userFetching
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUsers: (ids:number[]) => dispatch(getUsers(ids))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InternalCorrespondants);
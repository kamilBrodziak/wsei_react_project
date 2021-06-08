import { FC } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchUserProposalsAction } from '../../../../../../../actions/UserActions';
import { IStore } from '../../../../../../../reducers/rootReducer';
import { IProposal } from '../../../../../../../Utils/IRestObjects';
import Header from '../../../Common/Header';
import Panel from '../../../Common/Panel';
import TablePaginated from '../../../../../../Common/Tables/TablePaginated';

const ProposalsStyled = styled(Panel)`

`;


interface IProps {
    userId: number;
    proposals: IProposal[];
    fetching: boolean;
    getProposals: (userId: number, page: number, limit: number) => void;
}

const Proposals:FC<IProps> = ({proposals, getProposals, userId, fetching}) => {
    const limit = 10;
    const getNextProposals = (userId: number, page: number, limit: number) => {
        getProposals(userId, page, limit)
    }
    const headers = ["Name", "Entity", "Location", "Expertise", "Date", "Firm"];
    const values = proposals.map(({name, entity, location, expertise, date, firm}) => 
            [name, entity, location, expertise, date.toLocaleDateString(), firm])
    return (
        <ProposalsStyled>
            <Header>Proposals </Header>
            <TablePaginated headers={headers} values={values} maxPage={15} dataName="proposals" 
                fetching={fetching} getValues={(page) => getNextProposals(userId, page, limit)}
                getStartingValues={(page) => getNextProposals(userId, 0, 3)}
                />
        </ProposalsStyled>
    )
}

const mapStateToProps = (state:IStore) => {
    return {
        proposals: state.userState.proposals,
        fetching: state.userState.proposalsFetching
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        getProposals: (userId: number, page: number, limit: number) => dispatch(fetchUserProposalsAction(userId, page, limit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Proposals);
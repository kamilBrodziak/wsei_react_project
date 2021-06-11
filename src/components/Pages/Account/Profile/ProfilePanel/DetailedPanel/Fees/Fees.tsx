import { FC } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchUserFeesAction} from '../../../../../../../actions/UserActions';
import { IStore } from '../../../../../../../reducers/rootReducer';
import { IFee } from '../../../../../../../utils/IRestUser';
import Header from '../../../Common/Header';
import Panel from '../../../Common/Panel';
import TablePaginated from '../../../../../../Common/Tables/TablePaginated';

const FeesStyled = styled(Panel)`

`;


interface IProps {
    userId: number;
    fees: IFee[];
    fetching: boolean;
    getFees: (userId: number, page: number, limit: number) => void;
}

const Fees:FC<IProps> = ({fees, getFees, userId, fetching}) => {
    const limit = 100;
    const getNextFees = (userId: number, page: number, limit: number) => {
        getFees(userId, page, limit)
    }
    const headers = ["Year", "Cost center", "Total amount", "Law firm"];
    const amountFormatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: "EUR"
    })
    let previousYear = 0;
    const values = fees.map(({year, costCenter, amount, lawFirm}) => {
        let yearDisplayed = `${year.getFullYear()}`
        if(year.getFullYear() === previousYear) {
            yearDisplayed = "";
        } else {
            previousYear = year.getFullYear();
        }
        return [yearDisplayed, costCenter, amountFormatter.format(amount), lawFirm]
    })
    return (
        <FeesStyled>
            <Header>Amount of fees </Header>
            <TablePaginated headers={headers} values={values} maxPage={0} dataName="fees" 
                fetching={fetching} getValues={(page) => getNextFees(userId, page, limit)}
                getStartingValues={(page) => getNextFees(userId, 0, 100)}
                />
        </FeesStyled>
    )
}

const mapStateToProps = (state:IStore) => {
    return {
        fees: state.userState.fees,
        fetching: state.userState.feesFetching
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        getFees: (userId: number, page: number, limit: number) => dispatch(fetchUserFeesAction(userId, page, limit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fees);
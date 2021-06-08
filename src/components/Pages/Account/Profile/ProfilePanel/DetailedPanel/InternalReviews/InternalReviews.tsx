import { FC } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchUserReviewsAction } from '../../../../../../../actions/UserActions';
import { IStore } from '../../../../../../../reducers/rootReducer';
import { IReview } from '../../../../../../../Utils/IRestObjects';
import Header from '../../../Common/Header';
import Panel from '../../../Common/Panel';
import TablePaginated from '../../../../../../Common/Tables/TablePaginated';

const InternalReviewsStyled = styled(Panel)`

`;


interface IProps {
    userId: number;
    reviews: IReview[];
    fetching: boolean;
    getReviews: (userId: number, page: number, limit: number) => void;
}

const InternalReviews:FC<IProps> = ({reviews, getReviews, userId, fetching}) => {
    const limit = 10;
    const maxPage = 12;
    const getNextReviews = (userId: number, page: number, limit: number) => {
        getReviews(userId, page, limit)
    }
    const headers = ["Name", "Entity", "Location", "Expertise", "Date"];
    const values = reviews.map(({name, entity, location, expertise, date}) => 
            [name, entity, location, expertise, date.toLocaleDateString()])
    return (
        <InternalReviewsStyled>
            <Header>Internal reviews</Header>
            <TablePaginated headers={headers} values={values} maxPage={maxPage} dataName="reviews" 
                fetching={fetching} getValues={(page) => getNextReviews(userId, page, limit)}
                getStartingValues={(page) => getNextReviews(userId, 0, 3)}
                />
        </InternalReviewsStyled>
    )
}

const mapStateToProps = (state:IStore) => {
    return {
        reviews: state.userState.reviews,
        fetching: state.userState.reviewsFetching
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        getReviews: (userId: number, page: number, limit: number) => dispatch(fetchUserReviewsAction(userId, page, limit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InternalReviews);
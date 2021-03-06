import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMeasure, useSearchParam } from 'react-use';
import styled from 'styled-components';
import { IStore } from '../../../../../reducers/rootReducer';
import { IComment, IExtendedComment } from '../../../../../utils/IRestComments';
import { IUser } from '../../../../../utils/IRestUser';
import queryString from 'query-string'
import { IQueryOptions } from '../../../../../utils/IRestQuery';
import { fetchCommentsQueryAction, getComments } from '../../../../../actions/CommentActions';
import Loading from '../../../../Common/Animations/Loading';
import List from './List/List';
import Colors from '../../../../../styledHelpers/Colors';
import Pagination from '../../../../Common/Paginations/Pagination';
import SearchInput from '../../../../Common/Inputs/SearchInput';
import { TCommentQueries } from '../../../../../reducers/commentReducer';
import useFetching from '../../../../../hooks/useFetching';
import useQuerySearch from '../../../../../hooks/useQuerySearch';
import useContentPaginated from '../../../../../hooks/useContentPaginated';
import OptionsDropdown, { IDropdownOption } from '../../../../Common/Dropdowns/OptionsDropdown';
import AllIcon from '../../../../../assets/icons/all.svg';
import FollowedIcon from '../../../../../assets/icons/signal.svg' 
import MyIcon from '../../../../../assets/icons/user.svg' 

const WidgetStyled = styled.section`
    margin: 20px 0 0 0;
`

const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 10px 0;
`

const Navstyled = styled.nav`

`

const TitleStyled = styled.h2`
    color: ${Colors.darkGray};
    font-size: 2.5rem;
    font-weight: bold;
    flex: 1;
`

const SearchInputStyled = styled(SearchInput)`
    && {
        margin: 0 10px 0 0;
        width: 200px;
    }
`

interface IProps {
    comments: {[key:number]:IComment},
    queries: TCommentQueries,
    users: IUser[],
    loading: boolean,
    fetchComments: (query:IQueryOptions) => void;
}

const ResumeWorkWidget:FC<IProps> = ({comments, queries, users, loading, fetchComments}) => {
    // const [ref, {height}] = useMeasure<HTMLElement>();
    // const {changeOption, options} = useQuerySearch();
    // const {data, total} = useFetching(() => fetchComments(options), options, loading, 
    //     () => getComments(options, queries, comments, users))

    // const paginationAction = (page:number) => {
    //     const newOptions = {...options, _page:page+1}
    //     changeOption(newOptions)
    // }
    // let content = <Loading width="100%" height={`${height > 0 ? height : 200}px`} />
    // if(!loading) {
    //     if(data?.length) {
    //         content = <div ref={ref}><List comments={data} /></div>
    //     } else {
    //         content = <div ref={ref}>No records found</div>
    //     }
    // }
    const {content, pagination, changeOption, options} = useContentPaginated<IExtendedComment[]>(
        (options:IQueryOptions)=> fetchComments(options),
        loading,
        (options:IQueryOptions) => getComments(options, queries, comments, users),
        (data)=> <List comments={data} />);
    const onSubmit = (search:string) => {
        changeOption({_like:{name:search}, _page:1})
    }
    
    const dropdownOptions:IDropdownOption[] = [
        {
            text: 'Followed',
            icon: FollowedIcon, 
            iconAlt: 'followed icon',
            onSelect: () => null
        },
        {
            text: 'All',
            icon: AllIcon, 
            iconAlt: 'all icon',
            onSelect: () => null
        },
        {
            text: 'My',
            icon: MyIcon, 
            iconAlt: 'my icon',
            onSelect: () => null
        }
    ]
    return (
        <WidgetStyled>
            <HeaderStyled>
                <TitleStyled>Resume your work</TitleStyled>
                <SearchInputStyled placeholder="Filter by title..." value={options?._like?.name} onSubmit={onSubmit} />
                <Navstyled><OptionsDropdown data={dropdownOptions} /></Navstyled>
            </HeaderStyled>
            {content}
            {/* <Pagination page={options._page - 1} maxPage={Math.ceil(total / options._limit)} onClick={paginationAction}/> */}
            {pagination}
        </WidgetStyled>
    )
}

const mapStateToProps = (state:IStore) => {
    return {
        loading: state.commentState.fetching,
        comments: state.commentState.comments,
        queries: state.commentState.queries,
        users: state.userState.users
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        fetchComments: (options:IQueryOptions) => dispatch(fetchCommentsQueryAction(options))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeWorkWidget);
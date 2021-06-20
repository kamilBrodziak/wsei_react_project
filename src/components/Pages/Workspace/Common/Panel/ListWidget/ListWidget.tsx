import { FC } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchCommentsQueryAction, getComments } from '../../../../../../actions/CommentActions';
import useContentPaginated from '../../../../../../hooks/useContentPaginated';
import { TCommentQueries } from '../../../../../../reducers/commentReducer';
import { IStore } from '../../../../../../reducers/rootReducer';
import Colors from '../../../../../../styledHelpers/Colors';
import { IComment, IExtendedComment } from '../../../../../../utils/IRestComments';
import { IQueryOptions } from '../../../../../../utils/IRestQuery';
import { IUser } from '../../../../../../utils/IRestUser';
import SearchInput from '../../../../../Common/Inputs/SearchInput';
import Options from './Options/Options';
import List from './List/List';
import ExampleIcon from '../../../../../../assets/icons/entities.svg';

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

export interface IData {
    icon?:string,
    text:string,
    color?:string;
    background: string
}

const ListWidget:FC<IProps> = ({comments, queries, users, loading, fetchComments}) => {
    const optionsData:IData[] = [
        {
            text: 'All',
            background: '#eaecf5',
            color: '#2a3f9d'
        },
        {
            icon: ExampleIcon,
            text: 'SAS',
            background: '#cce5cc',
            color: '#339933'
        },
        {
            icon: ExampleIcon,
            text: 'SARL',
            background: '#edf6fa',
            color: '#3d9ecd'
        },
        {
            icon: ExampleIcon,
            text: 'Secondary Buisness',
            background: '#f2e5c4',
            color: '#d6a93d'
        },
        {
            icon: ExampleIcon,
            text: 'Communities',
            background: '#cccccc',
            color: '#384058'
        },
        {
            icon: ExampleIcon,
            text: 'POA',
            background: '#e8e8e8',
            color: '#555b70'
        },
        {
            icon: ExampleIcon,
            text: 'Survey',
            background: '#ffffff',
            color: '#4d536a'
        },
        {
            text: '...',
            background: '#ffffff',
            color: '#4c5469'
        }
    ]
    const {content, pagination, changeOption, options} = useContentPaginated<IExtendedComment[]>(
        (options:IQueryOptions)=> fetchComments(options),
        loading,
        (options:IQueryOptions) => getComments(options, queries, comments, users),
        (data)=> <List comments={data.map(el => ({...el, icon: ExampleIcon}))}/>);
    const onSubmit = (search:string) => {
        changeOption({_like:{name:search}, _page:1})
    }
    
    
    return (
        <WidgetStyled>
            <HeaderStyled>
                <TitleStyled>Latest updates</TitleStyled>
                <SearchInputStyled placeholder="Filter by title..." value={options?._like?.name} onSubmit={onSubmit} />
                <Navstyled>Followed</Navstyled>
            </HeaderStyled>
            <Options options={optionsData}/>
            {content}
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

export default connect(mapStateToProps, mapDispatchToProps)(ListWidget);
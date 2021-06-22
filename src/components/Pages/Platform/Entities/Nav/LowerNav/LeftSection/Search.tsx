import { FC } from 'react';
import styled from 'styled-components';
import SearchInput from '../../../../../../Common/Inputs/SearchInput';

const SearchStyled = styled(SearchInput)`
    width: 100%;
    min-width: 150px;
    max-width: 180px;
`

interface IProps {
    onSearch: (search:string) => void;
}

const Search:FC<IProps> = ({onSearch}) => {
    return (
        <SearchStyled onSubmit={onSearch} placeholder={'Search...'}/>
    )
}

export default Search;
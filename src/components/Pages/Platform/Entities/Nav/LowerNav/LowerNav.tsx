import { FC } from 'react';
import styled from 'styled-components';
import Breakpoints from '../../../../../../styledHelpers/Breakpoints';
import Colors from '../../../../../../styledHelpers/Colors';
import { IDropdownOption } from '../../../../../Common/Dropdowns/OptionsDropdown';
import SearchInput from '../../../../../Common/Inputs/SearchInput';
import Dots from './LeftSection/Dots';
import FilterButton from './LeftSection/Filter/FilterButton';
import FullscreenButton from './LeftSection/FullscreenButton';
import LeftDropdown from './LeftSection/LeftDropdown';
import RightDropdown from './LeftSection/RightDropdown';
import Search from './LeftSection/Search';
import ShareButton from './LeftSection/ShareButton';
import Sort, { SortOptionsEnum } from './LeftSection/Sort';

const LowerNavStyled = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    flex-flow: row wrap;
`

const BorderedSection = styled.div`
    display: flex;
    margin: 10px 0;
    &:last-child:not(:only-child) {
        padding: 0 0 0 10px;
    }

    &:first-child:not(:only-child) {
        padding: 0 10px 0 0;
    }

    &:not(:last-child):not(:only-child) {
        padding: 0 10px;
    }

    &:not(:last-child) {
        border-right: 1px solid ${Colors.lightGray};
    }
    & > *:not(:last-child){
        margin: 0 10px 0 0;
    }
`

const LeftSection = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const RightSection = styled.div`
    display: flex;
    flex-flow: row wrap;

`

interface IProps {
    handleSort: (type:SortOptionsEnum) => void;
    handleFilter: () => void;
    handleFullScreen: () => void;
    handleSearch: (search:string) => void;
}

const LowerNav:FC<IProps> = ({handleSort, handleFilter, handleFullScreen, handleSearch}) => {
    return (
        <LowerNavStyled>
            <LeftSection>
                <BorderedSection>
                    <LeftDropdown />
                    <Dots />
                </BorderedSection>
                <BorderedSection>
                    <Sort onClick={handleSort}/>
                    <FilterButton onClick={handleFilter}/>
                </BorderedSection>
                <BorderedSection>
                    <FullscreenButton onClick={handleFullScreen}/>
                </BorderedSection>
                <BorderedSection>
                    <ShareButton/>
                </BorderedSection>
            </LeftSection>
            <RightSection>
                <BorderedSection>
                    <Search onSearch={handleSearch} />
                </BorderedSection>
                <BorderedSection>
                    <RightDropdown />
                </BorderedSection>
            </RightSection>
        </LowerNavStyled>
    )
}

export default LowerNav;


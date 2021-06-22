import { FC } from 'react';
import styled from 'styled-components';
import Colors from '../../../../../../../../styledHelpers/Colors';
import Button from '../../../../../../../Common/Buttons/Button';
import IconWithText from '../../../../../../../Common/Icons/IconWithText';
import FilterIcon from '../../../../../../../../assets/icons/filter.svg';
const FilterButtonStyled = styled(Button)`
    background: none;
`

const TextIcon = styled(IconWithText)`
    color: ${Colors.gray};

`

interface IProps {
    onClick: () => void;
}

const FilterButton:FC<IProps> = ({onClick}) => {
    return (
        <FilterButtonStyled width="auto" height="auto" onClick={onClick}>
            <TextIcon text={'Filters'} icon={FilterIcon} iconAlt="filter icon" />
        </FilterButtonStyled>
    )
}

export default FilterButton;
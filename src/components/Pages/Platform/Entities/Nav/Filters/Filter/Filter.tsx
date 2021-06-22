import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from '../../../../../../../styledHelpers/Colors';
import Button from '../../../../../../Common/Buttons/Button';
import OptionsDropdown from '../../../../../../Common/Dropdowns/OptionsDropdown';
import Input from '../../../../../../Common/Editable/Inputs/Input';
import Figure from '../../../../../../Common/Icons/Figure';
import Icon from '../../../../../../Common/Icons/Icon';
import DateFilter from './DateFIlter';
import { FilterValueEnum, TFilterStartData } from './IFilter';
import TextFilter from './TextFilter';
import RemoveIcon from '../../../../../../../assets/icons/remove.svg'

const FilterStyled = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    & > span {
        width: 50px;
    }
    & > *:not(:last-child) {
        margin: 0 10px 0 0;
    }
    & > div.filter {
        & > *:not(:last-child) {
            margin: 0 10px 0 0;
        }
        display: flex;
        align-items: center;
    }
    input {
        background: ${Colors.lightGray};
        padding: 5px 0;
        text-align: center;
        width: 140px;
        border: 0;
        cursor: pointer;
        border-radius: 5px;
    }
`

const RemoveButtonStyled = styled(Button)`
    background: none;
`




interface IProps {
    data: TFilterStartData;
    selected?: string;
    handleRemove: () => void;
    name?:string;
}

const Filter:FC<IProps> = ({data, name, selected, handleRemove}) => {
    const dataList = Object.keys(data);
    if(!selected) selected = dataList[0]
    const [state, setState] = useState(selected)
    let content = <></>
    switch(data[state]) {
        case FilterValueEnum.DATE:
            content = <DateFilter className={'filter'} />
            break;
        case FilterValueEnum.TEXT:
            content = <TextFilter className={'filter'} />
            break;
    }
    return (
        <FilterStyled>
            <RemoveButtonStyled width="auto" height="auto" onClick={handleRemove}>
                <Figure width="20px" height="20px">
                    <Icon src={RemoveIcon} alt="remove icon"/>
                </Figure>
            </RemoveButtonStyled>
            {name && <span>{name}</span>}
            <OptionsDropdown selected={dataList.indexOf(selected)} 
                data={dataList.map(el => ({text:el}))} 
                handleSelect={(id) => setState(dataList[id])} />
            { content }
        </FilterStyled>
    )
}

export default Filter;
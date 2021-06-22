import { FC, useState } from 'react';
import styled from 'styled-components';
import Colors from '../../../../../../styledHelpers/Colors';
import Button from '../../../../../Common/Buttons/Button';
import IconWithText from '../../../../../Common/Icons/IconWithText';
import Filter from './Filter/Filter';
import { FilterPropertyEnum, FilterValueEnum, TFilterStartData } from './Filter/IFilter';
import AddIcon from '../../../../../../assets/icons/plus.svg'
import OptionsDropdown from '../../../../../Common/Dropdowns/OptionsDropdown';

const FiltersStyled = styled.section<{active:boolean}>`
    padding: 10px 0;
    display: ${props => props.active ? "block" : "none"};
`

const TitleStyled = styled.p`
    color: ${Colors.gray};
`

const FilterListStyled = styled.ul`
    list-style: none;
    padding: 10px;
    color: ${Colors.darkGray};
`

const FliterListElStyled = styled.li`
    display: flex;
    flex-flow: row wrap;
    & > *:not(:last-child) {
        margin: 0 10px 0 0;
    }
    
`

const AddButtonStyled = styled(Button)`
    background: none;
    figure {
        width: 20px;
        height: 20px;
    }
`

interface IProps {
    className?: string;
    opened:boolean;
}

const Filters:FC<IProps> = ({className, opened}) => {
    const properties = [{text:FilterPropertyEnum.WHERE}, {text:FilterPropertyEnum.AND}, {text:FilterPropertyEnum.OR}]
    const allOptions:TFilterStartData = {
        'Company':FilterValueEnum.TEXT,
        'Status':FilterValueEnum.DATE,
        'Title': FilterValueEnum.TEXT,
        'Size': FilterValueEnum.NUMBER
    }

    const [property, setProperty] = useState(properties[0].text);

    const [options, setOptions] = useState([
        {
            prefix: FilterPropertyEnum.WHERE,
            name: "Company",
            type: FilterValueEnum.TEXT
        },
        {
            prefix: FilterPropertyEnum.WHERE,
            name: "Status",
            type: FilterValueEnum.DATE
        },
        {
            prefix: FilterPropertyEnum.AND,
            name: "Status",
            type: FilterValueEnum.DATE
        }
    ])

    const handleRemove = (id:number) => {
        const newOptions = options.filter((el, i) => i !== id);
        setOptions(newOptions);
    }

    const handleAdd = () => {
        const newOptions = [...options, {
            prefix: property,
            name: "Company",
            type: FilterValueEnum.TEXT
        }];
        setOptions(newOptions);
    }

    return (
        <FiltersStyled className={className} active={opened}>
            <TitleStyled>Rows are filtered by the following conditions starting from the top.</TitleStyled>
            <FilterListStyled>
                {
                    options.map(({name, prefix}, i) => (<FliterListElStyled>
                        <Filter name={prefix} data={allOptions} key={i} selected={name} handleRemove={() => handleRemove(i)}/>
                    </FliterListElStyled>
                    ))
                }
                <FliterListElStyled>
                    <AddButtonStyled width="auto" height="auto" onClick={handleAdd}>
                        <IconWithText icon={AddIcon} iconAlt="add icon" text={"Add filter"} />
                    </AddButtonStyled>
                    <OptionsDropdown selected={0} data={properties} handleSelect={(id) => setProperty(properties[id].text)} />
                </FliterListElStyled>
            </FilterListStyled>
        </FiltersStyled>
    )
}

export default Filters;
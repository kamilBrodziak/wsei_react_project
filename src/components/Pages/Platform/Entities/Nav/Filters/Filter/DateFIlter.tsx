import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from '../../../../../../../styledHelpers/Colors';
import { dateToString } from '../../../../../../../utils/Utils';
import OptionsDropdown, { IDropdownOption } from '../../../../../../Common/Dropdowns/OptionsDropdown';
import { DateFilterEnum } from './IFilter';

const DateFilterStyled = styled.div`

`

const InputStyled = styled.input`

`



interface IProps {
    className?: string;
}

const DateFilter:FC<IProps> = ({className}) => {
    let content = <></>;
    const dropdownOptions:IDropdownOption[] = [
        {text:DateFilterEnum.ENDSBEFORE},
        {text:DateFilterEnum.STARTSAFTER},
        {text:DateFilterEnum.BETWEEN}
    ]
    const [option, setOption] = useState(0);
    const [state, setState] = useState<{type:DateFilterEnum, values:Date[]}>({
        type: DateFilterEnum.ENDSBEFORE,
        values: [null]
    })

    useEffect(() => {
        const newValues:Date[] = [null];
        if(state.type === DateFilterEnum.BETWEEN) {
            newValues.push(null);
        }
        setState({...state, values:newValues});
    }, [state.type])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>, id:number=0) => {
        const newValues:Date[] = [...state.values];
        newValues[id] = e.currentTarget.valueAsDate;
        setState({...state, values:newValues})
    }
    const generateInput = (id:number) => {
        return <InputStyled type='date' onChange={(e) => handleChange(e, id)} 
            value={state.values[id] ? dateToString('yyyy-MM-dd',state.values[id]) : ""}/>
    }
    switch(option) {
        case 0:
        case 1:
            content = generateInput(0)
            break;
        case 2:
            content = <>
                {generateInput(0)}
                <span>and</span>
                {generateInput(1)}
            </>
    }
    return (
        <DateFilterStyled className={className}>
            <OptionsDropdown data={dropdownOptions} handleSelect={(id) => setOption(id)} />
            {content}
        </DateFilterStyled>
    )
}

export default DateFilter;
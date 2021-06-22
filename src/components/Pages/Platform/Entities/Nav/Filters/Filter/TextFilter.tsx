import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from '../../../../../../../styledHelpers/Colors';
import OptionsDropdown, { IDropdownOption } from '../../../../../../Common/Dropdowns/OptionsDropdown';
import { TextFilterEnum } from './IFilter';

const TextFilterStyled = styled.div`

`

const InputStyled = styled.input`

`





interface IProps {
    className?: string;
}

const TextFilter:FC<IProps> = ({className}) => {
    const dropdownOptions:IDropdownOption[] = [
        {text:TextFilterEnum.CONTAINS},
        {text:TextFilterEnum.EQUAL},
        {text:TextFilterEnum.NOTEQUAL}
    ]
    const [option, setOption] = useState(0);
    const [state, setState] = useState<{type:TextFilterEnum, values:string[]}>({
        type: TextFilterEnum.CONTAINS,
        values: [null]
    })

    useEffect(() => {
        const newValues:string[] = [null];
        setState({...state, values:newValues});
    }, [state.type])

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>, id:number=0) => {
        const newValues:string[] = [...state.values];
        newValues[id] = e.currentTarget.value;
        setState({...state, values:newValues})
    }
    const generateInput = (id:number) => {
        return <InputStyled type='text' onChange={(e) => handleChange(e, id)} placeholder="Value..."
            value={state.values[id] ? state.values[id] : ""}/>
    }

    let content = <></>;
    switch(option) {
        case 0:
        case 1:
        case 2:
            content = generateInput(0)
            break;
    }

    return (
        <TextFilterStyled className={className}>
            <OptionsDropdown data={dropdownOptions} handleSelect={(id) => setOption(id)} />
            {content}
        </TextFilterStyled>
    )
}

export default TextFilter;
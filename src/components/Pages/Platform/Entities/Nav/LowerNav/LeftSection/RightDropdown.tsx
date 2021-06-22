import { FC } from 'react';
import styled from 'styled-components';
import OptionsDropdown, { IDropdownOption } from '../../../../../../Common/Dropdowns/OptionsDropdown';
import AllIcon from '../../../../../../../assets/icons/all.svg';
import FollowedIcon from '../../../../../../../assets/icons/signal.svg' 
import MyIcon from '../../../../../../../assets/icons/user.svg' 
import { PanelCss } from '../../../../../../../styledHelpers/Common';

const DropdownStyled = styled(OptionsDropdown)`
    border: 1px solid #2a3f9d;
    border-radius: 5px;
    * {
        color: #2a3f9d;
    }
`

interface IProps {
}

const RightDropdown:FC<IProps> = () => {
    const options:IDropdownOption[] = [
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
        <DropdownStyled data={options}/>
    )
}

export default RightDropdown;
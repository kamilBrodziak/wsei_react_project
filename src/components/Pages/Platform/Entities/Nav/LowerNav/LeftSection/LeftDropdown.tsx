import { FC } from 'react';
import styled from 'styled-components';
import OptionsDropdown, { IDropdownOption } from '../../../../../../Common/Dropdowns/OptionsDropdown';
import AllIcon from '../../../../../../../assets/icons/all.svg';
import FollowedIcon from '../../../../../../../assets/icons/signal.svg' 
import MyIcon from '../../../../../../../assets/icons/user.svg' 
import { PanelCss } from '../../../../../../../styledHelpers/Common';

const LeftDropdownStyled = styled.div`

`

const DropdownStyled = styled(OptionsDropdown)`
    background: #eaecf5;
    ${PanelCss}
`

interface IProps {
}

const LeftDropdown:FC<IProps> = () => {
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

export default LeftDropdown;
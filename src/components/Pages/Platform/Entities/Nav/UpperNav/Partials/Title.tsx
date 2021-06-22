import { FC } from 'react';
import styled from 'styled-components';
import SettingsIcon from '../../../../../../../assets/icons/cog.svg';
import Colors from '../../../../../../../styledHelpers/Colors';
import Button from '../../../../../../Common/Buttons/Button';
import Icon from '../../../../../../Common/Icons/Icon';

const TitleStyled = styled.h1`
    width: auto;
    display: flex;
    align-items: center;
`

const TextStyled = styled.span`
    font-size: 2.2rem;
    padding: 0 10px 0 0;
    color: ${Colors.darkGray};
`

const SettingsButton = styled(Button)`
    background: none;
    border: 0;
    outline: 0;
`

interface IProps {

}

const Title:FC<IProps> = () => {
    return (
        <TitleStyled>
            <TextStyled>Entities</TextStyled>
            <SettingsButton width="16px" height="16px">
                <Icon src={SettingsIcon} alt={'settings'} />    
            </SettingsButton> 
        </TitleStyled>
    )
}

export default Title;
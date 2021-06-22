import { FC } from 'react';
import styled from 'styled-components';
import Colors from '../../../../../../../styledHelpers/Colors';
import { FlexCentered } from '../../../../../../../styledHelpers/Positioning';
import Button from '../../../../../../Common/Buttons/Button';

const DotsStyled = styled(Button)`
    font-weight: bold;
    background: none;
    border: 0;
    outline: 0;
    padding: 4px;
    color: ${Colors.darkGray};

`



interface IProps {

}

const Dots:FC<IProps> = () => {
    return (
        <DotsStyled width="auto" height="auto">
            &bull;&bull;&bull;
        </DotsStyled>
    )
}

export default Dots;
import { FC } from 'react';
import styled from 'styled-components';
import Colors from '../../../../../../../styledHelpers/Colors';
import { FlexCentered } from '../../../../../../../styledHelpers/Positioning';
import Button from '../../../../../../Common/Buttons/Button';
import Figure from '../../../../../../Common/Icons/Figure';
import Icon from '../../../../../../Common/Icons/Icon';
import ExpandIcon from '../../../../../../../assets/icons/expand.svg';

const FullscreenStyled = styled(Button)`
    font-weight: bold;
    background: none;
    border: 0;
    outline: 0;
    padding: 4px;
    color: ${Colors.darkGray};

`



interface IProps {
    onClick: () => void;
}

const FullscreenButton:FC<IProps> = ({onClick}) => {
    return (
        <FullscreenStyled width="auto" height="auto" onClick={onClick}>
            <Figure width="12px" height="12px">
                <Icon src={ExpandIcon} alt={'expand icon'} />
            </Figure>
        </FullscreenStyled>
    )
}

export default FullscreenButton;
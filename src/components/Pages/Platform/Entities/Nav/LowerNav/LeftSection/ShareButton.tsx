import { useState } from 'react';
import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ShareIcon from '../../../../../../../assets/icons/share.svg';
import Colors from '../../../../../../../styledHelpers/Colors';
import { FlexCentered } from '../../../../../../../styledHelpers/Positioning';
import Button from '../../../../../../Common/Buttons/Button';
import IconWithText from '../../../../../../Common/Icons/IconWithText';
const ShareButtonStyled = styled(Button)`
    background: none;
    position: relative;
    &.active::after {
        position: absolute;
        content: 'Copied to clipboard!';
        left: 0;
        height: 100%;
        cursor: default;
        width: 100%;
        ${FlexCentered}
        border-radius: 5px;
        font-size: 1rem;
        background: #eaecf5;
    }
`

const TextIcon = styled(IconWithText)`
    color: ${Colors.gray};

`

interface IProps {
    className?: string;
}

const ShareButton:FC<IProps> = ({className}) => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setClicked(true);
            setTimeout(()=>{
                setClicked(false);
            }, 1500)
        })
        
    }
    return (
        <ShareButtonStyled className={`${className}${clicked ? ' active' : ''}`} width="auto" height="auto" onClick={handleClick}>
            <TextIcon text={'Share'} icon={ShareIcon} iconAlt="share icon" />
        </ShareButtonStyled>
    )
}

export default ShareButton;
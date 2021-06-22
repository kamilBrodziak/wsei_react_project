import styled from 'styled-components';
import MosaicIcon from '../../../../../../../assets/icons/tile.svg';
import ListIcon from '../../../../../../../assets/icons/list.svg';
import Button from '../../../../../../Common/Buttons/Button';
import Colors from '../../../../../../../styledHelpers/Colors';
import { useState } from 'react';
import { FC } from 'react';
import Figure from '../../../../../../Common/Icons/Figure';
import IconWithText from '../../../../../../Common/Icons/IconWithText';
import Icon from '../../../../../../Common/Icons/Icon';

const ViewSwitchStyled = styled.div`
    display: flex;
    border: 1px solid ${Colors.lightGray};
    border-radius: 5px;
    overflow:hidden;
`

const ButtonStyled = styled(Button)`
    padding: 8px;
    background: white;
    color: #2a3f9d;
    display: flex;
    align-items: center;

    &:disabled {
        cursor: default;
        background:#eaecf5;
        padding: 8px 8px 8px 16px
    }
`

const TextStyled = styled.span`
    padding: 0 0 0 8px;
    font-weight: bold;
`

export enum ViewSwitchEnum {
    MOSAIC='MOSAIC',
    LIST='LIST'
}

interface ISwitch {
    text: string;
    type: ViewSwitchEnum;
    icon: string;
    iconAlt: string;
}

interface IProps {
    handleViewSwitch: (type:ViewSwitchEnum) => void;
}

const ViewSwitch:FC<IProps> = ({handleViewSwitch}) => {
    const [active, setActive] = useState(ViewSwitchEnum.MOSAIC)
    const handleOnClick = (type:ViewSwitchEnum) => {
        setActive(type);
        handleViewSwitch(type);
    }

    const switches:ISwitch[] = [
        {
            text: 'Mosaic',
            type: ViewSwitchEnum.MOSAIC,
            icon: MosaicIcon,
            iconAlt: 'mosaic icon'
        },
        {
            text: 'List',
            type: ViewSwitchEnum.LIST,
            icon: ListIcon,
            iconAlt: 'list icon'
        }
    ] 
    return (
        <ViewSwitchStyled>
            {
                switches.map((el, i) => {
                    return <ButtonStyled key={i} width="auto" height="auto" 
                            onClick={(e) => handleOnClick(el.type)} disabled={active === el.type} >
                        <Figure width="20px" height="20px">
                            <Icon src={el.icon} alt={el.iconAlt} />
                        </Figure>
                        {el.type === active && <TextStyled>{el.text}</TextStyled>}
                    </ButtonStyled>
                })
            }
        </ViewSwitchStyled>
    )
}

export default ViewSwitch;
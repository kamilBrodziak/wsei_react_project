import { FC } from 'react';
import styled, { css } from 'styled-components';
import Colors from '../../../../../styledHelpers/Colors';
import { PanelCss } from '../../../../../styledHelpers/Common';
import Figure from '../../../../Common/Icons/Figure';
import Icon from '../../../../Common/Icons/Icon';
import { ViewSwitchEnum } from '../Nav/UpperNav/Partials/ViewSwitch';

const TileStyled = styled.section`
    display: flex;
    align-items: center;
    ${PanelCss}
    padding: 5px;
`

const FigureStyled = styled(Figure)`
    margin: 0 10px 0 0;
    img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
    }
`

const DescriptionStyled = styled.div<{mode:ViewSwitchEnum}>`
    flex: 1;
    ${props => props.mode === ViewSwitchEnum.LIST && css`
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    `}
`

const TitleStyled = styled.h2<{mode:ViewSwitchEnum}>`
    color: ${Colors.linkDark};
    margin: ${props => props.mode === ViewSwitchEnum.MOSAIC ? '0 0 8px 0' : '0 8px 0 0'};
`

const MetaStyled = styled.p`
    color: ${Colors.gray};
`

interface IProps {
    icon: string;
    iconAlt: string;
    title: string;
    meta: string;
    mode: ViewSwitchEnum;
}

const Tile:FC<IProps> = ({icon, iconAlt, title, meta, mode}) => {
    return (
        <TileStyled>
            <FigureStyled width={mode === ViewSwitchEnum.MOSAIC ? "80px" : "40px"} 
                height={mode === ViewSwitchEnum.MOSAIC ? "80px" : "40px"}>
                <Icon src={icon} alt={iconAlt} />
            </FigureStyled>
            <DescriptionStyled mode={mode}>
                <TitleStyled mode={mode}>
                    {title}
                </TitleStyled>
                <MetaStyled>
                    {meta}
                </MetaStyled>
            </DescriptionStyled>
        </TileStyled>
    )
}

export default Tile;
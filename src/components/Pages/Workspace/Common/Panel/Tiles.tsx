import { FC, useState } from 'react';
import styled from 'styled-components';
import Breakpoints from '../../../../../styledHelpers/Breakpoints';
import Colors from '../../../../../styledHelpers/Colors';
import Button from '../../../../Common/Buttons/Button';
import CorporateIcon from '../../../../../assets/icons/entities.svg';
import OwnershipIcon from '../../../../../assets/icons/diagram.svg';
import CalendarIcon from '../../../../../assets/icons/calendar.svg';
import Figure from '../../../../Common/Icons/Figure';
import Icon from '../../../../Common/Icons/Icon';
import { PanelCss } from '../../../../../styledHelpers/Common';

const TilesStyled = styled.section`
`

const TilesContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    @media ${Breakpoints.tablet} {
        flex-direction: row;
        &:not(:last-child) {
            padding: 0 12px 0 0;
        }
    }
`

interface TileProps {
    src: string;
}

const TileStyled = styled.div<TileProps>`
    flex:1;
    padding: 20px 10px;
    background: linear-gradient(to bottom, rgba(255,255,255,0.96),rgba(255,255,255,0.96)), 
        url(${props => props.src}) no-repeat top right / auto 100%, white;
    background-origin: content-box;
    ${PanelCss}
    @media ${Breakpoints.tablet} {
        &:not(:last-child) {
            margin: 0 12px 0 0;
        }
    }
`

const HeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0 20px 0;
`

const TitleStyled = styled.h2`
    color: ${Colors.gray};
    font-size: 1.6rem;
`

const TileTitleStyled = styled.h3`
    padding: 6px 0;
`

const Boldstyled = styled.span`
    font-weight: bold;
`

const BodyStyled = styled.p`
`

const HideButtonStyled = styled.button`
    color: ${Colors.gray};
    background: none;
    padding: 0;
    outline: 0;
    border: 0;
    cursor: pointer;
`

interface IProps {
    className?: string;
}

const Tiles:FC<IProps> = ({className}) => {
    const [hide, setHide] = useState(false);
    return ( !hide ?
        <TilesStyled className={className}>
            <HeaderStyled>
                <TitleStyled>Start working on corporate matters</TitleStyled>
                <HideButtonStyled onClick={() =>setHide(true)}>Hide</HideButtonStyled>
            </HeaderStyled>
            <TilesContainerStyled>
                <TileStyled src={CorporateIcon}>
                    <Figure width="50px" height="50px">
                        <Icon src={CorporateIcon} alt={"Icon"} />
                    </Figure>
                    <TileTitleStyled>Explore your <Boldstyled>entites</Boldstyled></TileTitleStyled>
                    <BodyStyled>Take a few minutes to llok at the most important elements and specificities of your entities.</BodyStyled>
                </TileStyled>
                <TileStyled src={OwnershipIcon}>
                    <Figure width="50px" height="50px">
                        <Icon src={OwnershipIcon} alt={"Icon"} />
                    </Figure>
                    <TileTitleStyled>Structure the <Boldstyled>ownership</Boldstyled></TileTitleStyled>
                    <BodyStyled>Get a clar view of the ownership by looking at the relations between individuals and entities.</BodyStyled>
                </TileStyled>
                <TileStyled src={CalendarIcon}>
                    <Figure width="50px" height="50px">
                        <Icon src={CalendarIcon} alt={"Icon"} />
                    </Figure>
                    <TileTitleStyled>Define the <Boldstyled>calendar</Boldstyled></TileTitleStyled>
                    <BodyStyled>Prepare future events by creating detailed plans around the life of your entity.</BodyStyled>
                </TileStyled>
            </TilesContainerStyled>
        </TilesStyled> : null
    )
}

export default Tiles;
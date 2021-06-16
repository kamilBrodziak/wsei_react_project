import { FC } from 'react';
import styled from 'styled-components';
import { IWorkspaceRoute } from '../../../../../routes/WorkspacesRoutes';
import Colors from '../../../../../styledHelpers/Colors';
import { PanelCss } from '../../../../../styledHelpers/Common';
import Figure from '../../../../Common/Icons/Figure';
import Icon from '../../../../Common/Icons/Icon';
import Link from '../../../../Common/Links/Link';
import PeopleIcon from '../../../../../assets/icons/people.svg';
import IconWithText from '../../../../Common/Icons/IconWithText';
const imageHeight = 90;

const TileStyled = styled.div`
    flex: 0 0 280px;
    width: 280px;
    /* min-width: 280px; */
    background: linear-gradient(to bottom, transparent ${imageHeight}px, white ${imageHeight}px);
    overflow: hidden;
    ${PanelCss}
    padding: ${imageHeight - 20}px 8px 8px 8px;
    position: relative;
    &:not(:last-child) {
        margin: 0 20px 0 0;
    }
`

const ImageStyled = styled(Icon)`
    height: ${imageHeight}px;
    width: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: top;
    z-index: -1;
`

const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
`

const TitleLink = styled(Link)`
    font-size: 2rem;
    font-weight: bold;
    && {
        color: ${Colors.darkGray};
    }
`
const FigureStyled = styled(Figure)`
    background: white;
    padding: 20px;
    margin: 0 10px 0 0;
    ${PanelCss}
`

const TextIconContainer = styled.div`
    display: flex;
    padding: 7px 0;
`

const TextIcon = styled(IconWithText)`
    padding: 4px;
    && {
        color: ${Colors.darkGray};
    }
`

const LastUpdateStyled = styled.span`
    color: ${Colors.gray};
    font-size: 1.3rem;
`

interface IProps {
    route: IWorkspaceRoute;
}

const Tile:FC<IProps> = ({route}) => {
    return (
        <TileStyled>
            <ImageStyled src={route.image} alt={route.imageAlt} />
            <HeaderStyled>
                <FigureStyled width="80px" height="80px">
                    <Icon src={route.icon} alt={route.iconAlt} />
                </FigureStyled>
                <TitleLink to={route.path}>{route.name}</TitleLink>
            </HeaderStyled>
            <TextIconContainer>
                <TextIcon icon={route.icon} iconAlt={route.iconAlt} text={route.group}/>
                <TextIcon icon={PeopleIcon} iconAlt={"People icon"} text={"25 users"}/>
            </TextIconContainer>
            <LastUpdateStyled>
                Last update 2 days ago
            </LastUpdateStyled>
        </TileStyled>
    )
}

export default Tile;
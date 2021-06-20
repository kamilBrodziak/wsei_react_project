import { FC } from 'react';
import styled from 'styled-components';
import { IWorkspaceRoute } from '../../../../../routes/WorkspacesRoutes';
import Header from './Header';
import ListWidget from './ListWidget/ListWidget';
import Tiles from './Tiles';

const PanelStyled = styled.article`
`

const HeaderStyled = styled(Header)`

`

const TilesStyled = styled(Tiles)`
    && {
        padding: 40px 0;
    }
`

interface IProps {
    route: IWorkspaceRoute
}

const Panel:FC<IProps> = ({route}) => {
    return (
        <PanelStyled>
            <HeaderStyled title={route.name} icon={route.icon} iconAlt={route.iconAlt}
                image={route.image} imageAlt={route.imageAlt} />
            <TilesStyled />
            <ListWidget />
        </PanelStyled>
    )
}

export default Panel;
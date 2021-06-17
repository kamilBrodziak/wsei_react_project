import { FC } from 'react';
import styled from 'styled-components';
import WorkspacesRoutes from '../../../../routes/WorkspacesRoutes';
import Colors from '../../../../styledHelpers/Colors';
import Carousel from '../../../Common/Carousel/Carousel';
import Tile from './Tiles/Tile';

const WidgetStyled = styled.section`

`

const Title = styled.h2`
    font-size: 2.5rem;
    padding: 20px 0 15px 0;
    color: ${Colors.darkGray};
`

interface IProps {

}

const WorkspaceWidget:FC<IProps> = () => {
    const routes = WorkspacesRoutes;
    const content = routes.routes.map((route, i) => <Tile key={i} route={route}/>)
    return (
        <WidgetStyled>
            <Title>Workspaces</Title>
            <Carousel>
                {content}
            </Carousel>
        </WidgetStyled>
    )
}

export default WorkspaceWidget;
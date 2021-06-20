import { FC } from 'react';
import styled from 'styled-components';
import WorkspacesRoutes, { WorkspacesPaths } from '../../../../routes/WorkspacesRoutes';
import Panel from '../Common/Panel/Panel';

interface IProps {

}

const Corporate:FC<IProps> = () => {
    const route = WorkspacesRoutes.routes.find(route => route.path === WorkspacesPaths.CORPORATE);
    return (
        <Panel route={route} />
    )
}

export default Corporate;
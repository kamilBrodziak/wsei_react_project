import AccountRoutes from "./AccountRoutes";
import { IAppRoute, IAppRoutes } from "./IRoutes";
import PlatformRoutes, { PlatformPaths } from "./PlatformRoutes";
import WorkspacesRoutes, { WorkspacesPaths } from "./WorkspacesRoutes";
import Icon404 from '../assets/icons/error-404.svg';

const AppPaths = {
    platform: PlatformPaths,
    workspace: WorkspacesPaths,
}


const AppRoutes: IAppRoutes[] = [
    PlatformRoutes,
    WorkspacesRoutes
]

const Page404Route: IAppRoutes = {
    routes: [
        {
            name: '404',
            path: '/',
            icon: Icon404,
            shownInMenu: false
        }
    ]
}

const AllRoutes: IAppRoutes[] = [
    ...AppRoutes,
    AccountRoutes,
    Page404Route
]
export {AllRoutes, AppPaths};
export default AppRoutes;
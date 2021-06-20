import AccountRoutes from "./AccountRoutes";
import { IAppRoutes } from "./IRoutes";
import PlatformRoutes, { PlatformPaths } from "./PlatformRoutes";
import WorkspacesRoutes, { WorkspacesPaths } from "./WorkspacesRoutes";

const AppPaths = {
    platform: PlatformPaths,
    workspace: WorkspacesPaths,
}


const AppRoutes: IAppRoutes[] = [
    PlatformRoutes,
    WorkspacesRoutes
]

const AllRoutes: IAppRoutes[] = [
    ...AppRoutes,
    AccountRoutes
]
export {AllRoutes, AppPaths};
export default AppRoutes;
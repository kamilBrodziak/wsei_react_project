import AccountRoutes from "./AccountRoutes";
import { IAppRoutes } from "./IRoutes";
import PlatformRoutes from "./PlatformRoutes";
import WorkspacesRoutes from "./WorkspacesRoutes";

const AppRoutes: IAppRoutes[] = [
    PlatformRoutes,
    WorkspacesRoutes
]

const AllRoutes: IAppRoutes[] = [
    ...AppRoutes,
    AccountRoutes
]
export {AllRoutes};
export default AppRoutes;
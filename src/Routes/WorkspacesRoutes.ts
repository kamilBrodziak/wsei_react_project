import { IAppRoutes } from "./IRoutes";
import HomeIcon from "../assets/icons/house.svg";
import PublicationsIcon from "../assets/icons/publications.svg";
import EntitiesIcon from "../assets/icons/entities.svg";
import PeopleIcon from "../assets/icons/people.svg";
import AdministrationIcon from "../assets/icons/administration.svg";

export enum WorkspacesPaths {
    CLIENTCONTRACT = '/client_contract',
    SUPPLIERCONTRACT = '/supplier_contract',
    CORPORATE = '/corporate',
    GROUPNORMS = '/group_norms',
    REALESTATECONTRACTS = '/real_estate_contracts'
}

const WorkspacesRoutes:IAppRoutes = {
    label: "Workspaces",
    routes: [
        {
            name: 'Client contract',
            path: WorkspacesPaths.CLIENTCONTRACT,
            icon: HomeIcon,
            exact: true
        },
        {
            name: 'Supplier contract',
            path: WorkspacesPaths.SUPPLIERCONTRACT,
            icon: PublicationsIcon
        },
        {
            name: 'Corporate',
            path: WorkspacesPaths.CORPORATE,
            icon: PeopleIcon
        },
        {
            name: 'Group Norms',
            path: WorkspacesPaths.GROUPNORMS,
            icon: EntitiesIcon
        },
        {
            name: 'Real estate contracts',
            path: WorkspacesPaths.REALESTATECONTRACTS,
            icon: AdministrationIcon
        }
    ]
}
export default WorkspacesRoutes;
import { IAppRoute, IAppRoutes } from "./IRoutes";
import HomeIcon from "../assets/icons/house.svg";
import PublicationsIcon from "../assets/icons/publications.svg";
import EntitiesIcon from "../assets/icons/entities.svg";
import PeopleIcon from "../assets/icons/people.svg";
import AdministrationIcon from "../assets/icons/administration.svg";
import CorporateIcon from '../assets/icons/entities.svg'
import ContractImage from '../assets/images/contract.jpg';
import NormsImage from '../assets/images/norms.jpg';
import CorporateImage from '../assets/images/corporate.jpg';

export enum WorkspacesPaths {
    CLIENTCONTRACT = '/client_contract',
    SUPPLIERCONTRACT = '/supplier_contract',
    CORPORATE = '/corporate',
    GROUPNORMS = '/group_norms',
    REALESTATECONTRACTS = '/real_estate_contracts'
}

export interface IWorkspaceRoute extends IAppRoute {
    group: string;
    image: string;
    imageAlt?: string;
}

interface IWorkspaceRoutes extends IAppRoutes {
    routes: IWorkspaceRoute[]
}

const WorkspacesRoutes:IWorkspaceRoutes = {
    label: "Workspaces",
    routes: [
        {
            name: 'Client contract',
            path: WorkspacesPaths.CLIENTCONTRACT,
            icon: PublicationsIcon,
            exact: true,
            shownInMenu: true,
            group: "Contract",
            image: ContractImage
        },
        {
            name: 'Supplier contract',
            path: WorkspacesPaths.SUPPLIERCONTRACT,
            icon: PublicationsIcon,
            shownInMenu: true,
            group: "Contract",
            image: ContractImage
        },
        {
            name: 'Corporate',
            path: WorkspacesPaths.CORPORATE,
            icon: CorporateIcon,
            shownInMenu: true,
            group: "Corporate",
            image: CorporateImage
        },
        {
            name: 'Group Norms',
            path: WorkspacesPaths.GROUPNORMS,
            icon: EntitiesIcon,
            shownInMenu: true,
            group: "Norms",
            image: NormsImage
        },
        {
            name: 'Real estate contracts',
            path: WorkspacesPaths.REALESTATECONTRACTS,
            icon: PublicationsIcon,
            shownInMenu: true,
            group: "Contract",
            image: ContractImage
        }
    ]
}
export default WorkspacesRoutes;
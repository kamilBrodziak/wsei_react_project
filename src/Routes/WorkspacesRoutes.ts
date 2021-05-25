import { IAppRoutes } from "./IRoutes";
import HomeIcon from "../assets/icons/house.svg";
import PublicationsIcon from "../assets/icons/publications.svg";
import EntitiesIcon from "../assets/icons/entities.svg";
import PeopleIcon from "../assets/icons/people.svg";
import AdministrationIcon from "../assets/icons/administration.svg";

const WorkspacesRoutes:IAppRoutes = {
    label: "Workspaces",
    routes: [
        {
            name: 'Client contract',
            path: '/client_contract',
            icon: HomeIcon,
            exact: true
        },
        {
            name: 'Supplier contract',
            path: '/supplier_contract',
            icon: PublicationsIcon
        },
        {
            name: 'Corporate',
            path: '/corporate',
            icon: PeopleIcon
        },
        {
            name: 'Group Norms',
            path: '/group_norms',
            icon: EntitiesIcon
        },
        {
            name: 'Real estate contracts',
            path: '/real_estate_contracts',
            icon: AdministrationIcon
        }
    ]
}
export default WorkspacesRoutes;
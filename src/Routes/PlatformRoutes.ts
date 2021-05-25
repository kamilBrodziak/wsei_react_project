import { IAppRoute, IAppRoutes } from "./IRoutes";
import HomeIcon from "../assets/icons/house.svg";
import PublicationsIcon from "../assets/icons/publications.svg";
import EntitiesIcon from "../assets/icons/entities.svg";
import PeopleIcon from "../assets/icons/people.svg";
import AdministrationIcon from "../assets/icons/administration.svg";

const HomeRoute: IAppRoute = {
    name: 'Home',
    path: '/',
    icon: HomeIcon,
    exact: true
}

export {HomeRoute};

const PlatformRoutes:IAppRoutes = {
    label: "Platform",
    routes: [
        HomeRoute,
        {
            name: 'Publications',
            path: '/publications',
            icon: PublicationsIcon
        },
        {
            name: 'People',
            path: '/people',
            icon: PeopleIcon
        },
        {
            name: 'Entities',
            path: '/entities',
            icon: EntitiesIcon
        },
        {
            name: 'Administration',
            path: '/administration',
            icon: AdministrationIcon
        }
    ]
}

export default PlatformRoutes;
import { IAppRoute, IAppRoutes } from "./IRoutes";
import HomeIcon from "../assets/icons/house.svg";
import PublicationsIcon from "../assets/icons/publications.svg";
import EntitiesIcon from "../assets/icons/entities.svg";
import PeopleIcon from "../assets/icons/people.svg";
import AdministrationIcon from "../assets/icons/administration.svg";

export enum PlatformPaths {
    PUBLICATIONS = '/publications',
    PEOPLE = '/people',
    ENTITIES = '/entities',
    ADMINISTRATION = '/administration',
}

const HomeRoute: IAppRoute = {
    name: 'Home',
    path: '/',
    icon: HomeIcon,
    exact: true,
    shownInMenu: true
}

export {HomeRoute};

const PlatformRoutes:IAppRoutes = {
    label: "Platform",
    routes: [
        HomeRoute,
        {
            name: 'Publication',
            path: `${PlatformPaths.PUBLICATIONS}/:id`,
            icon: PublicationsIcon,
            shownInMenu: false
        },
        {
            name: 'Publications',
            path: `${PlatformPaths.PUBLICATIONS}?:page`,
            icon: PublicationsIcon,
            shownInMenu: false,
        },
        {
            name: 'Publications',
            path: `${PlatformPaths.PUBLICATIONS}`,
            icon: PublicationsIcon,
            shownInMenu: true,
        },
        
        {
            name: 'People',
            path: PlatformPaths.PEOPLE,
            icon: PeopleIcon,
            shownInMenu: true,
        },
        {
            name: 'Entities',
            path: PlatformPaths.ENTITIES,
            icon: EntitiesIcon,
            shownInMenu: true,
        },
        {
            name: 'Administration',
            path: PlatformPaths.ADMINISTRATION,
            icon: AdministrationIcon,
            shownInMenu: true,
        }
    ]
}

export default PlatformRoutes;
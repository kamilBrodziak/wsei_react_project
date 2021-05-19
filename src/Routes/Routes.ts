import HomeIcon from "../assets/icons/house.svg";
import PublicationsIcon from "../assets/icons/publications.svg";
import EntitiesIcon from "../assets/icons/entities.svg";
import PeopleIcon from "../assets/icons/people.svg";
import AdministrationIcon from "../assets/icons/administration.svg";
import PrivacyIcon from "../assets/icons/privacy.svg";
import SettingsIcon from "../assets/icons/settings.svg";
import LogoutIcon from "../assets/icons/logout.svg";

export interface IAppRoute {
    name: string,
    path: string,
    componentName?: string,
    icon?: string,
    iconAlt?: string;
    exact?: boolean;
}

export interface IAppRoutes {
    label?: string,
    routes: IAppRoute[]
}

const AppRoutes: IAppRoutes[] = [
    {
        label: "Platform",
        routes: [
            {
                name: 'Home',
                path: '/',
                icon: HomeIcon,
                exact: true
            },
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
]

const AccountRoutes: IAppRoutes = {
    label: "Account",
    routes: [
        {
            name: 'Profile',
            path: '/profile',
            icon: HomeIcon
        },
        {
            name: 'Privacy',
            path: '/privacy',
            icon: PrivacyIcon
        },
        {
            name: 'Settings',
            path: '/settings',
            icon: SettingsIcon
        },
        {
            name: "Logout",
            path: '/logout',
            icon: LogoutIcon
        }
    ]
}

const HomeRoute: IAppRoute = {
    name: 'Home',
    path: '/',
    icon: HomeIcon,
    exact: true
}

export {AccountRoutes, HomeRoute};
export default AppRoutes;
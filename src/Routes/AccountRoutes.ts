import PrivacyIcon from "../assets/icons/privacy.svg";
import SettingsIcon from "../assets/icons/settings.svg";
import LogoutIcon from "../assets/icons/logout.svg";
import { IAppRoutes } from "./IRoutes";
import HomeIcon from "../assets/icons/house.svg";

export enum AccountPaths {
    PROFILE = '/profile',
    PRIVACY = '/privacy',
    SETTINGS = '/settings',
    LOGOUT = '/logout',
    LOGIN = '/login',
    REGISTER = '/register'
}

const AccountRoutes: IAppRoutes = {
    label: "Account",
    routes: [
        {
            name: 'Profile',
            path: AccountPaths.PROFILE,
            exact: true,
            icon: HomeIcon,
            shownInMenu: true,
        },
        {
            name: 'Privacy',
            path: AccountPaths.PRIVACY,
            icon: PrivacyIcon,
            shownInMenu: true,
        },
        {
            name: 'Settings',
            path: AccountPaths.SETTINGS,
            icon: SettingsIcon,
            shownInMenu: true
        },
        {
            name: "Logout",
            path: AccountPaths.LOGOUT,
            icon: LogoutIcon,
            shownInMenu: true
        },
        {
            name: "Login",
            path: AccountPaths.LOGIN,
            icon: LogoutIcon,
            shownInMenu: true,
        },
        {
            name: "Register",
            path: AccountPaths.REGISTER,
            icon: LogoutIcon,
            shownInMenu: true
        }
        

    ]
}

export default AccountRoutes;
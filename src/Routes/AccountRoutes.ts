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
            icon: HomeIcon
        },
        {
            name: 'Privacy',
            path: AccountPaths.PRIVACY,
            icon: PrivacyIcon
        },
        {
            name: 'Settings',
            path: AccountPaths.SETTINGS,
            icon: SettingsIcon
        },
        {
            name: "Logout",
            path: AccountPaths.LOGOUT,
            icon: LogoutIcon
        },
        {
            name: "Login",
            path: AccountPaths.LOGIN,
            icon: LogoutIcon
        },
        {
            name: "Register",
            path: AccountPaths.REGISTER,
            icon: LogoutIcon
        }
        

    ]
}

export default AccountRoutes;
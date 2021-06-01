import PrivacyIcon from "../assets/icons/privacy.svg";
import SettingsIcon from "../assets/icons/settings.svg";
import LogoutIcon from "../assets/icons/logout.svg";
import { IAppRoutes } from "./IRoutes";
import HomeIcon from "../assets/icons/house.svg";

const AccountRoutes: IAppRoutes = {
    label: "Account",
    routes: [
        {
            name: 'Profile',
            path: '/profile',
            exact: true,
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
        },
        {
            name: "Login",
            path: '/login',
            icon: LogoutIcon
        },
        {
            name: "Register",
            path: '/register',
            icon: LogoutIcon
        }
        

    ]
}

export default AccountRoutes;
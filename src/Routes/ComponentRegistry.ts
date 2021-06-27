import Home from "../components/Pages/Platform/Home/Home";
import Publications from "../components/Pages/Platform/Publications/Publications";
import People from "../components/Pages/Platform/People/People";
import Entities from "../components/Pages/Platform/Entities/Entities";
import Administration from "../components/Pages/Platform/Administration/Administration";
import Profile from "../components/Pages/Account/Profile/Profile";
import Privacy from "../components/Pages/Account/Privacy/Privacy";
import Settings from "../components/Pages/Account/Settings/Settings";
import Logout from "../components/Pages/Account/Logout/Logout";
import React, { FC } from "react";
import Login from "../components/Pages/Account/Login/Login";
import Register from "../components/Pages/Account/Register/Register";
import Publication from "../components/Pages/Platform/Publications/Publication";
import ClientContracts from "../components/Pages/Workspace/ClientContracts/ClientContracts";
import SupplierContracts from "../components/Pages/Workspace/SupplierContracts/SupplierContracts";
import Corporate from "../components/Pages/Workspace/Corporates/Corporates";
import GroupNorms from "../components/Pages/Workspace/GroupNorms/GroupNorms";
import RealEstateContracts from "../components/Pages/Workspace/RealEstateContracts/RealEstateContracts";
import Page404 from "../components/Pages/404";

const ComponentRegistry:{[key: string]: typeof React.Component | FC} = {
    "Home": Home,
    "Publications": Publications,
    "Publication": Publication,
    "People": People,
    "Entities": Entities,
    "Administration": Administration,
    "Profile": Profile,
    "Privacy": Privacy,
    "Settings": Settings,
    'Client contract':ClientContracts,
    'Supplier contract':SupplierContracts,
    'Corporate':Corporate,
    'Group Norms':GroupNorms,
    'Real estate contracts':RealEstateContracts,
    "Logout": Logout,
    "Login": Login,
    "Register": Register,
    '404': Page404
}

export default ComponentRegistry;
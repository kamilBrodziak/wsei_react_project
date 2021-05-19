import Home from "../components/Pages/Platform/Home/Home";
import Publications from "../components/Pages/Platform/Publications/Publications";
import People from "../components/Pages/Platform/People/People";
import Entities from "../components/Pages/Entities/Entities";
import Administration from "../components/Pages/Administration/Administration";
import Profile from "../components/Pages/Account/Profile/Profile";
import Privacy from "../components/Pages/Account/Privacy/Privacy";
import Settings from "../components/Pages/Account/Settings/Settings";
import Logout from "../components/Pages/Account/Logout/Logout";
import React, { FC } from "react";

const ComponentRegistry:{[key: string]: typeof React.Component | FC} = {
    "Home": Home,
    "Publications": Publications,
    "People": People,
    "Entities": Entities,
    "Administration": Administration,
    "Profile": Profile,
    "Privacy": Privacy,
    "Settings": Settings,
    "Logout": Logout
}

export default ComponentRegistry;
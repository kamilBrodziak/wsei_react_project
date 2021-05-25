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
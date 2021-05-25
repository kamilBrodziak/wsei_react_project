import React, { FC, useState } from "react";
import styled from "styled-components";
import { FlexCentered } from "../../../../styledHelpers/Positioning";
import Figure from "../../../Common/Icons/Figure";
import Icon from "../../../Common/Icons/Icon";
import arrowDownSrc from '../../../../assets/icons/arrow-down.svg';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AllRoutes } from "../../../../routes/Routes";
import { IAppRoute } from "../../../../routes/IRoutes";
import { HomeRoute } from "../../../../Routes/PlatformRoutes";
const iconWidth = 25;
const arrowWidth = 9;

const UpperNavStyled = styled.div`
    ${FlexCentered}
    flex-direction: row;
    width: 100%;
    height: 100%;
    cursor: pointer;
    padding: 8px 0;
`;



const ActiveText = styled.span`
    display: block;
    text-align: left;
    flex: 1;
    font-size: 1.8rem;
    padding: 0 0 0 10px;
`

interface IProps extends RouteComponentProps{
    changeOpen: any;
}

const UpperNav:FC<IProps> = ({changeOpen, history}) => {
    const getRoute = (pathName:string) => [].concat(...AllRoutes.map(routes => routes.routes)).find((route:IAppRoute) => 
        (route.exact && pathName === route.path) || (!route.exact && pathName.startsWith(route.path)));
    const startingRoute = getRoute(history.location.pathname);
    const [state, setstate] = useState({
        text: startingRoute.name,
        icon: startingRoute.icon
    });
    history.listen((location, action) => {
        const route:IAppRoute = getRoute(location.pathname);
        setstate({
            text: route.name,
            icon: route.icon
        });
    })

    return (
        <UpperNavStyled onClick={changeOpen}>
            <Figure width={`${iconWidth}px`} height="100%">
                <Icon src={state.icon} alt="Logo" />
            </Figure>
            <ActiveText>{state.text}</ActiveText>
            <Figure width={`${arrowWidth}px`} height="100%">
                <Icon src={arrowDownSrc} alt="arrow" />
            </Figure>
        </UpperNavStyled>
    )
}

export default withRouter(UpperNav);
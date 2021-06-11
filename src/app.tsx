import React, { Dispatch, FC } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import GlobalStyle from "./styledHelpers/GlobalStyle";
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/Pages/Platform/Home/Home";
import AppRoutes, { AllRoutes } from "./routes/Routes";
import ComponentRegistry from "./routes/ComponentRegistry";
import AccountRoutes from "./routes/AccountRoutes";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Colors from "./styledHelpers/Colors";
import { AnyAction } from "redux";
import { loginUserAction} from "./actions/UserActions";
import { connect } from "react-redux";
import { IRootState } from "./reducers/rootReducer";
import Breakpoints from "./styledHelpers/Breakpoints";



const SiteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1296px;
    margin: 0 auto;
    height: auto;
`

const MainContainer = styled.section`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    @media ${Breakpoints.tablet} {
        flex-direction: row;
        padding: 20px 30px;
        align-items: flex-start;
    }
`;

const ContentContainer = styled.section`
    margin: 10px 20px;
    flex: 1;
    min-width: 0;
    @media ${Breakpoints.tablet} {
        margin: 0 40px;
    }
`;


const App:FC = (props) => {
    let key = 0;
    return (
        <BrowserRouter>
            <SiteContainer className="App">
                <GlobalStyle />
                <Header />
                <MainContainer>
                    <LeftPanel />
                    <ContentContainer>
                        {AllRoutes.map(({routes}) => {
                            return routes.map(({exact,name, path}) => {
                                return <Route key={key++} exact={exact} path={path} component={ComponentRegistry[name]} />
                            })
                        })}
                    </ContentContainer>
                </MainContainer>
            </SiteContainer>
        </BrowserRouter>
    )
}

export default App;
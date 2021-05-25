import React, { Dispatch, FC } from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import GlobalStyle from "./styledHelpers/GlobalStyle";
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/Pages/Platform/Home/Home";
import AppRoutes from "./routes/Routes";
import ComponentRegistry from "./routes/ComponentRegistry";
import AccountRoutes from "./routes/AccountRoutes";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Colors from "./styledHelpers/Colors";
import { AnyAction } from "redux";
import { loginUser, UserActionsEnum } from "./actions/UserActions";
import { connect } from "react-redux";
import { IRootState } from "./reducers/rootReducer";



const SiteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    height: auto;
`

const MainContainer = styled.section`
    display: flex;
    padding: 20px 30px;
`;

const ContentContainer = styled.section`
    margin: 0 40px;
`;


const App:FC = (props) => {
    return (
        <BrowserRouter>
            <SiteContainer className="App">
                <GlobalStyle />
                <Header />
                <MainContainer>
                    <LeftPanel />
                    <ContentContainer>
                        {AppRoutes.concat(AccountRoutes).map(({routes}) => {
                            return routes.map(({exact,name, path}) => {
                                return <Route exact={exact} path={path} component={ComponentRegistry[name]} />
                            })
                        })}
                    </ContentContainer>
                </MainContainer>
            </SiteContainer>
        </BrowserRouter>
    )
}

export default App;
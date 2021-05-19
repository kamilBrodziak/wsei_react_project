import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import GlobalStyle from "./styledHelpers/GlobalStyle";
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/Pages/Platform/Home/Home";
import AppRoutes, { AccountRoutes } from "./Routes/Routes";
import ComponentRegistry from "./Routes/ComponentRegistry";



const SiteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    height: auto;
`

const ContentContainer = styled.section`
    display: flex;
`;

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <SiteContainer className="App">
                    <GlobalStyle />
                    <Header />
                    <ContentContainer>
                        {AppRoutes.concat(AccountRoutes).map(({routes}) => {
                            return routes.map(({exact,name, path}) => {
                                return <Route exact={exact} path={path} component={ComponentRegistry[name]} />
                            })
                        })}
                    </ContentContainer>
                </SiteContainer>
            </BrowserRouter>
        )
    }
}


export default App;
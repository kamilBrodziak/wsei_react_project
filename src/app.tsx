import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import GlobalStyle from "./styledHelpers/GlobalStyle";

const SiteContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    height: auto;
`
class App extends React.Component {
    render() {
        return (
            <SiteContainer className="App">
                <GlobalStyle />
                <Header />
            </SiteContainer>
        )
    }
}


export default App;
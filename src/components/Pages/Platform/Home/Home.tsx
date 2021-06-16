import React, { FC } from 'react'
import styled from 'styled-components';
import WorkspaceWidget from '../../Workspace/Widget/WorkspaceWidget';
import Widget from '../Publications/Widget/Widget';

const HomeStyled = styled.section`
    width: 100%;
    & > * {
        width: 100%;
    }
`;

class Home extends React.Component {
    render() {
        return (
        <HomeStyled>
            <Widget />
            <WorkspaceWidget />
        </HomeStyled>
        )
    }
}

export default Home;
import React, { FC } from 'react'
import styled from 'styled-components';
import Widget from '../Publications/Widget/Widget';

const HomeStyled = styled.section`

`;

class Home extends React.Component {
    render() {
        return (
        <HomeStyled>
            <Widget />
            Home
        </HomeStyled>
        )
    }
}

export default Home;
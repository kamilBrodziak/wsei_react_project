import React, { FC } from 'react'
import { RouteComponentProps, RouteProps, RouterProps } from 'react-router';
import styled from 'styled-components';

const LogoutStyled = styled.section`

`;




class Logout extends React.Component<RouteComponentProps> {
    render() {
        console.log(this.props)
        this.props.history.push('/');
        return (
            <LogoutStyled>
                Logout
            </LogoutStyled>
        )
    }
}

export default Logout;
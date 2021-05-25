import React, { FC } from 'react'
import { RouteComponentProps, RouteProps, RouterProps } from 'react-router';
import styled from 'styled-components';

const LoginStyled = styled.section`

`;




class Login extends React.Component<RouteComponentProps> {
    render() {
        console.log(this.props)
        this.props.history.push('/');
        return (
            <LoginStyled>
                Login
            </LoginStyled>
        )
    }
}

export default Login;
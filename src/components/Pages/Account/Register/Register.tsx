import React, { FC } from 'react'
import { RouteComponentProps, RouteProps, RouterProps } from 'react-router';
import styled from 'styled-components';

const RegisterStyled = styled.section`

`;




class Register extends React.Component<RouteComponentProps> {
    render() {
        console.log(this.props)
        this.props.history.push('/');
        return (
            <RegisterStyled>
                Register
            </RegisterStyled>
        )
    }
}

export default Register;
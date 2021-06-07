import React, { FC } from 'react'
import styled from 'styled-components';
import Header from '../../../../Common/Header';
import Label from '../../../../Common/Label';

const ContainerStyled = styled.div`
    
`

const SpanStyled = styled.span`

`

interface IProps {

}

const ServicesAndProjects:FC<IProps> = () => {
    return (
        <ContainerStyled>
            <Header>Services & projects</Header>
            <SpanStyled>Corporate M&A and international acquisitions</SpanStyled>
        </ContainerStyled>
    )
}


export default ServicesAndProjects;
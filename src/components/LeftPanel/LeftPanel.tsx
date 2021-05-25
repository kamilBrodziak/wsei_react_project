import React, { FC } from 'react'
import styled from 'styled-components';
import Account from './Account/Account';
import Menu from './Menu/Menu';

const LeftPanelStyled = styled.section`
    width: 300px;    
`;



const LeftPanel:FC = () => {
    return (
        <LeftPanelStyled>
            <Account />
            <Menu />
        </LeftPanelStyled>
    );
}


export default LeftPanel;

import { FC } from 'react';
import styled from 'styled-components';
import Title from './Partials/Title';
import ViewSwitch, { ViewSwitchEnum } from './Partials/ViewSwitch';

const UpperNavStyled = styled.div`
    display: flex;
    justify-content: space-between;
`

interface IProps {
    handleViewSwitch: (type:ViewSwitchEnum) => void;

}

const UpperNav:FC<IProps> = ({handleViewSwitch}) => {
    return (
        <UpperNavStyled>
            <Title />
            <ViewSwitch handleViewSwitch={handleViewSwitch} />
        </UpperNavStyled>
    )
}

export default UpperNav;
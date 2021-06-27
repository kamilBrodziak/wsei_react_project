import { FC } from 'react';
import styled from 'styled-components';

const Page404Styled = styled.section`
    font-size: 2rem;
    padding: 40px;
`

interface IProps {}

const Page404:FC<IProps> = () => {
    return (
        <Page404Styled>
            There is no such page.
        </Page404Styled>
    )
}

export default Page404;
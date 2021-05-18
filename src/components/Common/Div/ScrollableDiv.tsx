import React from 'react'
import styled from 'styled-components';

const ScrollableDivStyled = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
`;


class ScrollableDiv extends React.Component {
    render() {
        return (
            <ScrollableDivStyled>
                {this.props.children}
            </ScrollableDivStyled>
        )
    }
}

export default ScrollableDiv;
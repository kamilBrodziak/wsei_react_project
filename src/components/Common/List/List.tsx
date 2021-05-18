import React from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components';

const ListStyled = styled.ul<IProps>`
    ${({css}) => css}
`

const LabelStyled = styled.span<IProps>`
    display: block;
    ${({labelCss}) => labelCss}
`

interface IProps {
    label?: string;
    scrollable?: boolean;
    css?: FlattenSimpleInterpolation;
    labelCss?: FlattenSimpleInterpolation;
}

class List extends React.Component<IProps> {
    render() {
        const {label, children, css, labelCss} = this.props;
        return (
            <>
                {label !== undefined && <LabelStyled labelCss={labelCss}>{label}</LabelStyled>}
                <ListStyled css={css}>
                    {children}
                </ListStyled>
            </>
        );
    }
}

export default List;
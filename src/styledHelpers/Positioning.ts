import {css} from 'styled-components';

const Flex = css`
    display: flex;
`;

export const FlexCentered = css`
    ${Flex}
    justify-content: center;
    align-items: center;
`;






const FlexJustifyStart = css`
    justify-content: flex-start;
`

const FlexJustifyEnd = css`
    justify-content: flex-end;
`

const FlexJustifyCenter = css`
    justify-content: center;
`

const FlexAlignStart = css`
    align-items: flex-start;
`

const FlexAlignEnd = css`
    align-items: flex-end;
`

const FlexAlignCenter = css`
    align-items: center;
`

export const FlexStartCenter = css`
    ${Flex}
    ${FlexJustifyStart}
    ${FlexAlignCenter}
`;

export const FlexCenterStart = css`
    ${Flex}
    ${FlexJustifyCenter}
    ${FlexAlignStart}
`;
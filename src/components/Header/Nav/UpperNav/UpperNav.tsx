import React, { FC } from "react";
import styled from "styled-components";
import { FlexCentered } from "../../../../styledHelpers/Positioning";
import Figure from "../../../Common/Icons/Figure";
import Icon from "../../../Common/Icons/Icon";
import arrowDownSrc from '../../../../assets/icons/arrow-down.svg';
const iconWidth = 25;
const arrowWidth = 9;

const UpperNavStyled = styled.div`
    ${FlexCentered}
    flex-direction: row;
    width: 100%;
    height: 100%;
    cursor: pointer;
    padding: 8px 0;
`;

const ActiveText = styled.span`
    display: block;
    text-align: left;
    flex: 1;
    font-size: 1.8rem;
    padding: 0 0 0 10px;
`

interface IProps {
    changeOpen: any;
    activeIcon: string;
    activeText: string;
}

const UpperNav:FC<IProps> = ({changeOpen, activeIcon, activeText}) => {
    return (
        <UpperNavStyled onClick={changeOpen}>
            <Figure width={`${iconWidth}px`} height="100%">
                <Icon src={activeIcon} alt="Logo" />
            </Figure>
            <ActiveText>{activeText}</ActiveText>
            <Figure width={`${arrowWidth}px`} height="100%">
                <Icon src={arrowDownSrc} alt="arrow" />
            </Figure>
        </UpperNavStyled>
    )
}

export default UpperNav;
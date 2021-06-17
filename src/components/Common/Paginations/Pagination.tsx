import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Colors from '../../../styledHelpers/Colors';
import { FlexCentered } from '../../../styledHelpers/Positioning';
import Button from '../Buttons/Button';
import {useMeasure} from 'react-use'

const PaginationStyled = styled.nav`
    margin: 10px 0;
`

const PaginationList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
    
`

const PaginationListItem = styled.li`
    width: 40px;
    height: 40px;
    margin: 0 0 0 10px;
    &:first-child {
        margin: 0;
    }
`

const PaginationButton = styled(Button)`
    border-radius: 5px;
    border: 0;
    background: ${Colors.lightGray};
    box-shadow: 0 0 10px 1px ${Colors.lightGray};
`

const CurrentItem = styled.span`
    ${FlexCentered};
    width: 100%;
    height: 100%;
    cursor: default;
    background: ${Colors.lightGray};
    transform: scale(1.2);
    border-radius: 5px;
    font-weight: bold;
    box-shadow: 0 0 10px 1px ${Colors.lightGray};

`

const Dots = styled.span`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
`

interface IProps {
    page: number;
    maxPage: number;
    onClick: (page:number) => void;
}

const Pagination:FC<IProps> = ({onClick, page, maxPage}) => {
    maxPage = maxPage - 1;
    const [ref, { width }] = useMeasure<HTMLElement>();
    const isDesktop = () => width > 560;
    const handleOnClick = (change: number) => {
        onClick(change);
    }
    const wrapWithListItem = (element:JSX.Element, key:number) => <PaginationListItem key={key}>{element}</PaginationListItem>
    const generateButtonItem = (change: number, text:string|number, key:number) => wrapWithListItem(
            <PaginationButton width="100%" height="100%" onClick={() => handleOnClick(change)}>
                {text}
            </PaginationButton>, key)
    const elements = [];
    let key = 0;
    if(page > 0) elements.push(generateButtonItem(page - 1, '<', key++))
    if(page > 2 && isDesktop()) elements.push(generateButtonItem(0, 1, key++))
    if(page > 3 && isDesktop()) elements.push(wrapWithListItem(<Dots>...</Dots>, key++))
    const min = () => isDesktop() ? (page > 2 ? page - 2 : 0) : ((page > 0) ? page - 1: 0);
    const max = () => isDesktop() ? (page + 2 <= maxPage ? page + 2: maxPage) : (page + 1 <= maxPage ? page + 1 : maxPage) 
    for (let i = min(); i <= max(); i++) {
        if(i !== page) {
            elements.push(generateButtonItem(i, i + 1, key++))
        } else {
            elements.push(wrapWithListItem(<CurrentItem>{i + 1}</CurrentItem>, key++))
        }
    }
    if(page < maxPage - 3 && isDesktop()) elements.push(wrapWithListItem(<Dots>...</Dots>, key++));
    if(page < maxPage - 2 && isDesktop()) elements.push(generateButtonItem(maxPage, maxPage + 1, key++));
    if(page < maxPage) elements.push(generateButtonItem(page + 1, '>', key++));
    return (
        <PaginationStyled ref={ref}>
            <PaginationList>
                {
                    elements
                }
            </PaginationList>
        </PaginationStyled>
    )
}

export default Pagination;
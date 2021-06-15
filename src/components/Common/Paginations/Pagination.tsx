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
    const [currPage, setCurrPage] = useState(page);
    const [ref, { width }] = useMeasure<HTMLElement>();
    const isDesktop = () => width > 560;
    const handleOnClick = (change: number) => {
        setCurrPage(change);
        onClick(change);
    }
    const wrapWithListItem = (element:JSX.Element, key:number) => <PaginationListItem key={key}>{element}</PaginationListItem>
    const generateButtonItem = (change: number, text:string|number, key:number) => wrapWithListItem(
            <PaginationButton width="100%" height="100%" onClick={() => handleOnClick(change)}>
                {text}
            </PaginationButton>, key)
    const elements = [];
    let key = 0;
    if(currPage > 0) elements.push(generateButtonItem(currPage - 1, '<', key++))
    if(currPage > 2 && isDesktop()) elements.push(generateButtonItem(0, 1, key++))
    if(currPage > 3 && isDesktop()) elements.push(wrapWithListItem(<Dots>...</Dots>, key++))
    const min = () => isDesktop() ? (currPage > 2 ? currPage - 2 : 0) : ((currPage > 0) ? currPage - 1: 0);
    const max = () => isDesktop() ? (currPage + 2 <= maxPage ? currPage + 2: maxPage) : (currPage + 1 <= maxPage ? currPage + 1 : maxPage) 
    for (let i = min(); i <= max(); i++) {
        if(i !== currPage) {
            elements.push(generateButtonItem(i, i + 1, key++))
        } else {
            elements.push(wrapWithListItem(<CurrentItem>{i + 1}</CurrentItem>, key++))
        }
    }
    if(currPage < maxPage - 3 && isDesktop()) elements.push(wrapWithListItem(<Dots>...</Dots>, key++));
    if(currPage < maxPage - 2 && isDesktop()) elements.push(generateButtonItem(maxPage, maxPage + 1, key++));
    if(currPage < maxPage) elements.push(generateButtonItem(currPage + 1, '>', key++));
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
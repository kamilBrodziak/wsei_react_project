import { FC, useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../../../Common/Buttons/Button';
import SortIcon from '../../../../../../../assets/icons/sort.svg';
import IconWithText from '../../../../../../Common/Icons/IconWithText';
import Colors from '../../../../../../../styledHelpers/Colors';

const SortStyled = styled(Button)<{active:boolean, activeSort:string}>`
    background: none;
    outline: 0;
    position: relative;
    border: 0;
    
    &::after {
        position: absolute;
        display: ${props => props.active ? 'inline-block' : 'none'};
        top: 0;
        transform: translateY(-50%);
        font-size: 0.8rem;
        padding: 2px;
        left: -2px;
        border-radius: 5px;
        background: #eaecf5;
        font-weight: bold;
        color: #2a3f9d;
        content: '${props => props.activeSort}';
    }
`

const TextIcon = styled(IconWithText)`
    color: ${Colors.gray};

`

export enum SortOptionsEnum {
    NONE = 'NONE',
    ASC = 'ASC',
    DESC = 'DESC'
}

interface IProps {
    onClick: (type:SortOptionsEnum) => void;
    className?: string;
}

const Sort:FC<IProps> = ({onClick, className}) => {
    const [sort, setSort] = useState(0);
    const sortOptions:SortOptionsEnum[] = [SortOptionsEnum.NONE, SortOptionsEnum.ASC, SortOptionsEnum.DESC];
    const handleClick = () => {
        const newSort = (sort+1)%sortOptions.length;
        onClick(sortOptions[newSort]);
        setSort(newSort);
    }
    return (
        <SortStyled className={className} width="auto" height="auto" onClick={handleClick}
            active={sortOptions[sort] !== SortOptionsEnum.NONE} activeSort={sortOptions[sort]} >
            <TextIcon text="Sort" icon={SortIcon} iconAlt={'sort icon'} />
        </SortStyled>
    )
}

export default Sort;

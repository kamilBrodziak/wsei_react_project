import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Colors from '../../../styledHelpers/Colors';
import Loading from '../Animations/Loading';
import Button from '../Buttons/Button';
import Pagination from '../Paginations/Pagination';
import Table from './Table';
import {useMeasure} from 'react-use'



const SeeMoreButton = styled(Button)`
    background: none;
    width: auto;
    padding: 5px;
    font-size: 1.7rem;
    margin: 0 10px 0 auto;
    color: ${Colors.linkCyan};
`

interface IProps {
    values: string[][];
    fetching: boolean;
    headers: string[];
    getValues: (page:number) => void;
    getStartingValues?: (page:number) => void;
    dataName?: string;
    maxPage: number;
}

const TablePaginated:FC<IProps> = ({values, headers, getValues, getStartingValues=getValues, fetching, dataName="data", maxPage}) => {
    const [ref, {height}] = useMeasure<HTMLTableElement>();
    const [paginationOpen, setPaginationOpen] = useState(false)
    const [proposalsFetchingStarted, setProposalsFetchingStarted] = useState(false);
    let content = <Loading width="100%" height={`${height}px`}/>
    useEffect(() => {
        setProposalsFetchingStarted(true);
        getStartingValues(0);        
    }, [])

    if(proposalsFetchingStarted && !fetching && values?.length === 0) {
        content = <span>No {dataName} found</span>
    } else if(!fetching) {
        content = <Table refCom={ref} headers={headers} values={values} />
    }
    return (
        <>
            {content}
            { maxPage != 0 && !paginationOpen && values?.length &&
                <SeeMoreButton width="auto" height="auto" onClick={() => {
                    setPaginationOpen(true);
                    getValues(0);
                }}>See more {dataName}</SeeMoreButton>
            }
            {
                maxPage != 0 && paginationOpen && 
                <Pagination maxPage={maxPage} page={0} onClick={(page:number) => getValues(page)} />
            }
        </>
    )
}

export default TablePaginated;
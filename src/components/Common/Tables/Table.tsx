import { FC } from 'react';
import styled from 'styled-components';
import Colors from '../../../styledHelpers/Colors';

const TableStyled = styled.table`
    width: 100%;
    table-layout: fixed;
    text-align: left;
`

const HeadStyled = styled.thead`
    th {
        padding: 10px 0;
        border-bottom: 1px solid ${Colors.lightGray}
    }
`
const ThStyled = styled.th`

`

const TrStyled = styled.tr`

`

const TdStyled = styled.td`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const BodyStyled = styled.tbody`
    td {
        padding: 5px 0;
    }
`

interface IProps {
    headers: string[],
    values: string[][],
    refCom: any;
}

const Table:FC<IProps> = ({refCom, headers, values}) => {
    return (
        <TableStyled ref={refCom}>
            <HeadStyled>
                <TrStyled>
                    {
                        headers.map((item, i) => <ThStyled key={i}>{item}</ThStyled>)
                    }
                </TrStyled>
            </HeadStyled>
            <BodyStyled>
                {
                    values.map((row, i) => <TrStyled key={i}>
                            {
                                row.map((value, j) => <TdStyled key={j}>{value}</TdStyled>)
                            }
                        </TrStyled>)
                }
            </BodyStyled>
        </TableStyled>
    )
}

export default Table;
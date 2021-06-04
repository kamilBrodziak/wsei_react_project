import React, { FC, useState } from 'react'
import styled from 'styled-components';
import Colors from '../../../../../../../../styledHelpers/Colors';
import { deepClone } from '../../../../../../../../utils/Utils';
import Button from '../../../../../../../Common/Buttons/Button';
import TextProperty from '../../../../Common/TextProperty';


const MainListItemStyled = styled.li`

`

const HeaderStyled = styled.span`
    display: block;
    width: 100%;
    font-size: 1.7rem;
    color: ${Colors.gray};
`

const ChildListStyled = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    margin: 8px 0 15px 0;
`

const ChildListItemStyled = styled.li`
    width: auto;
    padding: 5px;
    background: #d1effa;
    border-radius: 5px;
    margin: 0 10px 10px 0;
    
`

const InputStyled = styled(TextProperty)`
`

interface IProps {
    header: string;
    items: string[];
    editing: boolean;
    parentHandleOnChange: (items:string[]) => void;
}

const Item:FC<IProps> = ({header, items, editing, parentHandleOnChange}) => {
    const handleOnChange = (val:string, id:number) => {
        const newState = [...items];
        if(id < items.length) {
            newState[id] = val;
        } else {
            newState.push(val)
        }
        parentHandleOnChange(newState);
    }
    const addItem = () => {
        handleOnChange('', items.length);
    }
    return (
        <MainListItemStyled>
            <HeaderStyled>{header}</HeaderStyled>
            <ChildListStyled>
                {
                    items.map((item, i) => {
                        return (
                            <ChildListItemStyled key={i}>
                                <InputStyled id={i} value={item} valid={item.trim().length > 0} name={header + "..."} editable={editing}
                                    onChange={(val) => handleOnChange(val, i)} />
                            </ChildListItemStyled>
                        );
                    })
                }
                { editing &&
                    <ChildListItemStyled>
                        <Button width="100px" height="auto" onClick={addItem}>+</Button>
                    </ChildListItemStyled>
                }
            </ChildListStyled>
        </MainListItemStyled>
    )
}


export default Item;
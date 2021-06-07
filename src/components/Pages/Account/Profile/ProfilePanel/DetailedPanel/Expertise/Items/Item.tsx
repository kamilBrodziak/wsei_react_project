import { FC, useState } from 'react'
import styled, { css } from 'styled-components';
import Colors from '../../../../../../../../styledHelpers/Colors';
import Button from '../../../../../../../Common/Buttons/Button';
import EditableSpan from '../../../../../../../Common/Editable/Elements/EditableSpan';
import Label from '../../../../Common/Label';

const MainListItemStyled = styled.li`

`

const ChildListStyled = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    margin: 8px 0 15px 0;
`

const ChildListItemStyled = styled.li`
    width: auto;
    background: #d1effa;
    border-radius: 5px;
    margin: 0 10px 10px 0;
    max-width: 100%;
`

const ButtonStyled = styled(Button)`
    background: none;
    border: 2px solid ${Colors.lightGray};
    border-radius: 5px;
    font-size: 1.8rem;
`

const SpanStyled = styled(EditableSpan)`
    min-height: 100%;
`

interface IProps {
    header: string;
    items: string[];
    editingState: boolean;
    parentHandleOnChange: (items:string[]) => void;
}

const Item:FC<IProps> = ({header, items, editingState, parentHandleOnChange}) => {
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
            <Label text={header} />
            <ChildListStyled>
                {
                    items.map((item, i) => 
                        <ChildListItemStyled key={i}>
                            <SpanStyled editingState={editingState} value={item} type={"text"} placeholder={`${header}...`}
                                onChange={(e) => handleOnChange(e.currentTarget.value, i)}
                            />
                        </ChildListItemStyled>
                    )
                }
                { editingState &&
                    <ChildListItemStyled>
                        <ButtonStyled width="50px" height="40px" onClick={addItem}>+</ButtonStyled>
                    </ChildListItemStyled>
                }
            </ChildListStyled>
        </MainListItemStyled>
    )
}

export default Item;
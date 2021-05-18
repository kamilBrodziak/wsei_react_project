import React, { FC } from 'react'
import styled from 'styled-components';
import OutsideClickHandler, { IOutsideClickHandler } from '../../../../Utils/OutsideClickHandler';
import ScrollableDiv from '../../../Common/Div/ScrollableDiv';
import Account from './Account/Account';
import Filter from './Filter/Filter';
import Menu, { IDropdownMenuList, IDropdownMenuProps } from './Menu/Menu';
import { IDropdownMenuItemProps } from './Menu/MenuItem/MenuItem';

const DropdownStyled = styled.div<IStyledProps>`
    position: absolute;
    background: white;
    box-shadow: 0 6px 6px 1px gray;
    top: 100%;
    max-height: calc(100vh - ${({headerHeight}) => headerHeight}px);
    width: 250px;
    color: #707070;
    flex:1;
    cursor: initial;
`


interface IProps extends IDropdownMenuProps {
    onClick: Function;
}

interface IStyledProps {
    headerHeight: number;
}

interface IState {
    height: number;
    lists: IDropdownMenuList[]
}

class Dropdown extends React.Component<IProps, IState>{
    menuLists: IDropdownMenuList[];
   

    constructor(props:IProps) {
        super(props);
        this.menuLists = props.lists;
        this.state = {
            height: 0,
            lists: props.lists
        }
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter: string) {
        if(filter === "") {
            console.log(this.menuLists);
            this.setState({lists: this.menuLists});
        } else {
            filter = filter.toUpperCase();
            let tempLists = [...this.menuLists].map((list:IDropdownMenuList) => {
                list = {...list};
                list.items.map(item => {return {...item}});
                return list;
            })
            tempLists = tempLists.filter((list: IDropdownMenuList) => {
                list.items = list.items.filter((item:IDropdownMenuItemProps) => {
                    return item.name.toUpperCase().indexOf(filter) > -1;
                })
                return list.items.length > 0;
            });
            this.setState({lists: tempLists});
        }
    }


    render() {
        const {label, onClick} = this.props;
        return (
            <DropdownStyled headerHeight={this.state.height}>
                <Filter key={0} filterFunction={this.handleFilter} placeholder="Filter..."/>
                <Menu key={1} lists={this.state.lists} label={label} onClick={onClick}/>
                <Account key={2} />
            </DropdownStyled>
        )
    }
}


export default Dropdown;
import React, { FC, MouseEvent } from 'react'
import styled from 'styled-components';
import AppRoutes, { IAppRoute, IAppRoutes } from '../../../../Routes/Routes';
import Account from './Account/Account';
import Filter from './Filter/Filter';
import Menu from './Menu/Menu';
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


interface IProps {
    onClick: (e:MouseEvent, icon?: string, name?: string, iconAlt?: string) => void
}

interface IStyledProps {
    headerHeight: number;
}

interface IState {
    height: number;
    lists: IAppRoutes[]
}

class Dropdown extends React.Component<IProps, IState>{
    menuLists: IAppRoutes[];

    constructor(props:IProps) {
        super(props);
        this.menuLists = AppRoutes;
        this.state = {
            height: 0,
            lists: this.menuLists
        };
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter: string) {
        if(filter === "") {
            this.setState({lists: this.menuLists});
        } else {
            filter = filter.toUpperCase();
            let tempLists = [...this.menuLists].map((list:IAppRoutes) => {
                list = {...list};
                list.routes.map(item => {return {...item}});
                return list;
            })
            tempLists = tempLists.filter((list: IAppRoutes) => {
                list.routes = list.routes.filter((item:IAppRoute) => {
                    return item.name.toUpperCase().indexOf(filter) > -1;
                })
                return list.routes.length > 0;
            });
            this.setState({lists: tempLists});
        }
    }


    render() {
        const {onClick} = this.props;
        return (
            <DropdownStyled headerHeight={this.state.height}>
                <Filter key={0} filterFunction={this.handleFilter} placeholder="Filter..."/>
                <Menu key={1} lists={this.state.lists} onClick={onClick}/>
                <Account key={2} onClick={onClick} />
            </DropdownStyled>
        )
    }
}


export default Dropdown;
import React, {InputHTMLAttributes} from 'react'
import styled from 'styled-components';


const FilterStyled = styled.input`
    width: calc(100% - 20px);
    height: 50px;
    font-size: 1.8rem;
    padding: 3px 8px;
    margin: 2px 10px;
    display: block;
    box-sizing: border-box;
    border: 2px solid #e6e6e6;
    border-radius: 5px;
`;

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    filterFunction: (filter: string) => void;
}

interface IState {
    filter: string;
}

class Filter extends React.Component<IProps, IState> {
    state : {  
        filter: ""
    }

    constructor(props:IProps) {
        super(props);
        this.state = {
            filter: ""
        }
        this.filterFunction = props.filterFunction;
    }

    filterFunction(filter: string) {};

    onChange = (e:React.FormEvent<HTMLInputElement>) => {
        this.setState({filter: e.currentTarget.value});
        this.filterFunction(e.currentTarget.value);
    }

    render() {
        const {filterFunction, ...other} = this.props;
        return (
            <FilterStyled onChange={this.onChange} {...other}/>
        );
    }
}

export default Filter;
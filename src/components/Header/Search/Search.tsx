import React from 'react'
import Icon from '../../Common/Icons/Icon';
import iconSrc from "../../../assets/icons/search.svg"
import styled from 'styled-components';
import {FlexCentered} from '../../../styledHelpers/Positioning';
import Button from '../../Common/Buttons/Button'
const iconWidth = 25;
const formWidth = 400;
const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    position: relative;
    width: ${formWidth}px;
    height: 100%;
    ${FlexCentered}
    flex-direction: row;
    padding: 5px 8px;
    margin: 2px auto;
    border: 2px solid #e6e6e6;
    border-radius: 5px;
`

const SearchInput = styled.input`
    flex: 1;
    height: 100%;
    border: 0;
    outline: 0;
    text-align: center;
    font-size: 1.8rem;
`;

interface IState {
    search: string
}

interface IProps {}

export default class Search extends React.Component<IProps, IState> {
    state = {
        search: ""
    }

    onChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({search: e.currentTarget.value});
    }

    render() {
        return (
            <SearchForm>
                <SearchInput onChange={this.onChange} placeholder="Search Legalcluster"/>
                <Button width={`${iconWidth}px`} height="100%">
                    <Icon src={iconSrc} alt="Logo" />
                </Button>
            </SearchForm>
        )
    }
}
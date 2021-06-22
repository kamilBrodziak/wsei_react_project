import React, { FC, useState } from 'react';
import useDropdown from 'react-dropdown-hook';
import styled from 'styled-components';
import IconWithText from '../Icons/IconWithText';
import IconArrow from '../../../assets/icons/arrow-down.svg'
import Figure from '../Icons/Figure';
import Icon from '../Icons/Icon';
import Colors from '../../../styledHelpers/Colors';
import Button from '../Buttons/Button';

const OptionsDropdownStyled = styled.div`
    position: relative;
    min-width: 120px;
`

const Header = styled.div`
    display: flex;
    & > button {
        display: flex;
        justify-content: space-between;
        & > figure:last-child {
            margin: 0 0 0 5px;
        }
    }
    
`

const Dropdown = styled.ul`
    position: absolute;
    z-index: 100;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    list-style: none;
`

const DropdownEl = styled.li<{active:boolean}>`
    background: ${props => !props.active ? 'white' : Colors.lightGray};
    transition: all 0.1s ease;

    &:not(:first-child) {
        border: 1px solid ${Colors.lightGray};
    }

    &:hover {
        background: ${Colors.lightGray};
    }
`

const DropdownElButton = styled(Button)`
    background: none;
    border: 0;
    outline: 0;
    padding: 8px;
`

const TextStyled = styled.span`
    display: flex;
    align-items: center;
`

export interface IDropdownOption {
    text: string;
    icon?: string;
    iconAlt?: string;
    onSelect?: () => void;
}

interface IProps{
    data: IDropdownOption[];
    handleSelect?: (id:number) => void;
    className?:string;
    selected?: number;
}

const OptionsDropdown:FC<IProps> = ({data, handleSelect, className, selected}) => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    const [active, setActive] = useState(selected ? selected : 0);
    const handleOnClick = (id:number) => {
        setActive(id);
        closeDropdown();
        if(handleSelect) {
            handleSelect(id);
        }
    }
    return (
        <OptionsDropdownStyled ref={wrapperRef} className={className}>
            <Header>
                <DropdownElButton width="100%" height="auto" onClick={toggleDropdown} >
                    { data[active].icon ? 
                        <IconWithText icon={data[active].icon} iconAlt={data[active].iconAlt} text={data[active].text} /> :
                        <TextStyled>{data[active].text}</TextStyled>
                    }
                    <Figure width="9px" height="100%">
                        <Icon src={IconArrow} alt={'arrow down icon'}/>
                    </Figure>
                </DropdownElButton>
            </Header>
            {dropdownOpen && <Dropdown>
                {
                    data.map((el, i) => <DropdownEl active={active === i} key={i} >
                        <DropdownElButton width="100%" height="auto" onClick={(e) => handleOnClick(i)}>
                            { data[active].icon ? 
                                <IconWithText icon={el.icon} iconAlt={el.iconAlt} text={el.text} /> :
                                <TextStyled>{el.text}</TextStyled>
                            }
                        </DropdownElButton>
                    </DropdownEl>)
                }    
            </Dropdown>}
        </OptionsDropdownStyled>
    )
}

export default OptionsDropdown;
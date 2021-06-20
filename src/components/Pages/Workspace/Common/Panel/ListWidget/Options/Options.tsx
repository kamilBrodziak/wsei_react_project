import styled from 'styled-components';
import { PanelCss } from '../../../../../../../styledHelpers/Common';
import IconWithText from '../../../../../../Common/Icons/IconWithText';
import { FC } from 'react';
import { IData } from '../ListWidget';
const OptionsStyled = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-between;
    flex-flow: row wrap;
`

interface IOptionStyled {
    background: string;
    color?:string;
}

const OptionStyled = styled.li<IOptionStyled>`
    ${PanelCss}
    background: ${props => props.background};
    color: ${props => props.color ? props.color : 'initial'};
    cursor: pointer;
    padding: 5px 10px;
`

interface IProps {
    options: IData[];
}

const Options:FC<IProps> = ({options}) => {
    return (
        <OptionsStyled>
            {options.map((el, i) => <OptionStyled key={i} background={el.background} color={el.color}>
                {el.icon ? <IconWithText icon={el.icon} iconAlt={'icon'} text={el.text} /> : el.text}
            </OptionStyled>)}
        </OptionsStyled>
    )
}

export default Options;


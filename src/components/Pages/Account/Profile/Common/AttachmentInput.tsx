import React, { FC } from 'react'
import styled, { css } from 'styled-components';
import Colors from '../../../../../styledHelpers/Colors';
import { IAttachment } from '../../../../../Utils/IRestObjects';
import Figure from '../../../../Common/Icons/Figure';
import Icon from '../../../../Common/Icons/Icon';
import FileIcon from "../../../../../assets/icons/bell.svg";

const AttachmentStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    background: ${Colors.lightGray};
`

const InputStyled = styled.input<IInputProps>`
    width: auto;
    margin: 0 0 0 10px;
    font-weight: ${props => props.bold ? "bold" : "normal"};
    background: none;
    outline: 0;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    padding: 5px 0 4px 0;
`

const LinkStyled = styled.a<IInputProps>`
    display: block;
    padding: 5px 0 5px 10px;
    flex: 1;
    text-decoration: none;
    color: black;
    &:visited {
        color: inherit
    }
`

interface IInputProps {
    valid?: boolean;
    bold?: boolean;
}

interface IProps {
    editable?: boolean;
    bold?: boolean;
    onChange?: (attachment: IAttachment) => void;
    id?: number;
    valid?: boolean;
    attachment: IAttachment;
}

const AttachmentInput:FC<IProps> = ({editable=false, bold = false, attachment, valid=true, onChange, id=0}) => {
    const inputOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const files = e.currentTarget.files;
        let name = "", path = "";
        if(files.length) {
            name = files[0].name;
            path = "";
            console.log(files[0]);
            onChange({name: name, path: path});
        }
    }
    return <AttachmentStyled>
        <Figure width="20px" height="20px"><Icon src={FileIcon} alt={attachment.name}/></Figure>
        {
            editable ? (
                <InputStyled bold={bold} type="file" value={attachment.path} placeholder={"Choose file..."} 
                    onChange={inputOnChange} valid={valid} required/>
            ) : (
                <LinkStyled bold={bold} href={`${attachment.path}`} download={true}>{attachment.name}</LinkStyled>
            )
        }
    </AttachmentStyled>
}

// export {TextPropertyOnChange}
export default AttachmentInput;
import { FC } from 'react';
import styled from 'styled-components';
import Breakpoints from '../../../../../../../styledHelpers/Breakpoints';
import Colors from '../../../../../../../styledHelpers/Colors';
import { IExtendedComment } from '../../../../../../../utils/IRestComments';
import IconWithText from '../../../../../../Common/Icons/IconWithText';
import CorporateIcon from '../../../../../../../assets/icons/entities.svg'
import ContractIcon from '../../../../../../../assets/icons/publications.svg'

const ListStyled = styled.ul`
    list-style: none;
    color: ${Colors.darkGray};
`

const ListElStyled = styled.li`
    padding: 5px 10px;
    margin: 0 0 10px 0;
    background: white;
`

const TitleStyled = styled.h4`
    font-size: 1.9rem;
`

const BodyStyled = styled.p`
    margin: 8px 0;

`

const MetaStyled = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    @media ${Breakpoints.tablet} {
        flex-direction: row;
    }
`

const MetaImagesContainer = styled.div`
    display: flex;
    & > div {
        padding: 0 15px;
    }

`

interface ITextIconStyledProps {
    color: string;
}

const TextIconStyled = styled(IconWithText)<ITextIconStyledProps>`
    color: ${props => props.color};
`

const MetaDateText = styled.span`
    display: block;
    padding: 0 15px;
    color: ${Colors.gray};
    @media ${Breakpoints.tablet} {
        flex: 1;
    }
`

interface IData extends IExtendedComment {
    icon: string;
    color: string;
    group:string;
}

interface IProps {
    comments: IData[],
}

const List:FC<IProps> = ({comments}) => {
    const content = comments.map((comment, i) => <ListElStyled key={i}>
        <TitleStyled>{comment.name}</TitleStyled>
        <BodyStyled>{comment.body}</BodyStyled>
        <MetaStyled>
            <MetaImagesContainer>
                <TextIconStyled color={comment.color} icon={comment.icon} iconAlt={"icon"} text={comment.group} />
            </MetaImagesContainer>
            <MetaDateText>
                Updated 3 days ago by {comment.user.name}
            </MetaDateText>
        </MetaStyled>
    </ListElStyled>)
    return (
        <ListStyled>
            {content}
        </ListStyled>
    )
}

export default List;

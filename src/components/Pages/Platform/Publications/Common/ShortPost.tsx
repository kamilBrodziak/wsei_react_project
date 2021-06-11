import { FC } from 'react';
import styled from 'styled-components';
import { PlatformPaths } from '../../../../../routes/PlatformRoutes';
import Colors from '../../../../../styledHelpers/Colors';
import { IPost } from '../../../../../utils/IRestPost';
import { dateToString } from '../../../../../utils/Utils';
import Figure from '../../../../Common/Icons/Figure';
import Icon from '../../../../Common/Icons/Icon';
import Link from '../../../../Common/Links/Link';
import Author from './Author';

const ShortPostStyled = styled.div`
    display: flex;
`

const FigureStyled = styled(Figure)`
    img {
        width: 100%;
        height: 100%;
    }    
`

const DescriptionStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
`

const TitleLinkStyled = styled(Link)`
    font-weight: bold;
    color: ${Colors.darkGray};
`

const MetaStyled = styled.div`
    display: flex;
    font-size: 1.5rem;
`

const Datestyled = styled.span`
`



interface IProps {
    post: IPost;
    className?: string;
}

const ShortPost:FC<IProps> = ({className, post}) => {
    const link = `${PlatformPaths.PUBLICATIONS}?id=${post.id}`;
    return (
        <ShortPostStyled className={className}>
            <FigureStyled width="60px" height="60px">
                <Icon src={post.photo.thumbnailUrl} alt={post.photo.title} />
            </FigureStyled>
            <DescriptionStyled>
                <TitleLinkStyled to={link}>{post.title}</TitleLinkStyled>
                <MetaStyled>
                    <Datestyled>
                        {dateToString("d MMM. yyyy",post.date)}
                    </Datestyled>
                    <Author user={post.user}/>
                </MetaStyled>
            </DescriptionStyled>
        </ShortPostStyled>
    )
}

export default ShortPost;
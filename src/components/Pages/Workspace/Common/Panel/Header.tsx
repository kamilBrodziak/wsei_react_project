import { FC } from 'react';
import styled from 'styled-components';
import { PanelCss } from '../../../../../styledHelpers/Common';
import { FlexCentered } from '../../../../../styledHelpers/Positioning';
import Button from '../../../../Common/Buttons/Button';
import Figure from '../../../../Common/Icons/Figure';
import Icon from '../../../../Common/Icons/Icon';
import SettingsIcon from '../../../../../assets/icons/cog.svg';


const HeaderStyled = styled.section`
    ${PanelCss}
`

const FigureStyled = styled(Figure)`
    img {
        object-fit: cover;
        object-position: center;
    }
`

const DetailStyled = styled.div`
    padding: 15px;
    ${FlexCentered}
    background: white;
`

const IconStyled = styled(Figure)`
    padding: 0 15px 0 0;
`

const ContentStyled = styled.div`
    flex: 1;
`

const TitleStyled = styled.h1`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2.2rem;
    padding: 0 0 10px 0;
`

const BodyStyled = styled.p`

`

const SettingsButton = styled(Button)`
    background: none;
    border: 0;
    outline: 0;
`

interface IProps {
    image: string,
    imageAlt: string,
    title:string,
    icon:string,
    iconAlt: string,
    className?: string;
}

const Header:FC<IProps> = ({image, imageAlt, title, icon, iconAlt, className}) => {
    return (
        <HeaderStyled className={className}>
            <FigureStyled width="100%" height="120px">
                <Icon src={image} alt={imageAlt} />            
            </FigureStyled>
            <DetailStyled>
                <IconStyled width="50px" height="50px">
                    <Icon src={icon} alt={iconAlt}/>
                </IconStyled>
                <ContentStyled>
                    <TitleStyled>
                        {title}
                        <SettingsButton width="16px" height="16px">
                            <Icon src={SettingsIcon} alt={'settings'} />    
                        </SettingsButton>    
                    </TitleStyled>
                    <BodyStyled>
                        Workspace purpose and a bit of context. This much needed description is here to remind people where
                        they are, if they are new or have poor memory.
                    </BodyStyled>
                </ContentStyled>
            </DetailStyled>
        </HeaderStyled>
    )
}

export default Header;
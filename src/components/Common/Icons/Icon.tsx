import { FC, ImgHTMLAttributes} from 'react'
import styled from 'styled-components';

const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    width: 100%;
`

interface IProps extends ImgHTMLAttributes<HTMLImageElement>{
    src: string;
    alt: string;
}


const Icon : FC<IProps> = (props) => {
    const {...other} = props;
    return (
        <Img {...other}/>
    );
}

export default Icon;
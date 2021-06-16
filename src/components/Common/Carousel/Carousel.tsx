import { useEmblaCarousel } from "embla-carousel/react";
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';


const CarouselStyled = styled.div`
    overflow: hidden;
    user-select:none;
    position: relative;
`

const ButtonCss = css`
    opacity: 0;
    &:disabled {
        display: none;
    }
    &:hover {
        opacity: 100%;
    }
    position: absolute;
    height: 100%;
    width: 40px;
    top: 0;
    background: none;
    border: 0;
    outline: 0;
    cursor: pointer;
    &::before, &::after {
        position: absolute;
        content: '';
        width: 20px;
        height: 6px;
        background: silver;
        border-radius: 10px;
    }
    &::before {
        top: calc(50% - 6px);
    }
    &::after {
        top: calc(50% + 6px);
    }
`

const LeftButton = styled.button`
    ${ButtonCss}
    left: 0;
    &::before, &::after {
        left: 5px;
    }
    &::before {
        transform: translateY(-50%) rotateZ(-45deg);
    }
    &::after {
        transform: translateY(-50%) rotateZ(45deg);
    }
    
`

const RightButton = styled.button`
    ${ButtonCss}
    right: 0;
    &::before, &::after {
        right: 5px;
    }

    &::before {
        transform: translateY(-50%) rotateZ(45deg);
    }
    &::after {
        transform: translateY(-50%) rotateZ(-45deg);
    }
`

const Wrapper = styled.div`
    display: flex;
`


interface IProps {
    className?: string;
}

const Carousel:FC<IProps> = ({children, className}) => {
    const [ref, embla] = useEmblaCarousel({
        dragFree: true,
        containScroll: "trimSnaps"
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
    }, [embla, onSelect]);

    return (
        <CarouselStyled className={className} ref={ref}>
            <Wrapper>
                {children}
            </Wrapper>
            <LeftButton onClick={scrollPrev} disabled={!prevBtnEnabled}></LeftButton>
            <RightButton onClick={scrollNext} disabled={!nextBtnEnabled}></RightButton>
        </CarouselStyled>
    )
}

export default Carousel;
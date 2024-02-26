'use client'

import styled, {keyframes} from 'styled-components';
import { animated } from '@react-spring/web';

const gradientAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`

export const gradients = {
    oceanBlue: 'linear-gradient(90deg, #2E3192, #1BFFFF)',
    purpleLake: 'linear-gradient(75deg, #662D8C, #ED1E79)',
    greenBeach: 'linear-gradient(75deg, #02AABD , #00CDAC)',
    sweetMorning: 'linear-gradient(75deg, #FF5F6D, #FFC371)',
    quepal: 'linear-gradient(75deg, #11998E, #38EF7D)',
    celestial: 'linear-gradient(75deg, #C33764, #1D2671)',
}

export const BGWrapper = styled(animated.div)`
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    background: ${gradients.oceanBlue};
    background-size: 400% 400%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-size: 4vw;
    animation: ${gradientAnimation} 15s ease infinite;
`;

export const Question = styled.div`
    max-width: 80%;
`

/**
 * Fonts
 */

export const MarvinRegular = styled.div`
    font-family: "marvin-round", sans-serif;
    font-weight: 400;
    font-style: normal;
`

export const MarvinRound = styled.div`
    font-family: "marvin-round", sans-serif;
    font-weight: 400;
    font-style: normal;
`
export const MarvinShadow = styled.div`
    font-family: "marvin-shadow", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: white;
`
export const GambadoSansRegular = styled.div`
    font-family: "gambado-sans", sans-serif;
    font-weight: 700;
    font-style: normal;
`
export const GambadoSanForte = styled.div`
    font-family: "gambado-sans-forte", sans-serif;
    font-weight: 700;
    font-style: normal;
`
export const GambadoScotchRegular = styled.div`
    font-family: "gambado-scotch", serif;
    font-weight: 700;
    font-style: normal;
`
export const GambadoScotchForte = styled.div`
    font-family: "gambado-scotch-forte", serif;
    font-weight: 700;
    font-style: normal;
`


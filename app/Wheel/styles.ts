import styled from 'styled-components';

export const WheelContainer = styled.div`
    position: absolute;
    left:0; right:0; top:0; bottom:0;
`
export const WheelWrapper = styled.div`
    display: flex;
    width: 100%;
`
export const Pointer = styled.div`
    height: 0;
    width: 0;
    border: 0.5rem solid transparent;
    border-left: 0;
    border-right: 28rem solid red;
    z-index: 2;
    position: absolute;
    left: 60rem;
    right: 0; top: 0; bottom: 0;
    margin: auto;
`

export const CenterImage = styled.img`
    position: absolute;
    top: 0;right: 0; top: 0; bottom: 0;
    margin: auto;
`
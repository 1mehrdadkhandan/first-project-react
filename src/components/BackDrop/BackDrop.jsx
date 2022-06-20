import styled, { keyframes } from "styled-components"
const opacityOne = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
export const BackDrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #000000a0;
    opacity: 1;
    display: ${({show})=>(show ? 'flex':'none')};
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 200000;
    animation: ${opacityOne} 0.3s linear    
`

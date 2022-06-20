import styled from "styled-components"

export const Contuiner = styled.div`
    width: 40%;
    border-radius: 8px;
    padding: 10px 0;
    min-height: 60%;
    background-color: ${({ them }) => (them.secendC)};
    @media screen and (max-width:700px) {
        width: 60%;

        
    }
`
export const Wapper = styled.div`
    width: 90%;
    margin: auto;
    height: 100%;
`
export const Title = styled.h3`
    font-size: 18px;
    color : ${({ them }) => (them.thirdC)};
`

export const LinkRoute = styled.p`
     color : ${({ them }) => (them.thirdC)};

    font-size: 13px;
    & a {
        color : ${({ them }) => (them.thirdC)};

    }
    @media screen and (max-width:700px) {
    font-size: 10px;
        
    }
`
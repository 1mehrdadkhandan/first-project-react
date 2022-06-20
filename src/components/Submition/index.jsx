import styled from "styled-components"

export const Submition = styled.input`
    margin: 5px 0px;
    background-color: transparent;
    border: 1px solid ${({ them }) => (them.titleC)};
    color: ${({ them }) => (them.titleC)};
    width: 130px;
    border-radius: 4px;
    cursor: pointer;
    height: 40px;
    &:hover{
        border: 1px solid ${({ them }) => (them.thirdC)};
    color: ${({ them }) => (them.thirdC)};
    }
    @media screen and (max-width:700px) {
    height: 30px;
    width: 100px;
    font-size: 12px;
        
    }
`
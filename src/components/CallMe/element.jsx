import styled from "styled-components";

export const Continer = styled.div`
    display: flex;
    min-height: 1000px;
    max-width: 1024px;
    width: 100%;
    justify-content: center;
`
export const Wapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 300px;
    justify-content: space-around;
    width: 70%;
`
export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
`
export const Item = styled.div`
    display: flex;
    width: 100px;
    margin: 15px 0;
    flex-direction: column;
    align-items: center;
    height: 100px;
    justify-content: space-between;
    
`
export const Logo =  styled.a`
    text-decoration: none;
    color : ${({them})=>(them.thirdC)};
    font-size: 56px;
    &:hover{
    color: ${({them})=>(them.titleC)};
    } 
`
export const Name = styled.p`
    color : ${({them})=>(them.thirdC)};
    font-size: 16px;

`
export const AddresEmail = styled.p`
    color : ${({them})=>(them.thirdC)};
    font-size: 25px;
    
`
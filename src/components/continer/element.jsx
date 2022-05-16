import styled from "styled-components";

export const Continer = styled.div`
    width: 100%;
    height: 700px;
    max-width: 1024px;
    background-size: cover;
`
export const BgimageParent = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
`
export const BgImg =styled.img`
    width: 100%;
    height: 100%;
    max-height: 700px;  
`
export const Wapper = styled.div`
margin-top: 10px;
    display: grid;
    grid-template-columns: 3fr  5fr 1fr  ;
    width: 90%;
    column-gap:20px    ;
    margin:25px auto;
    @media screen and (max-width:768px){
    grid-template-columns: 3fr  5fr  ; 
    }
    
`
export const PanelBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({them})=>(them.secendC)};
    height: 340px;
    max-width: 256px;
    border-radius: 8px;
`
export const ParentImg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`
export const ImgReact = styled.img`
    width: 100%;
    max-width: 130px ;
    max-height: 116px;
`
export const Text = styled.div`
    font-size:22px ;
    color: ${({them})=>(them.thirdC)};
    @media screen and (max-width:768px){
    
  
        font-size: 18px;
        
    }
    
`
export const WelomeText= styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #fff;
`
export const Welcome = styled.h3`
    font-size: 55px;
    font-weight: 200px;
    @media screen and (max-width:768px){
        font-size: 45px;
        
    }
`
export const TextWec = styled.p`
    line-height: 30px;
    font-size: 20px;
    letter-spacing: 0.11em;
    font-weight: 100;
    text-align: center;
    @media screen and (max-width:768px){
        font-size: 15px;
        
    }
`
export const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    height: 380px;
    align-items: center;
    justify-content: space-evenly;
`
export const Line = styled.div`
    height: 165px;
    width: 2px;
    border-radius: 1px;
    background-color: #fff;

`
export const SocialIcon = styled.span`
    font-size: 25px;
    width: 25px;
    height: 25px;
    color: #fff;
`
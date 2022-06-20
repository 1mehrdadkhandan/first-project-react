import {Link} from "react-scroll";
import {Link as Rt} from "react-router-dom";
import styled from "styled-components";
import img from '../../images/background.png'
export const Parent = styled.div`
    height: 700px;
    @media screen and (max-width:600px){
    height: 900px;

    }
`
export const Continer = styled.div`
    width: 100%;
    max-width: 1024px;
    position: absolute;
    background-size: cover;
    background-image: url('${img}');
    height: 700px;

    @media screen and (max-width:600px){
    height: 900px;

    }
`

export const Wapper = styled.div`
    padding-top: 100px;
    display: grid;
    grid-template-areas : 'panel welcome socialmedia'  ;
    grid-template-columns: 3fr  5fr 1fr  ;
    width: 90%;
    column-gap:20px    ;
    margin: 0 auto;
    @media screen and (max-width:768px){
    grid-template-columns: 3fr  5fr  ; 
    }
    @media screen and (max-width:600px){
    grid-template-columns: 1fr ; 
    row-gap: 50px;
    grid-template-areas : 'welcome ' 
                         'panel' ;
    
    ;

    }
    
`
export const PanelBtn = styled.div`
grid-area: panel;

 display   :flex ;
 flex-direction: column;
 @media screen and (max-width:600px){
    align-items: center;

    }
`
export const Panel= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({them})=>(them.secendC)};
    height: 340px;
    width: 100%;
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

export const BtnMore = styled(Rt)`
    background-color: transparent;
    border: 1px solid ${({them})=>(them.titleC)} ;
    border-radius: 8px;
    text-decoration: none;
    color: ${({them})=>(them.titleC)};
    margin-top: 40px;
    padding: 16px 8px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    
    &:hover{
        color:#ffffff;
    }
    @media screen and (max-width:768px){
        font-size: 14px;
    }
    `

    
    

export const WelomeText= styled.div`
    display: flex;
    grid-area: welcome;
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
    grid-area: socialmedia;
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
cursor: pointer;
    font-size: 25px;
    width: 25px;
    height: 25px;
    color: #fff;
    &:hover{
    color: ${({them})=>(them.titleC)};
    }
`
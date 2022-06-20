import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SliderDiv = styled.div`
    width: 100%;
    max-width: 1024px;
    height: 500px;
    @media screen and (max-width:780px) { 
    height: 400px;
        
    }
    @media screen and (max-width:600px) { 
    height: 300px;
        
    }
`
export const Continer = styled.div`
position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: hidden;
    width: 100%;
    margin: auto;
`
export const Wapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    & .swiper-button-next::after ,& .swiper-button-prev::after{
        font-size: 18px;
        font-weight: bold;

    }
    & .swiper-button-next, & .swiper-button-prev {
        color: ${({them})=>(them.titleC)} ;
        background-color:${({them})=>(them.thirdC)}
        ;padding: 6px 8px;
        border-radius: 50%;

    }
    
`
export const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 95%;
    `
export const Informition = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    max-height: 320px;
    @media screen and (max-width:600px) {
    max-height: 160px;
        
    }
    background-size:cover;
    position: relative;
    
    `
export const ImgSlide = styled.img`
    width: 100%;
    height: 100%;
 
`

export const ShowProject = styled.div`
    width: 100%;
    display: block;
    height: 100%;
    background-color: #10101076;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 8;
    opacity: 0;
    &:hover{
        opacity: 1;
    }
`
export const BtnShow = styled(Link)`
    padding: 8px 4px;
    font-size: 16px;
    border: 1px solid ${({them})=>(them.titleC)};
    color: ${({them})=>(them.titleC)};
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
    
`
export const TitleProject = styled.h4`
    font-size: 16px;
    color: ${({them})=>(them.titleC)};
`
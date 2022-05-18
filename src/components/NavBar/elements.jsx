import styled from "styled-components";
import {Link} from 'react-scroll'
export const Nav = styled.nav`
    width: 100%;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;   
    position: fixed;
    top: 0;
    z-index: 6;
    max-width: 1024px;
background: ${({scroll})=>(scroll>=100 ? '#000': 'transparent')};


`
export const Wapper = styled.div`
width: 90%;
margin:  auto;
 display   :grid ;
 align-items: center;
 grid-template-columns: 2fr 5fr 80px;
 height: 50px;
 @media screen and (max-width:768px) {
    grid-template-columns: 2fr 5fr 60px;

    }
    @media screen and (max-width:600px) {
    grid-template-columns: 2fr  60px 20px ;
        
    }
    
`
export const MenuIcon = styled.div`
    cursor: pointer;
    font-size: 18px;
    color: #fff;
    display: none;
    padding-left: 18px;
    @media screen and (max-width:600px) {
    display:inherit;
        
    }

`
export const Logo = styled.h3`
    color : ${({them})=>(them.titleC)};
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    display: flex;
    align-items: center;
    @media screen and (max-width:768px) {
        font-size: 15px;
    }
`
export const NavItem = styled.div`
   display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width:600px) {
        display: none;
    }
    `
export const Item = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    cursor: pointer;
    color: #fff;
    &::after{
    transition: all 0.3s ease;
        margin-top: 4px;
        
        content: '';
        width: 0%;
        height: 1px;
        background-color: #fff;
        display :block ;
        
    }
    &:hover&::after{
        width: 100%;
    }
    @media screen and (max-width:768px){
        font-size: 12px;
        
    }
`
export const ThemHandel = styled.div`
    background-color: #fff;
    display: inherit;
    height: 35px;
    border-radius:8px;
    position: relative;
    @media screen and (max-width:768px){
       height: 25px;
        
    }

`
export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 8px;
    box-sizing: border-box;
    z-index: 3;
    
`
export const Icon = styled.span`
    color: #000;
    z-index: 4;
    font-size: 20px;
    display: flex;
 
    
    @media screen and (max-width:768px){
        font-size: 15px;   
    }
`
export const Select = styled.div`
    background-color: #ebe9e9;
    width: 50%;
    height: 100%;
    border-radius: 8px;
    transition: all ease 0.3s;
    left:${({them})=>(them==='light'? '0' :'50%')};
    z-index: 2;
    position: absolute;

`

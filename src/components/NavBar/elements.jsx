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
    &.active::after,
       &:hover&::after{
        width: 100%;
    }
    @media screen and (max-width:768px){
        font-size: 12px;
        
    }
`

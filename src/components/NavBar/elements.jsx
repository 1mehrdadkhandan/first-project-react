import styled from "styled-components";
import {Link} from 'react-scroll'
export const Nav = styled.nav`
    width: 100%;
    padding: 32px 0;
    display: flex;
    justify-content: center;
    align-items: center;   
`
export const Wapper = styled.div`
width: 90%;
margin: auto;
 display   :grid ;
 grid-template-columns: 2fr 5fr 80px;
 height: 50px;
`
export const Logo = styled.h3`
    color : ${({them})=>(them.titleC)};
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    display: flex;
    align-items: center;
`
export const NavItem = styled.div`
   display: flex;
   
    align-items: center;
    justify-content: space-evenly;
`
export const Item = styled(Link)`
    font-size: 14px;
    color: #fff;
`
export const ThemHandel = styled.div`
    background-color: #fff;
    display: inherit;
    height: 35px;
    border-radius:8px;
    position: relative;

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

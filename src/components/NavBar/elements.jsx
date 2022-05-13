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
 grid-template-columns: 2fr 5fr 1fr;
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

import {  Item, MenuIcon, Nav, NavItem, Wapper } from './elements'
import {BiMenuAltRight} from 'react-icons/bi'
import LogoC from '../LogoC'
import ThemHandelC from '../ThemHandel'
const NavBar = ({them,themHandel,scroll,toggleMenu}) => {
  
  return (
    <Nav scroll = {scroll}>
            <Wapper >
                <LogoC them = {them} />
                <NavItem them = {them}>
                    <Item spy ={true} activeClass='active' smooth={true} offset={-120} to = 'workSamples'>Work Samples</Item>
                    <Item spy ={true} activeClass='active' smooth={true} offset={-120} to='option'> Option</Item>
                    <Item spy ={true} activeClass='active' smooth={true} offset={-120} to ='whyMe' > Why me ? </Item>
                    <Item spy ={true} activeClass='active' to='about' smooth={true} offset={-120} > About</Item>
                    <Item spy ={true} activeClass='active' to='callMe' smooth={true} offset={-120}> Call Me</Item>
                </NavItem>
                <ThemHandelC themHandel={themHandel} them={them} /> 
                 
                <MenuIcon onClick={toggleMenu}> <BiMenuAltRight />  </MenuIcon>
            </Wapper>
    </Nav>
  )
}

export default NavBar
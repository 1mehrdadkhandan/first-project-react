import { Icon, Icons, Item, Logo, MenuIcon, Nav, NavItem, Select, ThemHandel, Wapper } from './elements'
import {BsSun,BsMoonStars}  from 'react-icons/bs'
import {BiMenuAltRight} from 'react-icons/bi'
const NavBar = ({them,themHandel,scroll,toggleMenu}) => {
console.log(scroll);
  
  return (
    <Nav scroll = {scroll}>
            <Wapper >
                <Logo them = {them}> Mehrdad Khandan </Logo>
                <NavItem them = {them}>
                    <Item spy ={true} activeClass='active' smooth={true} offset={-120} to = 'workSamples'>Work Samples</Item>
                    <Item spy ={true} activeClass='active' smooth={true} offset={-120} to='option'> Option</Item>
                    <Item spy ={true} activeClass='active' smooth={true} offset={-120} to ='whyMe' > Why me ? </Item>
                    <Item spy ={true} activeClass='active' to='about' smooth={true} offset={-120} > About</Item>
                    <Item spy ={true} activeClass='active' to='callMe' smooth={true} offset={-120}> Call Me</Item>
                </NavItem>
                <ThemHandel> 
                  <Icons onClick={themHandel}>
                    <Icon> <BsSun /> </Icon>
                    <Icon> <BsMoonStars /> </Icon>
                  </Icons>
                    <Select them = {them.name}></Select>
                </ThemHandel>
                <MenuIcon onClick={toggleMenu}> <BiMenuAltRight />  </MenuIcon>
            </Wapper>
    </Nav>
  )
}

export default NavBar
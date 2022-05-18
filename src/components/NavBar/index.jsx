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
                    <Item to = 'workSamples'>Work Samples</Item>
                    <Item to='option'> Option</Item>
                    <Item to ='whyMe' > Why me ? </Item>
                    <Item to='about' > About</Item>
                    <Item to='callMe'> Call Me</Item>
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
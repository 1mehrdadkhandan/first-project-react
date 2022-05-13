import React from 'react'
import { Item, Logo, Nav, NavItem, Wapper } from './elements'

const NavBar = ({them}) => {
  return (
    <Nav>
            <Wapper>
                <Logo them = {them}> Mehrdad Khandan </Logo>
                <NavItem them = {them}>
                    <Item to = 'workSamples'>Work Samples</Item>
                    <Item to='option'> Option</Item>
                    <Item to ='whyMe' > Why me ? </Item>
                    <Item to='about' > About</Item>
                    <Item to='callMe'> Call Me</Item>
                </NavItem>
                <ThemHandel>  </ThemHandel>
            </Wapper>
    </Nav>
  )
}

export default NavBar
import React from 'react'
import { CloseMenu, Continer, Item, ItemMenu, Nav, Title } from './elements'
 
import {AiOutlineClose} from 'react-icons/ai'
const NavBarM = ({them,hasOpen,toggleMenu}) => {
  
  return (
    <Nav hasOpen ={hasOpen} them= {them}>
        <Continer them= {them}>
          <CloseMenu onClick={toggleMenu} them= {them}> <AiOutlineClose />  </CloseMenu>
          <Title them = {them} > Menu </Title>
          <ItemMenu them= {them}>
                    <Item them= {them} to = 'workSamples'>Work Samples</Item>
                    <Item them= {them} to='option'> Option</Item>
                    <Item them= {them} to ='whyMe' > Why me ? </Item>
                    <Item them= {them} to='about' > About</Item>
                    <Item them= {them} to='callMe'> Call Me</Item>
          </ItemMenu>
        </Continer>
    </Nav>
  )
}

export default NavBarM
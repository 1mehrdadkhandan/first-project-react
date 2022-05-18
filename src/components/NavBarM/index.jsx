import React from 'react'
import { CloseMenu, Continer, Item, ItemMenu, Nav } from './elements'
 
import {AiOutlineClose} from 'react-icons/ai'
const NavBarM = ({them}) => {
  
  return (
    <Nav them= {them}>
        <Continer them= {them}>
          <CloseMenu them= {them}> <AiOutlineClose />  </CloseMenu>
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
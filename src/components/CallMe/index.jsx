import React from 'react'
import { dataSocialMedia } from './data'
import { AddresEmail, Continer, Item, Logo, Name, SocialMedia, Wapper } from './element'

const CallMe = ({them,id}) => {
  return (
    <Continer id = {id} >
        <Wapper>
            <SocialMedia>
              {/* get data file */}
              {dataSocialMedia.map((item,index)=>{
                  return(
                <Item key={index}>
                  {/* item.icon is Icon social media ex = <Instagram /> */}
                    <Logo them= {them} href={item.link} > {item.icon} </Logo>
                    <Name them= {them} >  {item.name} </Name>
                </Item> 
                  )
              })}
            </SocialMedia>
            <AddresEmail  them= {them} > 1Mehrdadkhandan@gmail.com  </AddresEmail>
        </Wapper>
    </Continer >
  )
}

export default CallMe
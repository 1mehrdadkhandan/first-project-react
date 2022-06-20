import React from 'react'
import { data } from './data'
import { Countiner, Item, Title, Wapper ,Icon } from './element'

const Option = ({them,id}) => {
  return (
    <Countiner  id ={id} them={them}>  
        <Wapper>
            {data.map((item,index)=>{
return(       
          <Item key={index}>
            <Icon src={item.icon} />
            <Title  them={them} > {item.name} </Title>
          </Item>)
            })}
        </Wapper>
    </Countiner>
  )
}

export default Option
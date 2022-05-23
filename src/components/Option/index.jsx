import React from 'react'
import { data } from './data'
import { Countiner, Item, Title, Wapper ,Icon } from './element'

const Option = ({them}) => {
  return (
    <Countiner them={them}>  
        <Wapper>
            {data.map(item=>{
              console.log(item);
return(       
          <Item>
            <Icon src={item.icon} />
            <Title  them={them} > {item.name} </Title>
          </Item>)
            })}
        </Wapper>
    </Countiner>
  )
}

export default Option
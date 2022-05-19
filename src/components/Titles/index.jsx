import React from 'react'
import { Parent, TitleText } from './element'

function Title(props) {
  return (
    <Parent activeClass='active' id ={props.id}  them={props.them} >
        <TitleText  them={props.them} >
            {props.children}
        </TitleText>
    </Parent>
  )
}

export default Title
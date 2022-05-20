import React from 'react'
import { Parent, TitleText } from './element'

function Title(props) {
  return (
    <Parent  id ={props.id} name = {props.id} them={props.them} >
        <TitleText  them={props.them} >
            {props.children}
        </TitleText>
    </Parent>
  )
}

export default Title
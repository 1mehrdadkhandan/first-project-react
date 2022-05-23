import React from 'react'
import Home from '../Home'
import './layout.css'
function LayOut(props) {
  return (
    <div  style={{background:`${props.them.bgColor}`}} className='layout'>
        {props.children}
    </div>  
  )
}

export default LayOut
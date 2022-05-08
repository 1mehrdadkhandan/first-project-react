import React from 'react'
import { BgimageParent, BgImg, Continer } from './element'
import Bg from '../../images/background.png'
const ContinerOne = (props) => {
  return (
    <Continer >
      <BgimageParent>
        <BgImg src={Bg} />
      </BgimageParent>
    </Continer>
  )
}

export default ContinerOne
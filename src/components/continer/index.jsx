import React from 'react'
import { BgimageParent, BgImg, Continer, ImgReact, PanelBtn, ParentImg, Text, Wapper } from './element'
import Bg from '../../images/background.png'
import ReactIcon from '../../images/react-logo.svg'

const ContinerOne = (props) => {
  return (
    <Continer >
      <BgimageParent>
        <BgImg src={Bg} />
      </BgimageParent>
        <Wapper>
          <PanelBtn them = {props.them}> 
            <ParentImg>
              <ImgReact src={ReactIcon} />
            </ParentImg>
            <Text them = {props.them}> React Developer </Text>
          </PanelBtn>
          {/* <WelomeText>
            <Welome>
              Welocme 
            </Welome>
          </WelomeText> */}
          {/* <SocialMedia></SocialMedia> */}
        </Wapper>
    </Continer>
  )
}

export default ContinerOne
import React from 'react'
import {TextWec, WelomeText,Welcome,BgimageParent, BgImg, Continer, ImgReact, PanelBtn, ParentImg, Text, Wapper, SocialMedia, Line, SocialIcon } from './element'
import Bg from '../../images/background.png'
import ReactIcon from '../../images/react-logo.svg'
import {BsInstagram,BsYoutube,BsTelegram,BsWhatsapp} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'

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
          <WelomeText>
            <Welcome>
              Welocme 
            </Welcome>
            <TextWec>
            I’M Mehrdad khandan , Front End Developer
            </TextWec>
          </WelomeText>
          {/* icons Social Media */}
          <SocialMedia className='disN'>
            {/* Line  */}
            <Line></Line>
            {/* Icon instagram */}
            <SocialIcon > <BsInstagram/> </SocialIcon>
            {/* Youtube */}
            <SocialIcon> <BsYoutube /> </SocialIcon>
            {/* WhatsApp */}
            <SocialIcon> <BsWhatsapp /> </SocialIcon>
            {/* Telegram */}
            <SocialIcon> <FaTelegramPlane /> </SocialIcon>
          </SocialMedia>
        </Wapper>
    </Continer>
  )
}

export default ContinerOne
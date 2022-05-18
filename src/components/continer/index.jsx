import React from 'react'
import {TextWec, WelomeText,Welcome, Continer, ImgReact, PanelBtn, ParentImg, Text, Wapper, SocialMedia, Line, SocialIcon, Panel, BtnMore } from './element'
import ReactIcon from '../../images/react-logo.svg'
import {BsInstagram,BsYoutube,BsWhatsapp , BsArrowRightShort} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'

const ContinerOne = (props) => {
  return (
    <Continer >
      
        <Wapper>
          <PanelBtn >
            {/* panel React */}
            <Panel them = {props.them}> 
            <ParentImg>
              <ImgReact src={ReactIcon} />
            </ParentImg>
            <Text them = {props.them}> React Developer </Text>
            </Panel>
          {/* btn Read more  */}
            <BtnMore them={props.them} to=''>
               <span>Read More</span> <BsArrowRightShort fontSize={24} />
            </BtnMore>
          </PanelBtn>


          {/* Welcome text */}
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
            <SocialIcon them = {props.them}  > <BsInstagram/> </SocialIcon>
            {/* Youtube */}
            <SocialIcon them = {props.them} > <BsYoutube /> </SocialIcon>
            {/* WhatsApp */}
            <SocialIcon them = {props.them} > <BsWhatsapp /> </SocialIcon>
            {/* Telegram */}
            <SocialIcon them = {props.them} > <FaTelegramPlane /> </SocialIcon>
          </SocialMedia>
        </Wapper>
    </Continer>
  )
}

export default ContinerOne
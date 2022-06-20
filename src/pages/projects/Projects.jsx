import React, { useEffect } from 'react'
import LogoC from '../../components/LogoC'
import ThemHandelC from '../../components/ThemHandel'
import { AddresMedia, IconAddres, IconMessage, Info, InfoCall, InfoDiv, InfoProject, Informition, Nav, Photo, PhotoD, PhotoDiv, PhotoProject, SendMessage, Square, TitleC, TitleInfo } from './elements'
import LayOut from './../Layout'
import { data } from '../../components/Slider/data'
import { useParams,useLocation } from 'react-router-dom'
import Title from '../../components/Titles'
import FormInput from './From/Form'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiAtSign, FiPhoneCall } from 'react-icons/fi'
const Projects = ({ them, themHandel }) => {
  const { id } = useParams()
  const project = data[id - 1]
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <LayOut them={them}>
      <Nav>
        <LogoC them={them} />
        <ThemHandelC them={them} themHandel={themHandel} />
      </Nav>
      {/* Show project */}
      <InfoProject them={them}>
        {/* text */}
        <Informition>
          <TitleC them={them}>{project.title}</TitleC>
          <Info them={them}> {project.info} </Info>
        </Informition>
        {/* photo */}
        <PhotoProject them={them}>
          <PhotoDiv>
            {/* Square top */}
            <Square left={true} them={them}></Square>
            {/* image project */}
            <Photo src={project.img} />
            {/* Square bottom */}
            <Square left={false} them={them}></Square>
          </PhotoDiv>
        </PhotoProject>
      </InfoProject>

      {/* Title */}
      <Title them={them}> Call Me  </Title>
      <SendMessage>
        {/* Form message */}
        <FormInput them={them} />
        
        {/* Info call */}
        <InfoCall them={them}>
          <Square left={true} them={them}></Square>
          <InfoDiv them={them}>
            <TitleInfo them={them}>
              Info
            </TitleInfo>
            {/* email */}
            <IconAddres>
              <IconMessage them={them}>  <FiAtSign /> :  </IconMessage>
              <AddresMedia them={them}>1mehrdadkhandan@gmail.com</AddresMedia>
            </IconAddres>

            {/* Phone number */}
            <IconAddres>
              <IconMessage them={them}>  <FiPhoneCall /> :  </IconMessage>
              <AddresMedia them={them}>+989936757472</AddresMedia>
            </IconAddres>
            {/* insta */}
            <IconAddres>
              <IconMessage them={them}>  <AiOutlineInstagram /> :   </IconMessage>
              <AddresMedia them={them}>mehrdadkhandan_</AddresMedia>
            </IconAddres>
          </InfoDiv>
        </InfoCall>

      </SendMessage>
    </LayOut>
  )
}

export default Projects
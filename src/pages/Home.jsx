import React, { useEffect, useState } from 'react'
import ContinerOne from '../components/continer';
import NavBar from '../components/NavBar';
import NavBarM from '../components/NavBarM';
import Option from '../components/Option';
import Slider from '../components/Slider';
import Title from '../components/Titles';
import LayOut from './Layout'

const thems = {
    light : {
        name :'light',
        bgColor:'#F8F8FA',
        titleC : '#F9C11C',
        secendC:'#ffffff',
        thirdC:' #151D28 '

    },
    dark: {
      name:'dark',
      bgColor:'#222222',
      titleC : '#EE8F66',
      secendC:'#292929',
      thirdC:' #E8E8E8 '

    }
}

function Home() {
  const [them, setthem] = useState('dark');
  const [scroll, setscroll] = useState(0);
  const [hasOpen, setOpen] = useState(false);
  const toggleMenu = ()=>{
    setOpen(!hasOpen)
  }
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      setscroll(window.scrollY)
    })
    window.addEventListener('resize',()=>{
      console.log (window.innerWidth)
    })
  }, [])
  const themHandel = ()=>{
    if(them ==='light'){
      setthem('dark')
    }else{
      setthem('light')

    }
  }
  return (

    <LayOut them={thems[them]}>
      <header>
        <NavBarM hasOpen={hasOpen} toggleMenu= {toggleMenu} them={thems[them]} />
        <NavBar toggleMenu= {toggleMenu} scroll = {scroll} themHandel = {themHandel} them = {thems[them]} />
      </header>

        <ContinerOne them = {thems[them]} />
        <Title id='workSamples' them={thems[them]} > work Samples </Title>
        <Slider them = {thems[them]} />
        <Title id='option' them={thems[them]} > Option </Title>
        <Option   them={thems[them]} />
        

    </LayOut>
  )
}

export default Home
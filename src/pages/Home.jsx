import React, { useEffect, useState } from 'react'
import ContinerOne from '../components/continer';
import NavBar from '../components/NavBar';
import NavBarM from '../components/NavBarM';
import LayOut from './Layout'

const thems = {
    light : {
        name :'light',
        titleC : '#F9C11C',
        secendC:'#F8F8FA',
        thirdC:' #151D28 '

    },
    dark: {
      name:'dark',
      titleC : '#EE8F66',
      secendC:'#292929',
      thirdC:' #E8E8E8 '

    }
}

function Home() {
  const [them, setthem] = useState('light');
  const [scroll, setscroll] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      setscroll(window.scrollY)
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

    <LayOut>
        <NavBarM them={thems[them]} />
        <NavBar scroll = {scroll} themHandel = {themHandel} them = {thems[them]} />
        <ContinerOne them = {thems[them]}></ContinerOne>
    </LayOut>
  )
}

export default Home
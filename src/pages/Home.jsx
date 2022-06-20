import React, { useEffect, useState } from 'react'
import CallMe from '../components/CallMe';
import ContinerOne from '../components/continer';
import Informition from '../components/Informition';
import { data } from '../components/Informition/data';
import NavBar from '../components/NavBar';
import NavBarM from '../components/NavBarM';
import Option from '../components/Option';
import Slider from '../components/Slider';
import Title from '../components/Titles';
import LayOut from './Layout'
import {Outlet} from 'react-router-dom'


function Home({thems,them,themHandel}) {
  const [scroll, setscroll] = useState(0);
  const [hasOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!hasOpen)
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setscroll(window.scrollY)
    })
    window.addEventListener('resize', () => {
    })
  }, [])
 
  return (

    <LayOut them={thems[them]}>
      <Outlet />

      <header>
        <NavBarM hasOpen={hasOpen} toggleMenu={toggleMenu} them={thems[them]} />
        <NavBar toggleMenu={toggleMenu} scroll={scroll} themHandel={themHandel} them={thems[them]} />
      </header>
      <ContinerOne them={thems[them]} />
      <Title them={thems[them]} > work Samples </Title>
      <Slider id='workSamples' them={thems[them]} />
      <Title them={thems[them]} > Option </Title>
      <Option id='option' them={thems[them]} />
      {data.map((item, index) => {
        // for link scroll 
        let next;
        // if last item next = Call me
        if (index !== data.length - 1) {
          next = data[index + 1].id
        } else {
          next = 'callMe'
        }
        return (
          <React.Fragment key={index}>
            <Title them={thems[them]} > {item.title} </Title>
            <Informition next={next} data={item} them={thems[them]} />
          </React.Fragment>)
      })}
      <Title them={thems[them]} > Call Me </Title>
      <CallMe id='callMe' them={thems[them]} />

    </LayOut>
  )
}

export default Home
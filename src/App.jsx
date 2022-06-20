import React, { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/projects/Projects';
import Signin from './pages/Login/signin';
import Signup from './pages/Login/signup';
const thems = {
  light: {
    name: 'light',
    bgColor: '#F8F8FA',
    titleC: '#F9C11C',
    secendC: '#ffffff',
    thirdC: ' #151D28 '

  },
  dark: {
    name: 'dark',
    bgColor: '#222222',
    titleC: '#EE8F66',
    secendC: '#292929',
    thirdC: ' #E8E8E8 '

  }
}

function App(props) {
  // them 
  const [them, setthem] = useState('dark');
  // handel them
  const themHandel = () => {
    if (them === 'light') {
      setthem('dark')
    } else {
      setthem('light')

    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home thems={thems} them={them} themHandel={themHandel} />}>
          <Route  path='signin' element={<Signin them={thems[them]} themHandel={themHandel} />} />
          <Route  path='signup' element={<Signup them={thems[them]} themHandel={themHandel} />} />
        </Route>
        <Route exact path='projects/:id' element={<Projects them={thems[them]} themHandel={themHandel} />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
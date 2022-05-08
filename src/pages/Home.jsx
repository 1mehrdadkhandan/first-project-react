import React, { useState } from 'react'
import ContinerOne from '../components/continer';
import LayOut from './Layout'

const thems = {
    light : {
        titleC : '#F9C11C',
        secendC:'#F8F8FA',
        thirdC:' #151D28 '

    },
    dark: {
      titleC : '#EE8F66',
      secendC:'#292929',
      thirdC:' #E8E8E8 '

    }
}

function Home() {
  const [them, setthem] = useState('dark');

  return (
    <LayOut>
        <ContinerOne them = {thems[them]}></ContinerOne>
    </LayOut>
  )
}

export default Home
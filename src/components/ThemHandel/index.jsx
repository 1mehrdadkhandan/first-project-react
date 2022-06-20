import React from 'react'
import { Icon, Icons,  Select, ThemHandelE } from './elements'
import { BsSun, BsMoonStars } from 'react-icons/bs'

function ThemHandelC({ themHandel, them }) {
    return (
        <ThemHandelE>
            <Icons onClick={themHandel}>
                <Icon> <BsSun /> </Icon>
                <Icon> <BsMoonStars /> </Icon>
            </Icons>
            <Select them={them.name}></Select>
        </ThemHandelE>
    )
}

export default ThemHandelC
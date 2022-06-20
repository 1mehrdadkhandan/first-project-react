import React from 'react'
import styled from 'styled-components'
function LogoC({ them }) {
    return (
        <>
            <Logo them={them}> Mehrdad Khandan </Logo>
        </>
    )
}

export default LogoC


const Logo = styled.h3`
    color : ${({ them }) => (them.titleC)};
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    display: flex;
    align-items: center;
    @media screen and (max-width:768px) {
        font-size: 15px;
    }
`
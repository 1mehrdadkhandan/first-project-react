import Link from "react-scroll/modules/components/Link";
import styled from "styled-components";


export const Nav = styled.nav`
    width: 30%;
    height: 100%;
    position:fixed;
    display: ${({hasOpen})=>(hasOpen? 'none':'block')};
    background-color:${({them})=>(them.secendC)}; ;
`

export const Continer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
    width: 100%;
`
// icon close menu
export const CloseMenu = styled.div`
    font-size: 16px;
    color: ${({them})=>(them.thirdC)};
    display: flex;
    justify-content: right;
`
// Parent Item
export const ItemMenu = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 70%;
    padding: 8px 16px ;
`
export const Item= styled(Link)`
    color : ${({them})=>(them.thirdC)};
    font-size: 18px;
`

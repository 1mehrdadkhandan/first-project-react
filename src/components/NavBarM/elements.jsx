import Link from "react-scroll/modules/components/Link";
import styled from "styled-components";


export const Nav = styled.nav`
    width: 35%;
    height: 100%;
    right: ${({hasOpen})=>(hasOpen? '0':'-100%')};;
    position:fixed;
    z-index: 10;
    display: block;
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
    padding-right: 10px;
    color: ${({them})=>(them.thirdC)};
    display: flex;
    justify-content: right;
    cursor: pointer;

`
// Menu text 
export const Title = styled.h4`
    font-size: 18px;
    margin: 0;
    color: ${({them})=>(them.titleC)};
    padding: 8px 16px ;
    
`
// Parent Item
export const ItemMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 70%;
    padding: 8px 16px ;
`
export const Item= styled(Link)`
    color : ${({them})=>(them.thirdC)};
    font-size: 14px;
    &:hover {
    color : ${({them})=>(them.titleC)};
    cursor: pointer;
    }
`
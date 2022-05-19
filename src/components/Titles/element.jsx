import Link from "react-scroll/modules/components/Link";
import styled from "styled-components";

export const Parent = styled(Link)`
    width: 100%;
    position: relative;
    background-color: ${({them})=>(them.thirdC)};
    height: 3px;
    display: flex;
    justify-content: center;
    margin: 40px 0;
    align-items: center;

`
export const TitleText = styled.h4`
    background-color: ${({them})=>(them.secendC)};
    color: ${({them})=>(them.thirdC)};
    font-size: 18px;
    width: 85%;
    padding: 0 20px;
    position: absolute;

`
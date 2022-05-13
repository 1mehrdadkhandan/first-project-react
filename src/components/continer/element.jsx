import styled from "styled-components";

export const Continer = styled.div`
    width: 100%;
    height: 700px;
    max-width: 1024px;
`
export const BgimageParent = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1024px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
`
export const BgImg =styled.img`
    width: 100%;
    height: 100%;
    max-height: 700px;  
`
export const Wapper = styled.div`
    display: grid;
    grid-template-columns: 3fr  5fr 1fr  ;
    width: 90%;
    margin: auto;
    
`
export const PanelBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({them})=>(them.secendC)};
    height: 340px;
    max-width: 256px;
    border-radius: 8px;
`
export const ParentImg = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`
export const ImgReact = styled.img`
    width: 100%;
    max-width: 130px ;
    max-height: 116px;
`
export const Text = styled.div`
    font-size:22px ;
    color: ${({them})=>(them.thirdC)};
`
export const WelomeText= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`
// export const Welome = 
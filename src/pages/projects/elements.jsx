import styled from 'styled-components'

export const Nav = styled.nav`
    margin: auto;
    width: 90%;
    max-width: 1024px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 80px;
    box-sizing: border-box;
    padding: 10px 8px;
`
export const InfoProject = styled.div`
    
    width: 90%;
    display: grid;
    grid-template-areas    :'Informition photo ' ;
    align-items: center;
    margin: 25px auto;
    min-height: 400px;
    justify-content: start;
    @media screen and (max-width:750px) {
    grid-template-areas    :'Informition '
                             'photo ' ;
        
    }
`

export const Informition = styled.div`
    width: 100%;
    grid-area: Informition;
    height: 100%;
    padding-left: 20px;
    padding-right: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top:30px ;
 
`
export const TitleC = styled.h2`
    color: ${({ them }) => (them.titleC)};
    font-size: 18px;
    font-weight: bold;
    @media screen and (max-width:750px) {
        font-size: 14px;
   
    }
`
export const Info = styled.p`
    color: ${({ them }) => (them.thirdC)} ;
    width: 80%;
    font-size: 14px;
    @media screen and (max-width:750px) {
        font-size: 10px;
   
    }
`

export const PhotoProject = styled.div`
    grid-area: photo;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    box-sizing: border-box;
    margin: 40px auto ;
    border-radius   :8px;
    width:100%;
    position: relative;
    @media screen and (max-width:700px) {
    height: 300px;
    width:80%;
        
   
    }

`
export const Square = styled.div`
    z-index: 0;
    background-color: ${({ them }) => (them.titleC)};
    position: absolute;
    bottom: ${({ left }) => (left ? '75%' : '0%')};;
    left: ${({ left }) => (left && '0')};
    right: ${({ left }) => (!left && '0')};
    width: 100px;
    height: 100px;
    border-radius   :8px ;
    @media screen and (max-width:750px) {
        bottom: ${({ left }) => (left ? '70%' : '0%')};;
  
   
    }
`
export const PhotoDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    align-items: center;
    width: 100%;
    border-radius   :8px;
    height: 100%;
`

export const Photo = styled.img`
    z-index: 1;
    width: 90%;
    height: 90%;
    border-radius   :8px ;`

export const SendMessage = styled.div`
    display: grid;
    grid-template-areas: "1fr 1fr";
    gap: 10px;
    width: 80%;
    max-width: 1024px;
    margin: auto;
    @media screen and (max-width:750px) {
        width: 90%;
    grid-template-areas: '1fr' '1fr' ;

    }
`
export const InfoCall = styled.div`
    margin-top: 30px;
    display: flex;
    min-width: 380px;
    position: relative;
    height: 300px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:750px) {
        min-width: 340px;    
    }

`
export const InfoDiv = styled.div`
    display: flex;
    border-radius: 8px;
    width: 80%;
    padding: 10px 28px;
    box-sizing: border-box;
    flex-direction: column;
    background-color: ${({ them }) => (them.secendC)};
    justify-content: space-evenly;
    height: 250px;
    z-index: 2;
    @media screen and (max-width:750px) {
        padding: 10px 20px;

        
    }
`
export const TitleInfo = styled.h4`
    color:  ${({ them }) => (them.thirdC)};
    font-size: 16px;
`
export const IconAddres = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`
export const IconMessage = styled.span`
    color:${({ them }) => (them.thirdC)} ;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`   
export const AddresMedia = styled.p`
    color:${({ them }) => (them.thirdC)} ;
    font-size: 14px;
    text-transform: capitalize;
    margin-left: 10px;
    @media screen and (max-width:750px) {
    font-size: 12px;
        
    }
`
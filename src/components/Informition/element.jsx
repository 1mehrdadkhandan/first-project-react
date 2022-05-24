import { Link } from 'react-scroll'
import styled from 'styled-components'

export const Continer = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height:470px;
`
export const Wapper = styled.div`
    width: 80%;
    min-height: 400px;
    padding: 20px 0;
    display: grid;
    grid-template-areas: ${({value})=>(value ? `'vector textbtn'`:`'textbtn vector '`)};
    gap: 50px;
    @media screen and  (max-width: 768px) {
    grid-template-areas:  'vector' 
                            'textbtn';
        
    }
   

`

export const VectorParent = styled.div`
    display: flex;
    align-items: center;
    grid-area: vector;

    justify-content: center;
`
export const Vector = styled.img`
    max-width:  350px;
    max-height: 250px;
    @media screen and  (max-width: 600px) {
        max-width:  300px;
        max-height: 200px;
    
}
    @media screen and  (max-width: 360px) {
        max-width:  200px;
        max-height: 100px;
    
}
`
export const TextBtn = styled.div`
    display: flex;
    grid-area: textbtn;
    flex-direction: column;
    justify-content: space-evenly;
`
export const Text=  styled.p`
    font-size: 16px;
    width: 80%;
    line-height: 48px;
    letter-spacing: 0.11em;
    color: ${({them})=>(them.thirdC)};
    @media screen and  (max-width: 600px) {
        font-size: 15px;
    
    
}
    @media screen and  (max-width: 360px) {
     
        font-size: 13px;
    
}
`
export const Btn = styled(Link)`
    padding: 4px 8px ;
    background-color: transparent;
    border: 2px solid ${({them})=>(them.titleC)};
    border-radius: 8px;
    color:${({them})=>(them.titleC)} ;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 150px;
    height: 40px;
    &:hover{
    border: 2px solid ${({them})=>(them.thirdC)};
    color:${({them})=>(them.thirdC)} ;
    cursor: pointer;
    }
`
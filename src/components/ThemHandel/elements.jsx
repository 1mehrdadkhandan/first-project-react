import styled from 'styled-components'

export const ThemHandelE = styled.div`
    background-color: #fff;
    display: inherit;
    height: 35px;
    width: 80px;
    margin: 0 -3px;
    border-radius:8px;
    position: relative;
    text-align: center;
    @media screen and (max-width:768px){
       height: 25px;
        
    }

`
export const Icons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 4px 8px;
    box-sizing: border-box;
    z-index: 3;
    
`
export const Icon = styled.span`

    color: #000;
    z-index: 4;
    font-size: 20px;
    display: flex;
 
    
    @media screen and (max-width:768px){
        font-size: 15px;   
    }
`
export const Select = styled.div`
    background-color: #ebe9e9;
    width: 50%;
    top: 0;
    height: 100%;
    border-radius: 8px;
    transition: all ease 0.3s;
    left:${({them})=>(them==='light'? '0' :'50%')};
    z-index: 2;
    position: absolute;
    
`
 
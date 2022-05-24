import styled from 'styled-components'
export const Countiner = styled.section`
    background-color: ${({them})=>(them.name==='dark' ? them.secendC:them.thirdC )}
    ;
    min-height: 240px;
    width: 100%;
    max-width: 1024px;
    display: flex;
    padding: 30px 0;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    `
export const Wapper= styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    @media screen and (max-width:400px) {
        justify-content: center;

    }
`
export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`

export const Icon = styled.img`
    width: 135px;
    color: #fff;
    height: 125px;
    margin-bottom: 20px;
`

export const Title =styled.p`
    color :${({them})=>(them.titleC)};
    font-size: 16px;

`
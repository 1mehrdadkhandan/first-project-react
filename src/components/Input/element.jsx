import InputE from "./Input";
import styled from "styled-components";
export const Input = styled(InputE)`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 65px;
    position: relative;
    & input:focus + label{
        top: 0;
    }
    @media screen and (max-width:700px) {
        width: 150px;
    height: 50px;
    }
& input{
    outline: 0;
    border: 0;
    padding: 10px 4px;
    border-bottom: 1px solid ${({ them , error }) => (error? 'red' : them.thirdC  )};
    margin: 10px 0;
    background-color: transparent;
    color:${({ them }) => (them.thirdC)} ;
 
};
& label {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  
  position  :absolute ;
  color: ${({them})=>(them.thirdC)};
  
  top:${({value})=>(!value  ? '20px' : 0  )} ;
  @media screen and (max-width:700px) {
    font-size: 14px;
    top:${({value})=>(!value  ? '20px' : 0  )} ;

}
  @media screen and (max-width:700px) {
    font-size: 12px;
    top:${({value})=>(!value  ? '20px' : 0  )} ;

}
}

`
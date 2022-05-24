import React from 'react'
import { Btn, Continer, Text, TextBtn, Vector, VectorParent, Wapper } from './element'
import {BsArrowRight} from 'react-icons/bs'
const Informition = ({data,them,next}) => {
  return (
    <Continer id ={data.id}  > 
    {/* value = if true item left = vector , item right = text  */}
        <Wapper  value = {data.value}>
            <VectorParent>
                    <Vector src={data.vector} />
            </VectorParent>

            <TextBtn>
                <Text them={them} > {data.text} </Text>
              {/* go to text title  */}
                <Btn spy ={true} activeClass='active' smooth={true} offset={-120} to={next}  them={them} > 
                  <span> Next Title </span>  <BsArrowRight fontSize={32} />
                </Btn>
            </TextBtn>
        </Wapper>
    </Continer>
  )
}

export default Informition
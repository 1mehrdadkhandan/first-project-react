import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { BtnShow, Continer, ImgSlide, Informition, ShowProject, SliderDiv, TitleProject, Wapper } from './element'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import img from '../../images/project.png'

import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import { data } from './data';
function Slider({them}) {
  return (
    <SliderDiv >
        <Continer>
            <Wapper them={them}>
              
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
    
        {data.map((item)=>{
           return(
            <SwiperSlide  >
            {/* Img And btn Show project */}
            <Informition them={them} >
              {/* Img project */}
              <ImgSlide src={img} />
              {/* layer Background */}
              <ShowProject>
                {/* btn show project */}
                <BtnShow them={them}> Show Project </BtnShow>
              </ShowProject>
            </Informition>
            <TitleProject them={them} > {item.title} </TitleProject>
          </SwiperSlide>
          )
      })}
        
      </Swiper>
            </Wapper>
        </Continer>
    </SliderDiv>
  )
}

export default Slider
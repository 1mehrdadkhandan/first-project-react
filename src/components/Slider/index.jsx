import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { BtnShow, Continer, ImgSlide, Informition, Items, ShowProject, SliderDiv, TitleProject, Wapper } from './element'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";


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
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
    
        {data.map((item)=>{
          console.log(item)
           return(
            <SwiperSlide  >
            {/* Img And btn Show project */}
            <Items>
            <Informition them={them} >
              {/* Img project */}
              <ImgSlide src={item.img} />
              {/* layer Background */}
              <ShowProject>
                {/* btn show project */}
                <BtnShow them={them}> Show Project </BtnShow>
              </ShowProject>
            </Informition>
            <TitleProject them={them} > {item.title} </TitleProject>
            </Items>
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
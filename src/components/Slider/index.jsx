import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BtnShow, Continer, ImgSlide, Informition, Items, ShowProject, SliderDiv, TitleProject, Wapper } from './element'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";


import { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import { data } from './data';
function Slider({ them, id }) {
  return (
    <SliderDiv id={id} >
      <Continer>
        <Wapper them={them}>

          <Swiper
          loop={true}
            slidesPerView={3}
            spaceBetween={30}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >

            {data.map((item, index) => {
              return (
                <SwiperSlide key={index} >
                  {/* Img And btn Show project */}
                  <Items>
                    <Informition them={them} >
                      {/* Img project */}
                      <ImgSlide src={item.img} />
                      {/* layer Background */}
                      <ShowProject>
                        {/* btn show project */}
                        <BtnShow to={`/projects/${index + 1}`} them={them}> Show Project </BtnShow>
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
import React, { useRef, useState } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Grid, Text, Input, Button, Images } from '../elements/index'

import 'swiper/swiper.min.css'

import 'swiper/components/pagination'
import 'swiper/components/navigation'
import 'swiper/components/autoplay'
import 'swiper/components/navigation/navigation.min.css'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])

const ChristmasBanner = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        <SwiperSlide>slide1</SwiperSlide>
        <SwiperSlide>slide2</SwiperSlide>
        <SwiperSlide>slide3</SwiperSlide>
        <SwiperSlide>slide4</SwiperSlide>
      </Swiper>
    </>
  )
}

export default ChristmasBanner

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
SwiperCore.use([Autoplay, Pagination, Navigation])

const ChristmasBanner = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{
          type: 'fraction',
        }}
        navigation={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <Grid width="360px;" height="360px" className=" ovfHidden borderRadius-10">
            <Images src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000007/67399/P8C736AC481D0383CD7B762443443BE421117F6BC5E1959916696E6AA60BF43BC/file/dims/optimize" />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid width="360px;" height="360px" className="ovfHidden borderRadius-10">
            <Images src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000007/196837/PC2CED6DBAECE71E871E951E799845E288628DA6ACDECC2DC9B4ED44277B1EF02/file/dims/optimize" />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid width="360px;" height="360px" className="ovfHidden borderRadius-10">
            <Images src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000007/196838/P5E141E4F5A4D68D9A92941D207F57BF8F9CCA6560044E43A7B5C0EB0DADBD056/file/dims/optimize" />
          </Grid>
        </SwiperSlide>

        <SwiperSlide>
          <Grid width="360px;" height="360px" className=" ovfHidden borderRadius-10">
            <Images src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000007/67399/P8C736AC481D0383CD7B762443443BE421117F6BC5E1959916696E6AA60BF43BC/file/dims/optimize" />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid width="360px;" height="360px" className="ovfHidden borderRadius-10">
            <Images src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000007/196837/PC2CED6DBAECE71E871E951E799845E288628DA6ACDECC2DC9B4ED44277B1EF02/file/dims/optimize" />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid width="360px;" height="360px" className="ovfHidden borderRadius-10">
            <Images src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000007/196838/P5E141E4F5A4D68D9A92941D207F57BF8F9CCA6560044E43A7B5C0EB0DADBD056/file/dims/optimize" />
          </Grid>
        </SwiperSlide>

        <SwiperSlide>
          <Grid width="360px;" height="360px" className=" ovfHidden borderRadius-10">
            <Images src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000007/67399/P8C736AC481D0383CD7B762443443BE421117F6BC5E1959916696E6AA60BF43BC/file/dims/optimize" />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid width="360px;" height="360px" className="ovfHidden borderRadius-10">
            <Images src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000007/196837/PC2CED6DBAECE71E871E951E799845E288628DA6ACDECC2DC9B4ED44277B1EF02/file/dims/optimize" />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid width="360px;" height="360px" className="ovfHidden borderRadius-10">
            <Images src="https://contents.lotteon.com/display/dshoplnk/31650/2/M000007/196838/P5E141E4F5A4D68D9A92941D207F57BF8F9CCA6560044E43A7B5C0EB0DADBD056/file/dims/optimize" />
          </Grid>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ChristmasBanner

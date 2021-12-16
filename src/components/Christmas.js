import React, { useRef, useState } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styled from 'styled-components'

import { Grid, Text, Input, Button, Images } from '../elements/index'

import './Christmas.css'

import 'swiper/components/pagination'
import 'swiper/components/navigation'
import 'swiper/components/autoplay'
import 'swiper/components/navigation/navigation.min.css'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

const Christmas = () => {
  return (
    <>
      <Wrap>
        <div className="slideWrap">
          <div>
            <div className="thumb">
              <img></img>
            </div>
            <div className="TextGrid">
              <div>
                <text className="smallTextBox">당일배송</text>
              </div>
              <div className="TextTitle">
                <TextTitle>시크릿쥬쥬</TextTitle>
                <text>시크릿쥬쥬 매직캐리어 스페셜</text>
              </div>
              <div>
                <text className="PriceText">46,900원</text>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  padding: 66px;
  width: 1140px;
  height: 350px;
  overflow: hidden;
`
const TextTitle = styled.strong`
  font-size: 17px;
  color: #333;
  margin: 0px 2px;
  font-weight: 600px;
`
export default Christmas

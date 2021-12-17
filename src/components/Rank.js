import React from 'react';
import { useState } from 'react';
import {Grid, Text, Images, Input, Button} from '../elements/index';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay, Controller } from 'swiper'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import 'swiper/components/pagination'
import 'swiper/components/navigation'
import 'swiper/components/autoplay'
import 'swiper/components/navigation/navigation.min.css'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

const Rank = (props) => {
 
const {No}=props;
  
  return (
    <>
    <RankBox>{No}. {props.itemName}</RankBox>
     </>
  );
}

const RankBox = styled.div`
position:relative;
display:block; 
width:100%; 
overflow:hidden;
min-height:40px;
border:1px solid #bbb;
line-height:40px;
z-index:999;
white-space:nowrap;
text-overflow: ellipsis;
`;
export default Rank;
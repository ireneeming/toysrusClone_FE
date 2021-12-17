import React from 'react';
import '../shared/App.css';

import { history } from '../redux/configureStore'; 

import {Grid, Text, Images, Input, Button} from '../elements/index';

import {useSelector, useDispatch} from "react-redux";
import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as rankActions } from '../redux/modules/rank';

import Rank from '../components/Rank';

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/swiper.min.css'

import 'swiper/components/pagination'
import 'swiper/components/navigation'
import 'swiper/components/autoplay'
import 'swiper/components/navigation/navigation.min.css'
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


// 헤더 메뉴 공통부분

const HeaderMenu = () => {

  const dispatch = useDispatch();
  const rank_list = useSelector((state)=> state.rank.rank_list)

  const local_token = localStorage.getItem('token');

  React.useEffect(()=>{

    dispatch(rankActions.getRankSP())
 },[])


  const gotoCart = () => {
    if(local_token){
      history.push(`/cart`);
    }else{
      window.alert("로그인이 필요합니다.");
      history.push(`/login`);
    }
  }


    return (
        <> 
        <Grid header>
          <Grid contentWrap> 
            <Grid className = "flexSpaceBetween" flex = "flex; align-items:flex-start;" height = "91px" padding = "15px 0 16px 0"   > 
             <Grid  _onClick={()=>{history.push('/');}}><Images logo="logo"/></Grid>
            <Grid position="relative;">
              <Input search="search" placeholder="검색어를 입력하세요"/> 
              <Button search_btn="search_btn" className="searchBtn"></Button> 
            </Grid>
            <ul className="headerIcon flexSpaceBetween">
                <li>
                    <img src="https://static.lotteon.com/p/common/foCommon/assets/img/icon_heart_black.svg"/>
                    <p className="headerInfo">나의 찜</p>
                </li>
                <li>
                    <img src="https://static.lotteon.com/p/common/foCommon/assets/img/icon_my_black.svg"/>
                    <p className="headerInfo">마이롯데</p>
                </li>
                <li onClick={gotoCart} style={{cursor:"pointer"}}>
                    <img src="https://static.lotteon.com/p/common/foCommon/assets/img/icon_cart_black.svg"/>
                    <p className="headerInfo">장바구니</p>
                </li>
            </ul>
          </Grid>
        </Grid> 
        <Grid header bdrBtm="2px solid #1352a2;" bdrTop="1px solid #eee">
          <Grid contentWrap="contentWrap" height="50px;" className="flexSpaceBetween">
            <Grid flex="flex" lineHeight="50px">
                <Grid className="bgBlue" width="60px" position="relative">
                    <div className="bar"></div>
                </Grid>
                
                <Grid className="marginL-20">오늘의토이</Grid>
                <Grid className="marginL-20">제프리픽</Grid>
                <Grid className="marginL-20">키덜트존</Grid>
                <Grid className="marginL-20">베스트</Grid>
                <Grid className="marginL-20">기획전</Grid>
            </Grid> 
            <Grid width="300px; overflow:hidden;" className="flexStart">
              <Grid width="1px" height="40px" className="bgeee" margin="5px 0"></Grid>
              <Grid width="100%" height="40px;" padding="0 25px">

              
                <Swiper spaceBetween={10} centeredSlides={true} autoplay={{  delay:5000,  disableOnInteraction: false }} direction={"vertical"} >
                  {
                    rank_list && rank_list.map((p,idx)=>{
                    return  (
                      <>
                      
                      <SwiperSlide><Rank key={p.id} {...p} No={idx+1}/> </SwiperSlide>
                      
                      </>
                    )
                    })
                  }
                </Swiper>
              
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> 
    </>
    );
}
export default HeaderMenu;
import React from 'react';
import '../shared/App.css';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
 
import {Grid,Text,Image,Input, Button} from '../elements/index';



const Header = () => {

  const history= useHistory();
  return(
    <>
      <Grid header bdrBtm="1px solid #eee;">
          <Grid contentWrap>
            <Grid className="flexEnd" header height="34px;">
              <Grid className="flexSpaceBetween" width="246px;">
                <Grid lineHeight="34px;"><Text className="headerInfo">username 님</Text></Grid>
                <Grid lineHeight="34px;"><Text className="headerInfo">로그아웃</Text> </Grid>
                <Grid lineHeight="34px;"><Text className="headerInfo">주문배송</Text> </Grid>
                <Grid lineHeight="34px;"><Text className="headerInfo">고객센터</Text> </Grid>
              </Grid>
            </Grid>
            {/* 혼종 Start */}
            <Grid className="flexSpaceBetween" flex="flex; align-items:top;" height="91px" padding="15px 0 16px 0">
              <Image logo />
              <Grid position="relative;">
                <Input search/>

                <Button search_btn className="searchBtn"></Button>
                
                
              </Grid>
              <ul className="headerIcon flexSpaceBetween">
                <li>    
                    <img src="https://static.lotteon.com/p/common/foCommon/assets/img/icon_heart_black.svg" />
                    <p className="headerInfo">나의 찜</p>              
                </li>
                <li>     
                    <img src="https://static.lotteon.com/p/common/foCommon/assets/img/icon_my_black.svg"/>
                    <p  className="headerInfo">마이롯데</p>  
                </li>
                <li>         
                    <img src="https://static.lotteon.com/p/common/foCommon/assets/img/icon_cart_black.svg"/>
                    <p  className="headerInfo">장바구니</p>    
                </li>
              </ul>
            </Grid>
          </Grid>
      </Grid>
      <Grid header bdrBtm="2px solid #1352a2;">
        <Grid contentWrap height="50px;" className="flexSpaceBetween">
          <Grid flex="flex"  lineHeight="50px">
            <Grid className="bgBlue" width="60px" position="relative">
              <div className="bar"></div>
            </Grid>
            <Grid className="marginL-20">오늘의토이</Grid>
            <Grid className="marginL-20">제프리픽</Grid>
            <Grid className="marginL-20">키덜트존</Grid>
            <Grid className="marginL-20">베스트</Grid>
            <Grid className="marginL-20">기획전</Grid>
          </Grid>
          
          <Grid width="236px" className="flexStart" >
            <Grid width="1px" height="40px" className="bgeee"margin="5px 0"></Grid>
            <Grid width="100%" padding="0 25px">
              <Text>1. 순위페이지</Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}


export default Header;


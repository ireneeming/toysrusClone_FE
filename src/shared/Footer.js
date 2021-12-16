import React from 'react';
import styled from 'styled-components';
import {Grid,Text,Input, Button,Images} from '../elements/index';

const Footer = () => {
  return(
    <>
      <FooterWrap>
        <Grid contentWrap>
          <ul className="topMenu flexStart">
            <li>토이저러스 소개</li>
            <li>지점안내</li>
            <li>이용약관</li>
            <li>전자금융거래약관</li>
            <li>개인정보처리방침</li>
            <li>청소년보호방침</li>
            <li>임직원등록</li>
          </ul>
          

        </Grid>
        <hr/>
        <Grid contentWrap padding="30px 0 40px 0">
          <h2 className="logoArea">
            <img src="https://contents.lotteon.com/ec/public/injectImage.20200228113625.1.png" alt="토이저러스 로고" />
          </h2>
          <div className="infoWrapper">

          </div>
          

        </Grid>
          
        

      </FooterWrap>
    </>

  );
}

const FooterWrap = styled.div`
  width:100%;
  position:relative;
  background-color:#f8f8f8;
  text-align:center;

  .topMenu {
    padding:20px 0;

    li {
      position:relative;
      font-size:14px;
      color:#333;
      padding-left:20px

    }
    li:first-child {padding-left:0;}
    li:first-child:before{
      display:none;
      
    } 
    li:before {
    content: "";
    position: absolute;
    top: 5px;
    bottom: 4px;
    left: 10px;
    width: 1px;
    background-color: #e5e5e5;
  }

  }
  
hr {
    height: 1px;
    margin: 0;
    border: none;
    background-color: #e5e5e5;
}
.logoArea{
  width:234px;
  text-align:left;
  img{height:36px;}
  
}
.infoWrapper {
  width: calc(100% - 234px );
  border:1px solid #bbb;
}

`;


export default Footer;
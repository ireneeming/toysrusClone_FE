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
    li:first-child:before{
      display:none;
      padding-left:0;
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
  



`;


export default Footer;
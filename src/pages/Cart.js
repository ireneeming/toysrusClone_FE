import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import {Grid,Text,Input, Button,Images} from '../elements/index';
import CartLayout from '../components/CartLayout';
import Header from '../components/Header';
import Footer from '../shared/Footer';

const Cart = (props) => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: '일반', content: <CartLayout layout="normal"/> },
    { name: '명절', content: <CartLayout layout="holiday"/> },
    { name: '정기배송', content:  <CartLayout layout="regular"/>},
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };


  
  return (
    <>
    <Header/>
      <Grid contentWrap padding="45px 0 120px 0 ">
        <Text size="36px" align="center;" margin="15px 0 30px 0">장바구니</Text>
        
        
        <Grid>
          {/* 상품목록 영역 */}
          <TabMenu>
            {menuArr.map((ele, index)=>{
              return (
                <li key={index} className={currentTab === index ? "submenu focused" : "submenu"}
                onClick={()=> selectMenuHandler(index)}>
                {ele.name}
              </li>
                );
            })}
          </TabMenu>

          {/* 상품목록 리스트 영역 */}
          <Desc>{menuArr[currentTab].content} </Desc>
      </Grid>




      </Grid>

      <Footer/>
    </>
  );
}

const TabMenu = styled.ul`
  background-color: #f8f8f8;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;

  .submenu {
    width:100% ;
    padding: 16px 10px;
    cursor: pointer;
    border:1px solid #ddd;
    text-align:center; 
    color:#999;
    font-weight:300;
    border-bottom: 2px solid #fb3f46;
  }
  
  .submenu:nth-child(2) {
    background:url('https://static.lotteon.com/p/order/assets/img/kite_holiday_tab_new_off.png') no-repeat;
    background-size:100%;
  }
  .submenu:nth-child(2).focused {
    background:url('https://static.lotteon.com/p/order/assets/img/kite_holiday_tab_new_on.png') no-repeat;
    background-size:100%;
  }
  .submenu.focused {
   border:  1px solid #fb3f46;
   background:#fb3f46;
   color:#fff;
   font-weight:500;
  }
`;
const Desc = styled.div`

width:100%;
min-height:390px;
margin-top:40px;
margin-bottom:80px;
*border:1px solid #eee;
position:relative;
`;


export default Cart;
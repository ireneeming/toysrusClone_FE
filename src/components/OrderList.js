import React from 'react';
import styled from 'styled-components';

const OrderList = (props) => {


 // let total = p.count * p.price
 // const price = String(total).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  return(
    <>              
      <li className="newList">
        <div className="newItemDetail">
          <input type="checkbox" />
          <label>{props.itemName}</label>
          <div className="titleDetailWarp flexStart alignitemT">
            <div className="imgDetail">
              <img src="https://contents.lotteon.com/itemimage/_v230000/LM/88/01/19/80/62/68/7_/00/1/LM8801198062687_001_M.jpg/dims/resizemc/100x100" alt="" />
            </div>
            <div className="titleDetail">
              <p>{props.itemName}</p>
              <p>단일상품 혹은 상품 갯수 정하기 </p>
            </div>
          </div>
          <div className="count">
            <WrapCount>
              <SpinnerBox>
                <Minus onClick={()=>{console.log(-1)}}></Minus>
                <Number>{props.count}</Number>
                <Plus onClick={()=>{console.log(+1)}}></Plus>
              </SpinnerBox>
            </WrapCount>
          </div>
          <div className="totalPrice">{props.price}</div>
        </div>
      </li>             
    </>

  );
}

const WrapCount = styled.div`
  display: flex;
  align-items: center;
  vertical-align: center;
  justify-content: space-between;
`

const BoldText = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #333;
`

const SpinnerBox = styled.div`
  /* width: 110px;
  height: 32px; */
  border: 1px solid #ddd;
  background-color: #fff;
  display: flex;
`

const Number = styled.div`
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  line-height: 30px;
  text-align: center;
  width: 42px;
  font-size: 13px;
`

const Minus = styled.button`
  border: none;
  color: #333;
  overflow: hidden;
  text-indent: -99999px;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  width: 30px;
  height: 30px;
  background: url(//static.lotteon.com/p/product/assets/img/btn_minus.svg) no-repeat 50%;
`

const Plus = styled.button`
  border: none;
  color: #333;
  overflow: hidden;
  text-indent: -99999px;
  -webkit-box-flex: 0;
  -ms-flex: none;
  flex: none;
  width: 30px;
  height: 30px;
  background: url(//static.lotteon.com/p/product/assets/img/btn_plus.svg) no-repeat 50%;
`


export default OrderList;
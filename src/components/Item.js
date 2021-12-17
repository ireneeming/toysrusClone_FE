import React from 'react'
import styled from 'styled-components'
import { Grid, Text, Input, Button, Images } from '../elements/index'

const Item = (props) => {
  const { three, history, _onClick } = props
  // console.log(props)

  // 타임 한정 수량 특가
  if (three) {
    return (
      <>
        <Grid className="ovfHidden borderRadius-10" position="relative;">
          <Images src={props.thumbnail} />
          <ImgBlock />
        </Grid>

        <Text className="productTitleMain" margin="10px 0 0 0">
          {props.itemName}
        </Text>
        <Text className="productPriceMain" margin="8px 0 0 0">
          <b>{props.price}</b>
          <span className="mainwon"> 원</span>
        </Text>
      </>
    )
  }
  return (
    <>
      <Grid className="ovfHidden borderRadius-10" position="relative;">
        <Images src={props.thumbnail} />
        <ImgBlock />
      </Grid>

      <Text className="smallTextBox" margin="10px 0 0 0">
        당일배송
      </Text>

      <Text className="productTitleMain" margin="8px 0 0 0">
        {props.itemName}
      </Text>
      <Text className="productPriceMain" margin="10px 0 0 0">
        <b>{props.price}</b>
        <span className="mainwon"> 원</span>
        <CartBtnDiv>
          <ButtonCart></ButtonCart>
        </CartBtnDiv>
      </Text>
    </>
  )
}

Item.defaultProps = {
  width: '25%',

  margin: '0 15px',
  src: 'https://contents.lotteon.com/itemimage/_v031652/LM/88/09/82/10/70/53/5_/00/1/LM8809821070535_001_1.jpg/dims/optimize/dims/resizef/262x262',
  itemName: '상품명',
  price: '50000',
  discount: '25',
  discription: '상품 설명',
}

const ImgBlock = styled.div`
  width: 100%;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.03);
`

const CartBtnDiv = styled.div`
  /* position: absolute; */
  float:right;
    right: -1px;
    bottom: -2px;
    width: auto;
    height: auto;
    margin: 0;
    border: none;
}
`

const ButtonCart = styled.button`
  /* position: relative; */
  overflow: hidden;
  float: none;
  margin: 0;
  display: inline-block;
  width: 52px;
  height: 52px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  font-size: 0;
  background: url(https://static.lotteon.com/p/display/assets/img/icon_cart_toy.svg) no-repeat 0 0;
  background-size: 100%;

  &:hover {
    background: url(https://static.lotteon.com/p/display/assets/img/icon_cart_toy_hover.svg) no-repeat 0 0;
    color: #fff;
  }
`
export default Item

import React from 'react'
import styled from 'styled-components'
import { Grid, Text, Input, Button, Images } from '../elements/index'

const LimitProduct = (props) => {
  // 타임 한정 수량 특가
  return (
    <>
      <Grid className="ovfHidden borderRadius-10" position="relative;">
        <Images src={props.thumbnail} />
        <ImgBlock />
      </Grid>
      <Text>{props.itemName}</Text>
      <Text>{props.price}원</Text>
      <Text>{props.discount}%</Text>
      <Text>{props.discription}</Text>
    </>
  )
}

LimitProduct.defaultProps = {
  width: '50%',
  margin: '0 15px',
  src: 'https://contents.lotteon.com/itemimage/_v100629/LM/57/02/01/63/69/87/8_/00/1/LM5702016369878_001_1.jpg/dims/optimize/dims/resizef/555x555',
  itemName: '상품명',
  price: '50000',
  discount: '25',
  discription: '상품 설명',
}

const ImgBlock = styled.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.02);
`
export default LimitProduct

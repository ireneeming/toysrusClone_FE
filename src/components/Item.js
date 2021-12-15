import React from 'react'
import styled from 'styled-components'
import { Grid, Text, Input, Button, Images } from '../elements/index'

const Item = (props) => {
  const { three } = props
  // console.log(props)

  // 타임 한정 수량 특가
  if (three) {
    return (
      <>
        <Grid width="33%" height="434px">
          <Grid className="ovfHidden borderRadius-10" position="relative;">
            <Images src={props.src} />
            <ImgBlock />
          </Grid>
          <Text>{props.itemName}</Text>
          <Text>{props.price}원</Text>
        </Grid>
      </>
    )
  }
  return (
    <>
      <Grid width="25%" height="434px">
        <Grid className="ovfHidden borderRadius-10" position="relative;">
          <Images src={props.thumbnail} />
          <ImgBlock />
        </Grid>
        <Text>{props.itemName}</Text>
        <Text>{props.price}원</Text>
      </Grid>
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
  width: ${(props) => props.width};
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.02);
`
export default Item

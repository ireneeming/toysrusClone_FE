import React from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

const Count = (props) => {
  const data = useSelector((state) => state.item.list)
  // const price = String(data.price).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')

  const { cart } = props
  const [number, setNumber] = React.useState(0)

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1)
  }

  const onDecrease = () => {
    if (number > 0) {
      setNumber(number - 1)
    }
  }

  const a = number * data.price
  const price = String(a).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')

  if (cart) {
    return (
      <>
        <WrapCount>
          <SpinnerBox>
            <Minus onClick={onDecrease}></Minus>
            <Number>{number}</Number>
            <Plus onClick={onIncrease}></Plus>
          </SpinnerBox>
        </WrapCount>
      </>
    )
  }

  return (
    <>
      <WrapCount>
        <SpinnerBox>
          <Minus onClick={onDecrease}></Minus>
          <Number>{number}</Number>
          <Plus onClick={onIncrease}></Plus>
        </SpinnerBox>
        <BoldText>
          {price} <span>원</span>
        </BoldText>
      </WrapCount>
    </>
  )
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

export default Count

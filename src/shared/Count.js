import React from 'react'
import styled from 'styled-components'

const Count = (props) => {

  const{cart}=props;
  const [number, setNumber] = React.useState(0)

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1)
  }

  const onDecrease = () => {
    if (number > 0) {
      setNumber(number - 1)
    }
  }
  if(cart) {
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
        <div>
          {number * 49900} <span>원</span>
        </div>
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

const SpinnerBox = styled.div`
  width: 110px;
  height: 32px;
  border: 1px solid #ddd;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`

const Number = styled.div`
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
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

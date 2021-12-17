import React from 'react'
import styled from 'styled-components'
import Count from '../shared/Count'
import { useDispatch } from 'react-redux'
import { actionCreators as itemActions } from '../redux/modules/item'
import { useSelector } from 'react-redux'

const DetailSticky = () => {
  const dispatch = useDispatch()

  const data = useSelector((state) => state.item.list)
  const price = String(data.price).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  const itemId = data.itemId

  //count
  const [number, setNumber] = React.useState(1)
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1)
  }

  const onDecrease = () => {
    if (number > 1) {
      setNumber(number - 1)
    }
  }

  const a = number * data.price
  const Totalprice = String(a).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')

  const addCart = () => {
    //장바구니 담기

    dispatch(itemActions.addCartSP(itemId, number))
    console.log('확인!!!! ', itemId, number)
    if (number > 0) {
      window.alert('상품이 장바구니에 담겼습니다!')
    } else {
      window.alert('수량을 선택해 주세요!')
    }
  }
  return (
    <>
      <OptionContents>
        <DivText>
          <div>
            <TextP>오늘 17:21~21:30 도착 예정</TextP>
            <TextP>판매자:롯데마트</TextP>
            <TextDiv>
              <TextSmall>7개 남음</TextSmall>
            </TextDiv>

            <UnderLine></UnderLine>
          </div>
          <WrapCount>
            <SpinnerBox>
              <Minus onClick={onDecrease}></Minus>
              <Number>{number}</Number>
              <Plus onClick={onIncrease}></Plus>
            </SpinnerBox>
            <BoldText>
              {Totalprice} <span>원</span>
            </BoldText>
          </WrapCount>
        </DivText>
        <Margin></Margin>
        <div>
          <button className="cart" onClick={addCart} style={{ cursor: 'pointer' }}>
            장바구니 담기
          </button>
          <div className="buttonBorder"></div>
        </div>
      </OptionContents>
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
  cursor: pointer;
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
  cursor: pointer;
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

const OptionContents = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding: 24px 20px 50px;
  width: 315px;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
`

const DivText = styled.div`
  padding: 20px 20px 16px;
  background-color: #f8f8f8;
  border-radius: 8px;
  height: 168px;
`

const Margin = styled.div`
  margin: 450px 0px;
`

const TextDiv = styled.div`
  position: relative;
  margin-top: 12px;
`

const TextSmall = styled.p`
  font-size: 13px;
  color: #333;
  margin: 8px 0px;
`

const UnderLine = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 20px 0px;
`

const TextP = styled.p`
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: -0.3px;
  color: #757575;
`

export default DetailSticky

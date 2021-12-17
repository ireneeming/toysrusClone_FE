import React from 'react'
import styled from 'styled-components'
import { Grid, Button, Text, Input, Images } from '../elements'
import Count from '../shared/Count'
import './DetailText.css'
import { history } from '../redux/configureStore'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators as itemActions } from '../redux/modules/item'

const DetailText = (props) => {
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
    //console.log('확인!!!! ', itemId, number)
    if (number > 0) {
      window.alert('상품이 장바구니에 담겼습니다!')
    } else {
      window.alert('수량을 선택해 주세요!')
    }
  }

  return (
    <>
      <div className="Wrap">
        <div className="brand">
          <sapn className="span">브랜드</sapn>
          <text className="smallT">레고</text>
        </div>
        <div className="title">
          <h1 className="textH1">{data.itemName}</h1>
        </div>
        <div className="price">
          <div>
            <text className="priceText">{price}</text>
            <em className="won">원</em>
          </div>
          <div className="form">
            <a className="atag">
              <strong className="boxfont">롯데오너스</strong>
              <em>무료배송</em>
              <em>추가 0.5%적립</em>
            </a>
            <img url="https://static.lotteon.com/p/product/assets/img/icon_lotte_oners_purple_arrow.svg"></img>
          </div>
        </div>
        <div className="select">
          <div className="priceOption">
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
          </div>
        </div>
        <div>
          <button className="cart" onClick={addCart}>
            장바구니 담기
          </button>
          <div className="buttonBorder"></div>
        </div>
        <Grid1>
          <GridFlex>
            <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOKADAAQAAAABAAAAOAAAAAANV2hTAAAGgklEQVRoBe1ZC0xVZRz/zr3BQAJu0JSHkI3mVpm8ZSwxKpPlqkETesyImdJjc7XVGlgGrcSt9VqtTc3V1nRLYVJMQicEywyR55JqDtRlg6jx1IDrfZ1+3+l8Z999nPs4XPCunbOd+/++//v///7f43yXEP3RM6BnQM+AngE9A6oZENQoubm5KTab7XXQY9R4Fgl/1WAwtPX29n4TDP2qAWZkZByFgdJgGNGiQxCEV/v7+z/UIsvLGPiOS/uyS39Ju6Iovp+dnZ26UKM3qSkoLi6ubmpqOolMLmmJOhyOVxDcffBLAEwHvKLmoz941RL1R3gxeDA1DkDvDqobc/HJvr6+Iwux461EF6I3ZGSlEt30wUSKzSwcIgJZFTTPRDJuMAjbW6tv6Q+aTg2KpACtFmErIeIGImrQoC6S6hDFnSBvU2fxTsEcFGpra5Uqq6mpEbEmBOSlNAc37p3KdDjEVpGIcd5NBkQ1GwShtG1X3PFApPg56EkOAY7jPZCWlvZ2fX29xRMPj5NGkJZR6VFx+dzFmaCtmMvSYmfrywSfDvDO+NPGqN6Kd9fw8PBqwDJfI6psE3DGDgNT/hhZKh44PwdbVs4e3TqkQQDckpWVVQdaNUd3ayr17UYJAQQC3IbTjIl7Y4F7i7mGIKsQZAXre4LSCD7w3nQasTkaiSje5olJC04kwoRgFLd+XxX/kxZ5NRkE+w7m6WrQsTASgoPB/szMzEvA/+BJRhpB0e4oQzbuwfIUE6wXq/LtxEG2ezK6UFxiYiLVe0bWEw54DCN5hye9UoAGMexbgQi/e2LQikMpTRhF42Gt8t7kWlparhuNxmLwXKJ8GJx4jOTxwsJCk6tcyB3V0tPTv0ZynqCOAh6D87+5Os36NDAc5yoAI2T+EyjVhxldwvGdUGhjPjXD4c0afaEHgZUIcpTJh/QqypwMANKKdFoopVWUKajcL4axtjeYVEnstYLg8MajlYbRm+Zkv8SI+HOWfQFyd1E5QKdpJwW4ac/kGhsRTwyNTyZzylWbQ3XEfP/eyZfbq+Pop02wn1mmEPPrpD+fSyhrWtJSgEyWQalErQbyKLYHv4KTBSNw5K1gSkIZSiNoJIYjDuLYAkdX+eMskjGL7+2P/OG90TxSgK3VJrqfZN9oZxbD/v9tFXXLkdMq6kblEDgK3YnueqxScXjHcJJox93lFY5lMZo5WEBWQrEFC85gdHT06Y6ODlsghnwGuG7dunir1boPRyE6R5XHbreLMP5pREREVWdn57xCCGIDNl9j6mCPTE9PX8jJySnv6ek5x/AydNoaeJoqgTIhALppnsWIJfBCfBv71AjonwB3ncdrbUNflQ97NgRehwpqpTYwskYE/xlkpG0C+LWorPPMvq8AT0Fwo8xsgfEGvEPAZeB9DHiv8syIVggb5xHAd5CPQpsermm5qj7wbSYhIWEFPYwzJlUHcatcjMw0yozXwsLCNnR3dw8wQXyT0c2V3reo6mC8WiACOl1SUlKISyfpxAR/YuFPM3Td60kfgrPifRwHA+qT8qg6h/I8CCPPUU5k8U0I7lGk5AZ4DoPnadqF8jaATpkUMIB8HErvJVlwAt98yfxIUDz+ELob68GgzEPve05Bjl61/Ak/vhoYGHD7uPa2yKTKimiA7OOSoSQI5R1cgBeQhN1ODAF0UBEPgZ0FeNY1OKoKFfQLkjoDm7HohkdGRpb6WuBU90Eo+YcqpQ8yu/y/ltuvggePwu/G5R9COYMicSs8iaBMlwF/M6WBx1ZUVKTMNU/8FKcaIGg9TAjOv4iAnco5Pz8/ErgKxsPzczi/m1FRUXTlk64ZoTcLweS5CgNfidco4/vZ/HTl4/tOTvMEBJBsNpt/hULpmg4Za0Cp0hK8CNxaBP0x2utlmctYntdgeabXfJoflN8+6H5eVvAX4E6TydQyPz8fhblXDpvvAkfvYOi0eQZT4hBte3tUA6RCOL3sgFLXTyKctZ1WThHBPYjg2r0Z8oeWl5cXY7FYBhFkCsfvao+SmrGgPMLxqDa9lShBhj7HyFVBWiodWYuSFNBmkMnyYARHdXd1dV1FsjZD78+yLQoUezKuMTw8/FmO7rXJ6lmVaWxs7ExSUlITGOilK129jIB/ADZgb3wKwf2oKqyBMDo6+ndBQcEXU1NTc7BD/yuJBLwGeA7wDYzc7pGRkUU5GmpwVxfRM6BnQM+AngE9A3oG9AzoGdAzoJqBfwGAjnCi0OZmkQAAAABJRU5ErkJggg=="></Img>
            <TextNomal>오늘 12:50~17:00 도착 예정</TextNomal>
            <TextNomal>-당일배송</TextNomal>
            <Imgarrow src="https://static.lotteon.com/p/product/assets/img/icon_page_arrow.svg"></Imgarrow>
            <UnderlineText>더보기</UnderlineText>
          </GridFlex>
          <div>
            <TextPadding>2만원 이상 구매 시 무료</TextPadding>
          </div>
          <GridFlex>
            <Center>
              <Images width="28px" height="28px" src="https://static.lotteon.com/p/product/assets/img/icon_pddetail_smartPick.svg"></Images>
              <TextM>스마트픽</TextM>
              <Imgarrow src="https://static.lotteon.com/p/product/assets/img/icon_page_arrow.svg"></Imgarrow>
            </Center>
          </GridFlex>
        </Grid1>
        <Grid1>
          <GridFlex>
            <div>
              <BasicText>카드혜택</BasicText>
              <BasicText>무이자 할부 안내</BasicText>
            </div>
            <UnderlineText>더보기</UnderlineText>
          </GridFlex>
        </Grid1>
        <Grid1>
          <GridFlex>
            <BasicText>적립혜택</BasicText>
            <div>
              <Img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAALKADAAQAAAABAAAALAAAAAD8buejAAAEf0lEQVRYCe1YT2wUVRj/zZ/O7rbbZUvtQtGQ6AVOnkyICaALhhghkTMEL16I0eDBBG94MlEPqCQciEYvRhMTT0RjBGsgEA4mJB7kUC40NNA1pcWWbndnd56/b6bbZvfNdPbPFC/zJTsz75v3ft9vf+97M/M+ILVUgTYFjLZWAg31J4YrVezMOXhc2If5BCDbIBIhXJnC/qaHkwQ7rhR2rkcwUOX1lAn8UDLxo1HG6vq9Pi/6JkxiZuV3vKmAs7zeJ/EtG8rOwLCGAK8JNOuAWwuYMVCFV19kLFwcK2Mx8PZ+7JmwmkZmbganSPQDKOwxDKhMHsbwGOCM6ASEdJX0VhbgeR5M9l/mH7zkWDg/XsZ9fcTmnq4Jz99Cob6M0xzwPslOCtHcNhgj41TW2TyI3FWeTxorj6CaDRgc7xLrO1vhs/HX8Hc8QtAjlvA/1zDpNUjSw2kSLZgmvNwYzBEqanLqezaCVB8DT0i8UfOJ04PL/AOf7DiEG3F4kYTnp/Ccq/ARiZ4iiCP5ObydU18EkzQOtrv7tSUS53OkLkuTRtI3DRPndpRxJfDox1DClas4yBm8zFwbtR2oERLl9FNSHSAJj7sCLJN4bTlA4yx+SrXPhmFrhNUUsnNN3IOBidESFd0eNmxrfA0+9Bbu8wHjwrQMvFE6jF86I2maPVQ4zKQq5YpPl6wQs7NAcVcwj5zhE51kpa0RNhV2yw0nJ8enb0OMK08giubz6GRgdzo8vhB8n5YsnT2DdqNio34veFxwwSCzpwYzT336tbW4PIUubY1wr3GErPtgA8YqNuHk+bbYItNSYoviJAabEk5MygigVOEIYRJzpwonJmUEUKpwhDCJuVOFlWx8ttA2PgL6DNK5+6hNO5APIn5Ph5q1rYnsi/3v9gcm7Ox24c5y/yQ7M5qcG4vRmdZYMAciHI0cxI89Ws80MPzSKuTTshvrtl8U1sAKC7A96SL/atNPBeVF5MIaAyvPCssAphHmBlCx4MG57Q1VPtqT/A5maoUy0CZSGZgRqtwI/i8mlSKS5S6JG+EQ0whnbdxg5ycrixw32OyFhIt3SZ1CjIx/Da7ajxrh4gEssMvHVNh4NAPlrhU52ocl32J1Cf8+YDkrKBPeZrXz+7AokSvk4VWc54AzMj1D3H6zmIJsgZ7IEWHw8T4RhPU2rC5xRhmLI26zeHN04iBIX7dNw8/9gZeZFh8y/Y9xBZh+uYr1CtbWYGrLVQeP9BCMBH2irTIV+97hgv+8VMbXTIfIZNyUcCvg3HW8oOp4Fx7e5qIsSN2AahuiuhQ/ujWpGVeZcCy9tiqY8iz4mXhflg7hN8GNw+qKcAuElfY8p+0t1i7eI/Re8Uu6ZEeDn5Vp9dw4y8KVmpkoyrM/7QzKFr4xLVygonc3esdf9US4BSe5RvJHeH6Hv9fp9yvEfIspTqsh6UI/uJAUVV2PQQX/Yt+v+Me+ndjvk25Bdn1eB+t6REdHKXSz+nhM8py/58nzWXZhGRFLBJ9le5bta8z/n0qvYLpjeNpMFRhUgf8AEBpbGWthdPMAAAAASUVORK5CYII="></Img>
              <TextNomal>L.POINT 최대</TextNomal>
              <TextNomal>120P</TextNomal>
            </div>
            <UnderlineText>더보기</UnderlineText>
          </GridFlex>
        </Grid1>
        <Div>
          <ImageLotte src="https://kimkong2.s3.ap-northeast-2.amazonaws.com/mart+(2).png"></ImageLotte>
          <TextLotte>롯데마트</TextLotte>
        </Div>
      </div>
    </>
  )
}

const Grid1 = styled.div`
  padding: 20px 0px;
  position: relative;
  border-bottom: 1px solid #eee;
  padding: 20px 0;
  width: 100%;
`
const GridFlex = styled.div`
  display: flex;
  align-items: center;
  vertical-align: center;
  justify-content: space-between;
`

const Center = styled.div`
  align-items: center;
  height: 28px;
`

const Div = styled.div`
  padding: 20px 0px;
  position: relative;
  padding: 20px 0;
  margin-bottom: 20px;
  width: 100%;
  align-items: center;
  vertical-align: center;
`

const Img = styled.img`
  width: 22px;
  height: 22px;
  padding-top: 8px;
`

const Imgarrow = styled.img`
  width: 14px;
  height: 14px;
`

const ImageLotte = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 36px;
  src: 'https://contents.lotteon.com/display/prfl/LM000000/PB1479E0639F6841D71D66F0C5E2840D2E6264DA46E2C33737F33C856B3D7BAA0/file';
`

const TextLotte = styled.text`
  color: #333;
  font-size: 16px;
  font-weight: 600;
  margin: 8px;
  padding-bottom: 25px;
`

const UnderlineText = styled.div`
  color: #757575;
  border-bottom: 1px solid #757575;
  font-size: 13px;
`
const TextPadding = styled.text`
  color: #333;
  font-size: 15px;
  margin-left: 40px;
`

const TextNomal = styled.text`
  color: #333;
  font-size: 15px;
`
const TextM = styled.text`
  margin-bottom: 28px;
  margin-left: 10px;
  font-size: 15px;
  color: #333;
`

const BasicText = styled.text`
  color: #333;
  font-size: 15px;
  margin-right: 30px;
`
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

export default DetailText

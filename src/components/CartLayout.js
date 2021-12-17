import React from 'react'
import styled from 'styled-components'
import { Grid, Text, Input, Button, Images } from '../elements/index'
import Checkbox from '@material-ui/core/Checkbox'
import Count from '../shared/Count'

import { history } from '../redux/configureStore'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { actionCreators as itemActions } from '../redux/modules/item'
import { tableSortLabelClasses } from '@mui/material'

const CartLayout = (props) => {
  const dispatch = useDispatch()

  const { layout } = props

  const cart_list = useSelector((state) => state.item.cartList)
  const user_address = useSelector((state) => state.item.userInfo)
  const newCount = useSelector((state) => state.item.cartCount)
  const id = useSelector((state) => state.item.cartCount)

  const [count, setCount] = React.useState('count')

  console.log('이것만 나오면 되는데!/.', newCount)

  console.log('유저 주소정보 뽑아오기', user_address)

  const cartPrice = cart_list.map((list) => {
    //console.log('여기부터', list)
    const a = list.count
    const b = list.price
    return a * b
  })

  //console.log('제발 나와', cartPrice)
  const totalPrice = cartPrice.reduce((a, b) => {
    return a + b
  }, 0)

  //console.log('너도 제발 나와', totalPrice)
  const lastPrice = String(totalPrice).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')

  React.useEffect(() => {
    dispatch(itemActions.getCartSP())
  }, [])

  const [number, setNumber] = React.useState(0)

  const onIncrease = () => {
    setNumber(number + 1)
    //console.log('나오냐0', setNumber)
    dispatch(itemActions.increase())
  }

  const onDecrease = () => {
    if (number > 0) {
      setNumber(number - 1)
      dispatch(itemActions.decrease())
    }
  }

  if (layout === 'normal') {
    return (
      <>
        <Normal>
          {/* 배송지 및 주문내역 */}
          <div className="delivery_left">
            <div className="Homeaddress flexSpaceBetween">
              <Text>{user_address}</Text>
              <button>배송지 설정 </button>
            </div>
            <div className="cartWrap accordion">
              <input type="checkbox" id="list01"></input>
              <label htmlFor="list01">
                롯데마트 <span>매장택배 | </span> <em></em>
              </label>
              <div className="newItem">
                {/* 상품 리스트 li 영역 start */}
                <ul>
                  {/* list 얘를 맵을 돌려주면 되는데에에 */}

                  {cart_list.map((p, idx) => {
                    let total = p.count * p.price
                    const price = String(total).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                    let number = p.count

                    return (
                      <>
                        <li className="newList" key={p.id}>
                          <div className="newItemDetail">
                            <Checkbox defaultChecked size="small" inputProps={{ 'aria-label': 'checkbox with small size' }} />
                            <label>{p.itemName}</label>
                            <div className="titleDetailWarp flexStart alignitemT">
                              <div className="imgDetail">
                                <img src={p.thumbnail} alt="" style={{ width: '100%' }} />
                              </div>
                              <div className="titleDetail">
                                <p>{p.itemName}</p>
                                <p>단일상품 혹은 상품 갯수 정하기 </p>
                              </div>
                            </div>
                            <div className="count">
                              <WrapCount>
                                <SpinnerBox>
                                  <Minus
                                    onClick={() => {
                                      dispatch(itemActions.editDecrease(`${p.itemId}`, `${p.count}`))
                                      console.log('버튼 눌려?')
                                    }}
                                  ></Minus>

                                  <Number>{p.count}</Number>
                                  <Plus
                                    onClick={() => {
                                      dispatch(itemActions.editIncrease(`${p.itemId}`, `${p.count}`))
                                      console.log('버튼 눌려?')
                                    }}
                                  ></Plus>
                                </SpinnerBox>
                              </WrapCount>
                            </div>
                            <div className="totalPrice">{price}</div>
                          </div>
                        </li>
                      </>
                    )
                  })}
                </ul>
                <div className="deliveryInfo">
                  <p>
                    {lastPrice}원 + 배송비 0원 - 할인 0원 = <b>{lastPrice}</b>원(<span className="fontRed">30,000원 이상</span> 무료배송)
                  </p>
                </div>
                {/* 상품 리스트 영역 end */}
              </div>
            </div>
          </div>

          {/* 결제예정금액 */}

          <div className="delivery_right">
            <Text className="priceTitle">결제예정금액</Text>

            <Grid className="flexSpaceBetween">
              <Text className="priceList">상품금액</Text>
              <Text className="priceList" align="right" bold color="">
                {lastPrice} 원
              </Text>
            </Grid>
            <Grid className="flexSpaceBetween">
              <Text className="priceList">배송비</Text>
              <Text className="priceList" align="right" bold>
                0 원
              </Text>
            </Grid>
            <Grid className="flexSpaceBetween" padding="0 0 18px 0">
              <Text className="priceList">상품할인금액</Text>
              <Text className="priceList" align="right" bold>
                0 원
              </Text>
            </Grid>
            <div className="horiLine"></div>
            <Grid className="flexSpaceBetween" padding="17px 0 18px 0">
              <Text className="priceList">총 2건</Text>
              <Text className="totalTotalPrice" align="right" bold>
                {lastPrice}
                <span className="won">원</span>
              </Text>
            </Grid>
            <Grid>
              <Button
                red_btn
                text="주문하기"
                _onClick={() => {
                  window.alert('주문이 불가합니다!')
                  history.push('/')
                }}
              />
              <Button className="giftBtn" text="선물하기" />
            </Grid>
          </div>
        </Normal>
      </>
    )
  }

  if (layout === 'holiday') {
    return (
      <>
        <Normal>
          {/* 배송지 및 주문내역 */}
          <div className="delivery_left">
            <div className="noItem">
              <Text size="15px" margin="140px 0 0 0" align="center" color="#333">
                장바구니에 담긴 상품이 없어요.
              </Text>
            </div>
          </div>

          {/* 결제예정금액 */}

          <div className="delivery_right">
            <Text className="priceTitle">결제예정금액</Text>

            <Grid className="flexSpaceBetween">
              <Text className="priceList">상품금액</Text>
              <Text className="priceList" align="right" bold color="">
                0 원
              </Text>
            </Grid>
            <Grid className="flexSpaceBetween">
              <Text className="priceList">배송비</Text>
              <Text className="priceList" align="right" bold>
                0 원
              </Text>
            </Grid>
            <Grid className="flexSpaceBetween" padding="0 0 18px 0">
              <Text className="priceList">상품할인금액</Text>
              <Text className="priceList" align="right" bold>
                0 원
              </Text>
            </Grid>
            <div className="horiLine"></div>
            <Grid className="flexSpaceBetween" padding="17px 0 18px 0">
              <Text className="priceList">총 0건</Text>
              <Text className="totalTotalPrice" align="right" bold>
                0<span className="won"> 원</span>
              </Text>
            </Grid>
            <Grid>
              <Button red_btn text="주문하기" />
              <Button className="giftBtn" text="선물하기" />
            </Grid>
          </div>
        </Normal>
      </>
    )
  }

  if (layout === 'regular') {
    return (
      <>
        <Normal>
          {/* 배송지 및 주문내역 */}
          <div className="delivery_left">
            <div className="noItem">
              <Text size="15px" margin="140px 0 0 0" align="center" color="#333">
                장바구니에 담긴 상품이 없어요.
              </Text>
            </div>
          </div>

          {/* 결제예정금액 */}

          <div className="delivery_right">
            <Text className="priceTitle">결제예정금액</Text>

            <Grid className="flexSpaceBetween">
              <Text className="priceList">상품금액</Text>
              <Text className="priceList" align="right" bold color="">
                0 원
              </Text>
            </Grid>
            <Grid className="flexSpaceBetween">
              <Text className="priceList">배송비</Text>
              <Text className="priceList" align="right" bold>
                0 원
              </Text>
            </Grid>
            <Grid className="flexSpaceBetween" padding="0 0 18px 0">
              <Text className="priceList">상품할인금액</Text>
              <Text className="priceList" align="right" bold>
                0 원
              </Text>
            </Grid>
            <div className="horiLine"></div>
            <Grid className="flexSpaceBetween" padding="17px 0 18px 0">
              <Text className="priceList">총 0건</Text>
              <Text className="totalTotalPrice" align="right" bold>
                0<span className="won"> 원</span>
              </Text>
            </Grid>
            <Grid>
              <Button red_btn text="주문하기" />
              <Button className="giftBtn" text="선물하기" />
            </Grid>
          </div>
        </Normal>
      </>
    )
  }
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

const Normal = styled.div`
  display: flex;
  justify-content: space-between;

  .delivery_left {
    width: 786px;

    .Homeaddress {
      width: 100%;
      border-bottom: 1px dashed #ccc;
      margin: 0 0 40px 0;
      padding: 0 0 20px 0;

      button {
        border: none;
        background: none;
      }
    }
    .noItem {
      width: 100%;
      height: 262px;
      border: 1px solid #ddd;
      border-radius: 10px;
      background: url(//static.lotteon.com/p/order/assets/img/icon_no_result_cart.svg) no-repeat;
      background-position: 50% 70px;
    }

    .accordion {
      .list01 span {
        font-size: 12px;
      }

      input[id='list01'] {
        display: none;
      }
      input[id='list01'] + label {
        position: relative;
        display: block;
        padding: 20px;
        border: 1px solid #ddd;
        cursor: pointer;
        border-radius: 10px 10px 0 0;
      }
      input[id='list01'] + label em {
        position: absolute;
        top: 50%;
        right: 10px;
        width: 30px;
        height: 30px;
        margin-top: -15px;
        background: #ddd;
      }
      input[id='list01'] + label + div {
        min-height: 100px;
        padding: 0;
        border-radius: 0 0 10px 10px;
        margin-top: -1px;
        transition: all 0.35s;
        overflow: hidden;
      }
      input[id='list01']:checked + label {
        border-top: 1px solid #ddd;
        border-right: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        border-left: 1px solid #ddd;

        border-radius: 10px;
      }

      input[id='list01']:checked + label + div {
        height: 0;
        min-height: 0;
        border: none;
      }
      .newItem {
        width: 100%;
        height: auto;
        padding: 24px 10px 24px 20px;
        border: 1px solid #ddd;
        box-sizing: border-box;

        .newList {
          border-bottom: 1px solid #ddd;
        }
        .newList:last-child {
          border-bottom: none;
        }

        .deliveryInfo {
          padding: 20px;
          background-color: #fef5f4;
          color: #757575;
          font-size: 13px;
          letter-spacing: 0;
          font-weight: 300;
        }
      }
      .newItem label {
        display: none;
        text-indent: -999;
      }
      .newItemDetail {
        display: flex;
        justify-content: flex-start;
        padding: 24px 10px 24px 20px;

        .titleDetailWarp {
          margin: 0 10px;

          .titleDetail {
            width: 230px;
            margin: 0 10px;
          }
          .imgDetail {
            width: 80px;
            height: 80px;
            overflow: hidden;
            border-radius: 10px;
          }
        }

        .count {
          min-width: 140px;
          padding: 0 20px;
          text-align: center;
          border-left: 1px solid #eee;
          border-right: 1px solid #eee;
        }
        .totalPrice {
          min-width: 160px;
          padding: 0 20px;
          text-align: center;
        }
      }
    }
  }
  .delivery_right {
    width: 300px;
    height: 355px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 24px 20px 20px 20px;
    box-sizing: border-box;

    .priceTitle {
      font-size: 20px;
      line-height: 1.4;
      margin-bottom: 28px;
    }
    .priceList {
      display: block;
      width: 50%;
      font-size: 14px;
      color: #757575;
      padding-top: 3px;
      line-height: 1.57;
    }
    .totalTotalPrice {
      font-size: 28px;
      font-weight: 700;
      color: #ef2a23;
    }
    .won {
      font-size: 22px;
      font-weight: 300;
      color: #ef2a23;
    }

    .giftBtn {
      margin-top: 8px;
      font-size: 13px;
      height: 33px;
    }
  }
`
export default CartLayout

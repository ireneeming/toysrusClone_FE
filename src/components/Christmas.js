import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { history } from '../redux/configureStore'

import { Grid, Text, Input, Button, Images } from '../elements/index'

import './Christmas.css'

const Christmas = (props) => {
  const price = String(props.price).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
  return (
    <>
      <div className="slideWrap">
        <div>
          <div className="thumb" style={{ background: '#fff', textAlign: 'center' }}>
            <Images width="auto" height="203px" src={props.thumbnail}></Images>
          </div>

          <div className="TextGrid">
            <div>
              <text className="smallTextBox">당일배송</text>
            </div>
            <div className="TextTitle">
              <TextTitle>{props.itemName}</TextTitle>
            </div>
            <div>
              <text className="PriceText">
                <b>{price}</b>
                <span className="mainwon">원</span>
              </text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const TextTitle = styled.strong`
  font-size: 17px;
  color: #333;
  margin: 0px 2px;
  font-weight: 600px;
`
const CartBtnDiv = styled.div`
  position: absolute;
    right: -1px;
    bottom: -2px;
    width: auto;
    height: auto;
    margin: 0;
    border: none;
}
`

const ButtonCart = styled.button`
  position: relative;
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
export default Christmas

import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  const { className, search_btn, position, width, text, _onClick, red_btn, cart_btn, round_btn, margin } = props
  const styles = {
    position: position,
    width: width,
    margin: margin,
    className:className,
  }
  if (search_btn) {
    return (
      <SearchBtn onClick={_onClick} {...styles}></SearchBtn>
    )
  }


  if (cart_btn) {
    return (
      <BtnCircle onClick={_onClick} {...styles}>
        {text}
      </BtnCircle>
    )
  }

  if (round_btn) {
    return (
      <BtnBorderRound onClick={_onClick} {...styles}>
        {text}
      </BtnBorderRound>
    )
  }

  if (red_btn) {
    return (
      <BtnRed onClick={_onClick} {...styles}>
        {text}
      </BtnRed>
    )
  }

  return (
    <Btn onClick={_onClick} {...styles}>
      {text}
    </Btn>
  )
}

Button.defaultProps = {
  position: false,
  width: '100%',
  text: '텍스트',
  margin: '',
  _onClick: () => {},
  _disabled: () => {},
}
const SearchBtn = styled.button`
position:absolute;
top: 8px;
right: 15px;
opacity: 1;
width: 28px;
height: 28px;
outline: none;
border:none;
cursor:pointer;

`;



const BtnCircle = styled.button`
  background-image: url(https://static.lotteon.com/p/display/plugin/assets/img/icon_cart_toy.svg);
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 52px;
`

const BtnBorderRound = styled.button`
  position: ${(props) => (props.position ? `${props.position}` : '')};
  display: inline-block;
  right: 13px;
  height: 50px;
  padding: 0 20px 0 20px;
  border-radius: 25px;
  border: 1px solid #555;
  background-color: #fff;
  -webkit-box-shadow: 0 5px 14px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 5px 14px 0 rgb(0 0 0 / 10%);
  font-size: 14px;
  line-height: 48px;
  letter-spacing: -0.3px;
  color: #333;
`

const Btn = styled.button`
  position: ${(props) => (props.position ? `${props.position}` : ' ')};
  min-width: 64px;
  width: ${(props) => props.width};
  height: 44px;
  padding: 0 18px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -0.23px;
  color: #333;
  border: 1px solid #ddd;
  background-color: #fff;
`

const BtnRed = styled.button`
  position: ${(props) => (props.position ? `${props.position}` : ' ')};
  min-width: 64px;
  width: ${(props) => props.width};
  height: 44px;
  padding: 0 18px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -0.23px;
  color: #fff !important;
  border: none;
  background-color: #ef2a23;
`

export default Button

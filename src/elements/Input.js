import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
  const { search, boxSizing, register, type, placeholder, label, margin, _onChange, padding, textarea, height, value } = props

  const styles = {
    margin: margin,
    padding: padding,
    boxSizing: boxSizing,
    height: height,
  }

  if (register) {
    return <InputRegister type={type} placeholder={placeholder} onChange={_onChange} value={value} {...styles} />
  }

  
  if (search) {
    return <Search type={type} placeholder={placeholder} onChange={_onChange} value={value} {...styles} />
  }
  

  return <InputBox type={type} placeholder={placeholder} onChange={_onChange} value={value} {...styles} />
}

Input.defaultProps = {
  label: '',
  placeholder: '텍스트',
  type: 'text',
  value: '',
  padding: '10px',
  boxSizing: 'border-box',
  _onChange: () => {},
  height: '60px',
}

const InputBox = styled.input`
  width: 100%;
  margin-top: 10px;
  height: 50px;
  padding: 0 16px;
  border: 0;
  border-radius: 6px;
  background: #f5f5f5;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`

const InputRegister = styled.input`
  height: 48px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ddd;
  height: 44px;
  border-radius: 6px;
  padding: 0 14px;
  color: #333;
  font-size: 14px;
  box-sizing:border-box;
`

const Search = styled.input`
  position:relative; 
  width: 450px;
  height: 48px;
  font-size: 16px;
  border-radius: 25px;
  padding: 8px 43px 8px 20px;
  color: #333;
  font-size: 14px;
  border:2px solid #1352a2;
  box-sizing:border-box;
`

export default Input

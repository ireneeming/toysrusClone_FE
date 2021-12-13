import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'

import { Grid, Button, Text, Input } from '../elements'

const Login = (props) => {
  const [checked, setChecked] = React.useState(true)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }

  return (
    <>
      <Grid maxWidth="420px" margin="auto" padding="45px 0px 120px 0px ">
        <Grid margin="60px 0px 0px 0px">
          <Text h2>로그인</Text>
        </Grid>
        <Grid1 display="flex">
          <Input placeholder="아이디 또는 이메일 아이디"></Input>
        </Grid1>
        <Grid1 display="flex">
          <Input placeholder="8~15자리 영문+숫자+특수문자 조합"></Input>
        </Grid1>
        <Grid margin="24px 0px 0px 0px">
          <Button red_btn>로그인하기</Button>
        </Grid>
        <TextDiv>
          <Checkbox defaultChecked size="small" inputProps={{ 'aria-label': 'checkbox with small size' }} />
          <SmallText>아이디 저장</SmallText>
          <Btn>회원가입</Btn>
        </TextDiv>
      </Grid>
    </>
  )
}

const Grid1 = styled.div`
  display: flex;
`

const TextDiv = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-top: 14px;
`

const SmallText = styled.text`
  font-size: 14px;
  color: #333;
  padding-left: 8px;
  letter-spacing: -0.023em;
`

const Btn = styled.button`
  font-size: 13px;
  color: #999;
  padding-left: 11px;
  border: none;
  background-color: #fff;
`

export default Login

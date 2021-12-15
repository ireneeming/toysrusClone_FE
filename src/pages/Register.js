// import { Select } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Input } from '../elements';
// import Checkbox from '@material-ui/core/Checkbox';
// import RegisterAgree from '../components/RegisterAgree';

const Register = () => {
  return (
    <>
      <Grid position="relative" padding="45px 0px 120px 0px">
        <Grid maxWidth="530px" margin="auto">
          <Grid margin="60px 0px 28px 0px">
            <Text h2 size="36px">
              <Span>
                <img src="https://static.lotteon.com/p/member/assets/img/img_lotteOnLogin_small.svg"></img>
              </Span>
              이메일 간편회원 가입
            </Text>
          </Grid>
          <Grid margin="0px 0px 20px 0px">
            <Grid margin="0px 0px 9px 0px">
              <TextSmall size="15px">이름</TextSmall>
            </Grid>
            <Grid1>
              <Input width="350px" register placeholder="이름을 입력해 주세요."></Input>
            </Grid1>
          </Grid>
          <Grid margin="0px 0px 9px 0px">
            <TextSmall>이메일 아이디</TextSmall>
          </Grid>
          <GridFlex>
            <Input register placeholder="이메일을 입력해 주세요."></Input>
            <Grid width="33px" padding="0px 10px">
              <Text size="15px">@</Text>
            </Grid>
            <Selected>
              <Input register></Input>
              <option value={10}>선택</option>
              <option value={20}>naver.com</option>
              <option value={30}>hanmail.net</option>
              <option value={30}>nate.com</option>
              <option value={30}>gmail.com</option>
              <option value={30}>직접입력</option>
            </Selected>
          </GridFlex>
          <Grid margin="0px 0px 20px 0px">
            <Grid margin="0px 0px 9px 0px">
              <TextSmall size="15px">비밀번호</TextSmall>
            </Grid>
            <Grid1>
              <Input width="350px" register placeholder="아래의 조합으로 입력해 주세요."></Input>
            </Grid1>
            <CheckGrid>
              <TextPasswordCheck>영문</TextPasswordCheck>
              <TextPasswordCheck>숫자</TextPasswordCheck>
              <TextPasswordCheck>특수문자</TextPasswordCheck>
              <TextPasswordCheck>8~15자리</TextPasswordCheck>
            </CheckGrid>
          </Grid>
          <Grid margin="0px 0px 20px 0px">
            <Grid margin="0px 0px 9px 0px">
              <TextSmall size="15px">비밀번호 확인</TextSmall>
            </Grid>
            <Grid1>
              <Input width="350px" register placeholder="비밀번호를 다시 입력해 주세요."></Input>
            </Grid1>
          </Grid>
          <Grid margin="0px 0px 20px 0px">
            <Grid margin="0px 0px 9px 0px">
              <TextSmall size="15px">휴대폰 번호</TextSmall>
            </Grid>
            <Grid1>
              <Input width="350px" register placeholder="-없이 휴대폰 번호를 입력해주세요."></Input>
            </Grid1>
          </Grid>
          {/* <RegisterAgree></RegisterAgree> */}
        </Grid>
      </Grid>
    </>
  )
}

const GridFlex = styled.div`
  display: flex;
  align-items: center;
  vertical-align: center;
  margin-bottom: 20px;
`
const CheckGrid = styled.div`
  display: flex;
  margin-top: 8px;
`

const Grid1 = styled.div`
  display: flex;
`

const Selected = styled.select`
  height: 48px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ddd;
  height: 44px;
  border-radius: 6px;
  padding: 0 14px;
  color: #333;
  font-size: 14px;
`
const TextPasswordCheck = styled.text`
  display: inline-block;
  margin: 0px 0px 0px 6px;
  padding-left: 18px;
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.2px;
  color: #bfbfbf;
  background: url(//static.lotteon.com/p/member/assets/img/ico_check_gray.svg) no-repeat 0 0/16px 16px;
`

const Span = styled.span`
  display: block;
  padding-bottom: 5px;
`

const TextSmall = styled.text`
  font-size: '15px';
  margin: '0px 0px 9px 0px';
`

const Img = styled.img`
  width: 100%;
`

export default Register

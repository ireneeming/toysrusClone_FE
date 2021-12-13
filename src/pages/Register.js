import React from 'react'
import styled from 'styled-components'
import { Grid, Text, Input, Button } from '../elements'

const Register = () => {
  return (
    <>
      <Grid position="relative" padding="45px 0px 120px 0px">
        <Grid maxWidth="530px" margin="auto">
          <Grid margin="60px 0px 28px 0px">
            <Text h2>
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
          <Grid1>
            <Input register placeholder="이메일을 입력해 주세요."></Input>
            <Grid width="33px" padding="0px 10px">
              <Text size="15px">@</Text>
            </Grid>
            <Input register></Input>
          </Grid1>
          <Grid margin="30px 0px 40px 0px">
            <Button text="이메일 인증하기"></Button>
          </Grid>
          <Grid>
            <Span width="100%">
              <Img src="https://contents.lotteon.com/display/dshoplnk/29572/231/C001115/28862/P644B108A855DCFEA81661B7FC8111D23639737416F4A28681CCAAFF106FC0AEF/file"></Img>
            </Span>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

const Grid1 = styled.div`
  display: flex;
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

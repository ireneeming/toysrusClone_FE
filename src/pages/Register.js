// import { Select } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Grid, Text, Input,Button } from '../elements';
import Select from 'react-select';
// import Checkbox from '@material-ui/core/Checkbox';
// import RegisterAgree from '../components/RegisterAgree';

import { actionCreators as userActions } from '../redux/modules/user';

const Register = (props) => {

  const dispatch = useDispatch();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [domain, setDomain] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [pwdCheck, setPwdCheck] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');

  
  const handlePress = (e) => {
    const regex = /^[0-9\b -]{0,11}$/;
    if (regex.test(e.target.value)) {
      setPhone(e.target.value);
    }
  }

  
  

  const signup = () => {
    if(name=== '' || email ==='' ||domain=== '' || address=== '' ||pwd=== '' ||pwdCheck=== '' || phone=== '' ||address=== ''){
      window.alert('모든 정보를 넣어주세요.');
      return;
    }else if(pwd !== pwdCheck){
      window.alert('비밀번호가 일치하지 않습니다.');
      return;
    }else{
      dispatch(userActions.registerSP(name, email,domain, pwd ,pwdCheck,phone,address));
      

    }
    
  }

  return (
    <>
      <Grid position="relative" padding="45px 0px 120px 0px">
        <Grid width="530px" margin="auto">
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
              <Input value={name} _onChange={(e)=>{setName(e.target.value)}} width="350px" register placeholder="이름을 입력해 주세요."></Input>
            </Grid1>
          </Grid>
          <Grid margin="0px 0px 9px 0px">
            <TextSmall>이메일 아이디</TextSmall>
          </Grid>
          <GridFlex>
            <Input value={email} _onChange={(e)=>{setEmail(e.target.value)}} register placeholder="이메일을 입력해 주세요."></Input>
            <Grid width="33px" padding="0px 10px">
              <Text size="15px">@</Text>
            </Grid>
            <Selected name="domain" onChange={(e)=>{
              const selectedDomain = e.target.value;
              setDomain(selectedDomain);
              }}>
              
              <option value="none">선택</option>
              <option value="naver.com">naver.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="nate.com">nate.com</option>
              <option value="gmail.com">gmail.com</option>
              
            </Selected>
           
          </GridFlex>
          
          <Grid margin="0px 0px 20px 0px">
            <Grid margin="0px 0px 9px 0px">
              <TextSmall size="15px">비밀번호</TextSmall>
            </Grid>
            <Grid1>
              <Input type="password" value={pwd} _onChange={(e)=>{setPwd(e.target.value)}} register placeholder="아래의 조합으로 입력해 주세요."></Input>
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
            <TextSmall>비밀번호 확인</TextSmall>
            </Grid>
            <Grid1>
              <Input type="password" value={pwdCheck} _onChange={(e)=>{setPwdCheck(e.target.value)}} register placeholder="비밀번호를 다시 입력해 주세요."></Input>
            </Grid1>
          </Grid>
          <Grid margin="0px 0px 20px 0px">
            <Grid margin="0px 0px 9px 0px">
              <TextSmall size="15px">휴대폰 번호</TextSmall>
            </Grid>
            <Grid1>
              <Input register  value={phone}   maxlength="11"  _onChange={handlePress} placeholder="-없이 휴대폰 번호를 입력해주세요."></Input>
            </Grid1>
          </Grid>
          <Grid margin="0px 0px 20px 0px">
            <Grid margin="0px 0px 9px 0px">
              <TextSmall size="15px">주소</TextSmall>
            </Grid>
            <Grid1>
              <Input value={address} _onChange={(e)=>{setAddress(e.target.value)}} width="350px" register placeholder="배송지 주소를 입력해주세요."></Input>
            </Grid1>
          </Grid>
          {/* <RegisterAgree></RegisterAgree> */}
          <Button red_btn text="회원가입" _onClick={signup}></Button>
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

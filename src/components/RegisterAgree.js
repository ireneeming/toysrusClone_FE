import { Select } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { Grid, Text, Input, Button } from '../elements'
import Checkbox from '@material-ui/core/Checkbox'
import { CheckBox } from '@mui/icons-material'

const RegisterAgree = () => {
  return (
    <>
      <Grid position="relative" padding="45px 0px 120px 0px">
        <Grid maxWidth="530px" margin="auto">
          <Grid>
            <Text h2 size="28px">
              약관동의
            </Text>
          </Grid>
          <Allcheck>
            <CheckBox type="checkbox"></CheckBox>
            <BoldText>전체 동의하기</BoldText>
          </Allcheck>
          <ItemGroup>
            <Div>
              <Group>
                <TxtBold>(필수) 롯데ON 이용약관 동의</TxtBold>
              </Group>
              <Group>
                <Txt>(필수) 롯데ON 이용약관 동의</Txt>
              </Group>
            </Div>
          </ItemGroup>
        </Grid>
      </Grid>
    </>
  )
}

const Allcheck = styled.div`
  padding: 26px 28px 14px;
  border-radius: 8px;
  text-align: left;
`
// const Check = styled.input`

// }

// `

const ItemGroup = styled.div`
  padding: 22px 24px 0;
  margin-top: 10px;
  border-radius: 8px;
  background-color: #f8f8f8;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.3px;
  color: #757575;
  text-align: left;
`

const Group = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  widows: 1;
`
const Div = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  widows: 1;
`

const BoldText = styled.text`
  display: inline-block;
  height: 22px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.47;
  letter-spacing: -0.3px;
  color: #333;
`

const Txt = styled.div`
  padding-left: 0;
  color: #757575;
`

const TxtBold = styled.text`
  display: inline-block;
  height: 22px;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.47;
  letter-spacing: -0.3px;
  color: #333;
`

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

export default RegisterAgree

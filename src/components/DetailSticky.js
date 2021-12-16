import React from 'react'
import styled from 'styled-components'
import Count from '../shared/Count'

const DetailSticky = () => {
  return (
    <>
      <OptionContents>
        <DivText>
          <div>
            <TextP>오늘 17:21~21:30 도착 예정</TextP>
            <TextP>판매자:롯데마트</TextP>
            <TextDiv>
              <TextSmall>7개 남음</TextSmall>
            </TextDiv>

            <UnderLine></UnderLine>
          </div>
          <Count></Count>
        </DivText>
      </OptionContents>
    </>
  )
}

const OptionContents = styled.div`
  padding: 24px 20px 50px;
  width: 315px;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
`

const DivText = styled.div`
  padding: 20px 20px 16px;
  background-color: #f8f8f8;
  border-radius: 8px;
  height: 168px;
`

const TextDiv = styled.div`
  position: relative;
  margin-top: 12px;
`

const TextSmall = styled.p`
  font-size: 13px;
  color: #333;
  margin: 8px 0px;
`

const UnderLine = styled.div`
  border-bottom: 1px solid #ddd;
  margin: 20px 0px;
`

const TextP = styled.p`
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: -0.3px;
  color: #757575;
`

export default DetailSticky

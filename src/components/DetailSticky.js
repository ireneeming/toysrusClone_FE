import React from 'react'
import styled from 'styled-components'
import Count from '../shared/Count'

const DetailSticky = () => {
  return (
    <>
      <OptionContents>
        <DivText>
          <UnderLine>
            <div>
              <TextP>오늘 17:21~21:30 도착 예정</TextP>
              <TextP>판매자:롯데마트</TextP>
            </div>
            <div>
              <TextSmall>7개 남음</TextSmall>
            </div>
          </UnderLine>

          <div>
            <Count></Count>
          </div>
        </DivText>
      </OptionContents>
    </>
  )
}

const OptionContents = styled.div`
  padding: 24px 20px 50px;
`

const DivText = styled.div`
  padding: 20px 20px 16px;
  background-color: #f8f8f8;
  border-radius: 3px;
`

const UnderLine = styled.div`
  border-bottom: 1px solid #ddd;
`

const TextP = styled.p`
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: -0.3px;
  color: #757575;
`

const TextSmall = styled.p`
  display: block;
  float: left;
  width: calc(100% - 52px);
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.2px;
  color: #333;
`

export default DetailSticky

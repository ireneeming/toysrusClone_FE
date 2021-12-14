import React from 'react'
import styled from 'styled-components'
import './DetailImage.css'

const DetailImage = () => {
  return (
    <>
      <div className="wrap">
        <div className="productDetailContents">
          <div className="title">
            <TextGrid>
              <APdding>
                <TextTitle>상세정보</TextTitle>
              </APdding>
              <APdding>
                <TextTitle>리뷰</TextTitle>
              </APdding>
              <APdding>
                <TextTitle>교환/반품 안내</TextTitle>
              </APdding>
            </TextGrid>
          </div>
          <div className="contetnt"></div>
        </div>
      </div>
    </>
  )
}

const TextGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
`

const APdding = styled.div`
  padding: 20px 0px;
`
const TextTitle = styled.div`
  white-space: nowrap;
  cursor: pointer;
  color: #757575;
  font-size: 20px;
`
export default DetailImage

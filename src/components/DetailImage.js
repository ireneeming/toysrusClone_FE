import React from 'react'
import styled from 'styled-components'
import './DetailImage.css'

const DetailImage = () => {
  return (
    <>
      <div className="wrap">
        <div className="productDetailContents">
          <div className="titleName">
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
        </div>
        <div className="contetntGrid">
          <div className="productDetail">
            <BoxDiv>
              <TextDiv>
                <ProductTextThin>원산지</ProductTextThin>
              </TextDiv>
              <ProductTextBold>상품상세 참조</ProductTextBold>
            </BoxDiv>
            <BoxDiv>
              <TextDiv>
                <ProductTextThin>상품번호</ProductTextThin>
              </TextDiv>
              <ProductTextBold>LM5054131319536_001</ProductTextBold>
            </BoxDiv>
          </div>
          <ImageUrl>
            <img src="https://simage.lottemart.com/lim/static_root/images/edidescrimg/images/001492/[%ED%81%AC%EA%B8%B0%EB%B3%80%ED%99%98]48%EC%BB%AC%EB%9F%AC-%EC%8A%88%ED%8D%BC%EB%94%94%EB%9F%AD%EC%8A%A4%EC%84%B8%ED%8A%B8.jpg"></img>
          </ImageUrl>
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

const BoxDiv = styled.div`
  display: flex;
  align-items: center;
  vertical-align: center;
`

const TextDiv = styled.div`
  width: 140px;
  height: 22px;
  margin-top: 12px;
`

const ProductTextThin = styled.text`
  color: #757575;
  font-size: 14px;
`

const ProductTextBold = styled.text`
  color: #333;
  font-size: 14px;
`
const ImageUrl = styled.p`
  max-width: 750px;
  margin-top: 50px;
  margin-left: 99px;
`
export default DetailImage

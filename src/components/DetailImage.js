import React from 'react'
import styled from 'styled-components'
import './DetailImage.css'
import DetailSticky from './DetailSticky'
import { useSelector } from 'react-redux'
import { Images } from '../elements'

const DetailImage = () => {
  const data = useSelector((state) => state.item.list)
  console.log(data)
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
            <Images src={data.imgDetail}></Images>
          </ImageUrl>
          <MoreButton>
            <More>상세정보 더보기</More>
            <img url="https://static.lotteon.com/p/product/assets/img/btn_icon_arrow-bottom_red.svg"></img>
          </MoreButton>
        </div>
      </div>
    </>
  )
}

const MoreButton = styled.button`
  width: 212px;
  padding: 0px 34px;
  height: 48px;
  background-color: #fff;
  border-radius: 24px;
  border: 1px solid #ef2a23;
`

const More = styled.span`
  color: #ef2a23;
  font-size: 15px;
`

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
const ImageUrl = styled.div`
  width: 750px;
  min-height: 1500px;
  margin-top: 50px;
  /* margin-left: 75px; */
  background-color: #ddd;
`
export default DetailImage

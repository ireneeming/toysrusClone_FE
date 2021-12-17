import { fontSize } from '@mui/system'
import React from 'react'
import styled from 'styled-components'
import { Grid, Text, Input, Button, Images } from '../elements/index'

const Footer = () => {
  return (
    <>
      <FooterWrap>
        <Grid contentWrap>
          <ul className="topMenu flexStart">
            <li>토이저러스 소개</li>
            <li>지점안내</li>
            <li>이용약관</li>
            <li>전자금융거래약관</li>
            <li>개인정보처리방침</li>
            <li>청소년보호방침</li>
            <li>임직원등록</li>
          </ul>
        </Grid>
        <hr />
        <MGrid>
          <Flex>
            <div>
              <h2 className="logoArea">
                <img src="https://contents.lotteon.com/ec/public/injectImage.20200228113625.1.png" alt="토이저러스 로고" />
              </h2>
            </div>

            <div style={{ width: '384px;', margin: '0px 60px 0px 0px' }}>
              <H3>롯데쇼핑 주식회사</H3>
              <P>대표이사:강성현</P>
              <P>주소:서울특별시 송파구 올림픽로 300 롯데월드타워 26층</P>
              <P>사업자등록번호 : 529-85-00774(롯데쇼핑(주) e커머스사업부)</P>
              <P>
                통신판매업 신고 : 서울송파 제0158호<UnderLine>사업자 정보 확인</UnderLine>
              </P>
              <P>호스팅 서비스사업자 : 롯데쇼핑(주) e커머스사업부</P>

              <H4>롯데쇼핑 e커머스 사업부 에스크로</H4>
              <P>고객님의 안전거래를 위해 현금 등으로 결제 시 결제금액 전액에 대해</P>
              <P>소비자 피해 방지 서비스를 이용합니다.</P>
            </div>

            <div>
              <H4>고객센터 1899-7000</H4>
              <Box>
                <P>FAQ 보기</P>
              </Box>
              <Box>
                <P>1:1 문의하기</P>
              </Box>
              <Box>
                <P>고객센터</P>
              </Box>

              <H4>전자금융거래 분쟁 담당</H4>
              <P>Tel : 1899-7000</P>
              <P>
                E-mail : <UnderLine>lotteon@lotte.net</UnderLine>
              </P>
              <UnderLine>안전거래센터</UnderLine>
              <H4>
                콘텐츠산업진흥법에 의한 콘텐츠보호안내<UnderLine> 자세히보기</UnderLine>
              </H4>
            </div>
          </Flex>
          <FlexImage>
            <ImageDiv>
              <Images src="https://contents.lotteon.com/ec/public/footer-img-logo-6.png"></Images>
            </ImageDiv>
            <ImageDiv>
              <Images src="https://contents.lotteon.com/ec/public/footer-img-logo-7.png"></Images>
            </ImageDiv>
            <ImageDiv>
              <Images src="https://contents.lotteon.com/ec/public/footer-img-logo-8.png"></Images>
            </ImageDiv>
            <ImageDiv>
              <Images src="https://contents.lotteon.com/ec/public/footer-img-logo-9.png"></Images>
            </ImageDiv>
            <ImageDiv1>
              <Images src="https://contents.lotteon.com/ec/public/footer-img-logo-10.png"></Images>
            </ImageDiv1>
            <ImageDiv2>
              <Images src="https://contents.lotteon.com/ec/public/footer-img-logo-5.png"></Images>
            </ImageDiv2>
          </FlexImage>
        </MGrid>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <P>Copyright © LOTTESHOPPING Co., LTD. All rights reserved.</P>
        </div>
      </FooterWrap>
    </>
  )
}

const MGrid = styled.div`
  padding: 30px 0 40px 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`

const Flex = styled.div`
  max-width: 1140px;
  margin: auto;
  display: flex;
  align-items: center;
  vertical-align: left;
`

const H3 = styled.h3`
  padding-bottom: 5px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.64;
  letter-spacing: -0.3px;
  color: #333;
`
const P = styled.div`
  font-size: 12px;
  line-height: 1.58;
  letter-spacing: -0.2px;
  color: #757575;
`

const H4 = styled.h4`
  padding-top: 16px;
  padding-bottom: 4px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.58;
  letter-spacing: -0.2px;
  color: #757575;
`

const Box = styled.div`
  display: inline-block;
  height: 22px;
  padding: 0 6px;
  margin-right: 4px;
  font-size: 11px;
  line-height: 22px;
  letter-spacing: -0.1px;
  text-align: center;
  color: #757575;
  border-radius: 2px;
  border: 1px solid #ddd;
`

const UnderLine = styled.text`
  text-decoration: underline;
  color: #757575;
  font-size: 12px;
`

const FlexImage = styled.div`
  padding: 30px 0px 0px 0px;
  display: flex;
  align-items: center;
  vertical-align: center;
  max-width: 1140px;
  margin: auto;
`

const ImageDiv = styled.div`
  width: 180px;
  height: 50px;
  margin-left: 10px;
`
const ImageDiv1 = styled.div`
  width: 195px;
  height: 50px;
  margin-left: 10px;
`

const ImageDiv2 = styled.div`
  width: 173px;
  height: 50px;
  margin-left: 10px;
`

const FooterWrap = styled.div`
  width: 100%;
  position: relative;
  background-color: #f8f8f8;
  /* text-align: center; */

  .topMenu {
    padding: 20px 0;

    li {
      position: relative;
      font-size: 14px;
      color: #333;
      padding-left: 20px;
    }
    li:first-child {
      padding-left: 0;
    }
    li:first-child:before {
      display: none;
    }
    li:before {
      content: '';
      position: absolute;
      top: 5px;
      bottom: 4px;
      left: 10px;
      width: 1px;
      background-color: #e5e5e5;
    }
  }

  hr {
    height: 1px;
    margin: 0;
    border: none;
    background-color: #e5e5e5;
  }
  .logoArea {
    width: 234px;
    text-align: left;
    img {
      height: 36px;
    }
  }
  .infoWrapper {
    width: calc(100% - 234px);
    border: 1px solid #bbb;
  }
`

export default Footer

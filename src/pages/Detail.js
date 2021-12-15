import React from 'react';
import styled from 'styled-components';
import DetailImage from '../components/DetailImage';
import DetailSticky from '../components/DetailSticky';
import DetailText from '../components/DetailText';
// import TopButton from '../components/TopButton';
import './Detail.css'

const Detail = (props) => {
  return (
    <>
      <div className="container">
        <div className="wrapcontents">
          <div className="imageBox">
            <div className="imgDiv">
              <div className="colorBox">
                <img src="https://contents.lotteon.com/itemimage/_v031639/LM/50/54/13/13/19/53/6_/00/1/LM5054131319536_001_1.jpg/dims/resizef/554X554"></img>
              </div>
            </div>
          </div>
          <div className="textWrap">
            <DetailText></DetailText>
          </div>
        </div>
      </div>
      <DivFlex>
        <DetailImage></DetailImage>
        <DetailSticky></DetailSticky>
      </DivFlex>
    </>
  )
}
const DivFlex = styled.div`
  display: flex;
  margin: auto;
  width: 1143px;
  border-top: 1px solid #333;
  margin: auto;
`

export default Detail

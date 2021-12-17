import React, { useState } from 'react'
import styled from 'styled-components'
import DetailImage from '../components/DetailImage'
import DetailSticky from '../components/DetailSticky'
import DetailText from '../components/DetailText'
import Image from '../elements/Images'
import Header from '../components/Header'
import Footer from '../shared/Footer'
// import TopButton from '../components/TopButton';
import './Detail.css'
import { actionCreators as itemActions } from '../redux/modules/item'

import { useDispatch, useSelector } from 'react-redux'

const Detail = (props) => {
  const data = useSelector((state) => state.item.list)
  //console.log(data);
  const dispatch = useDispatch()
  const itemId = props.match.params.itemId

  //장바구니 기능

  //장바구니 기능end

  React.useEffect(() => {
    dispatch(itemActions.getDetailSP(itemId))
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <div className="wrapcontents">
          <div className="imageBox">
            <div className="imgDiv">
              <div className="colorBox">
                <Image src={data.thumbnail}></Image>
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

      <Footer />
    </>
  )
}
const DivFlex = styled.div`
  display: flex;
  margin: auto;
  width: 1300px;
  border-top: 1px solid #333;
  margin: auto;
`

export default Detail

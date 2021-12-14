import React from 'react'
import styled from 'styled-components'
import DetailImage from '../components/DetailImage'
import DetailText from '../components/DetailText'
import './Detail.css'

const Detail = () => {
  return (
    <>
      <div className="container">
        <div className="wrap">
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
    </>
  )
}

export default Detail

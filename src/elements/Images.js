import React from 'react'
import styled from 'styled-components'

const Image = (props) => {
  const { logo, _onClick, src, width, height } = props
  const styles = {
    src: src,
    width: width,
    height: height,
  }

  if (logo) {
    return (
      <>
        <LogoImg {...styles} onClick={_onClick}></LogoImg>
      </>
    )
  }

  return (
    <>
      <ImageDefault {...styles} onClick={_onClick}></ImageDefault>
    </>
  )
}

Image.defaultProps = {
  width: '100%',
  height: false,
  src: 'http://3.35.140.5/gobchang-1639031423467.jpg',
  _onClick: () => {},
}

const ImageDefault = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

const LogoImg = styled.div`
  width: 200px;
  height: 38px;
  background: url('https://static.lotteon.com/p/common/foCommon/assets/img/logo_toysrus@2x.png') no-repeat;
  background-size: contain;
`
export default Image

import React from 'react'
import styled from 'styled-components'

const Image = (props) => {
  const { margin, logo, _onClick, src, width, height, borderRadius } = props
  const styles = {
    src: src,
    width: width,
    height: height,
    borderRadius: borderRadius,
    margin: margin,
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
  margin: false,
  src: 'http://3.35.140.5/gobchang-1639031423467.jpg',
  _onClick: () => {},
  borderRadius: 'false',
}

const ImageDefault = styled.img`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.borderRadius ? `border-radius: ${props.borderRadius};` : '')}
`

const LogoImg = styled.div`
  cursor: pointer;
  width: 200px;
  height: 38px;
  background: url('https://static.lotteon.com/p/common/foCommon/assets/img/logo_toysrus@2x.png') no-repeat;
  background-size: contain;
`
export default Image

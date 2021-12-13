import React from 'react'
import styled from 'styled-components'

const Grid = (props) => {
  const { position, children, flex, width, maxWidth, padding, margin, _onClick, contentWrap, signWrap, detailWrap, align } = props
  const styles = {
    flex: flex,
    position: position,
    width: width,
    padding: padding,
    maxWidth: maxWidth,
    margin: margin,
    align: align,
  }

  if (contentWrap) {
    return (
      <ContentWrap {...styles} onClick={_onClick}>
        {children}
      </ContentWrap>
    )
  }

  if (detailWrap) {
    return (
      <DetailWrap {...styles} onClick={_onClick}>
        {children}
      </DetailWrap>
    )
  }

  if (signWrap) {
    return (
      <SignWrap {...styles} onClick={_onClick}>
        {children}
      </SignWrap>
    )
  }

  return (
    <GridBox {...styles} onClick={_onClick}>
      {children}
    </GridBox>
  )
}
Grid.defaultProps = {
  position: false,
  children: null,
  flex: false,
  width: '100%',
  maxWidth: 'false',
  padding: false,
  margin: false,
  align: false,
  _onClick: () => {},
}

const GridBox = styled.div`
  position: ${(props) => (props.position ? `${props.position}` : '')};
  width: ${(props) => props.width};
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : '')}
  height: 100%;
  box-sizing: border-box;
  padding: ${(props) => (props.padding ? `${props.padding}` : '')};
  margin: ${(props) => (props.margin ? `${props.margin}` : '')};
  display: ${(props) => (props.flex ? `${props.flex}` : '')};
  text-align: ${(props) => props.align};
`

const ContentWrap = styled.div`
  position: relative;
  width: 1220px;
  margin: 0 auto;
  *border: 1px solid #eee; // 임시로 지정
  display: ${(props) => (props.flex ? `${props.flex}` : '')};
  text-align: ${(props) => props.align};
`

const DetailWrap = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;
  *border: 1px solid #eee; // 임시로 지정
  display: ${(props) => (props.flex ? `${props.flex}` : '')};
  text-align: ${(props) => props.align};
`

const SignWrap = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
  *border: 1px solid #eee; // 임시로 지정
  display: ${(props) => (props.flex ? `${props.flex}` : '')};
  text-align: ${(props) => props.align};
  padding: 100px 20px;
`

export default Grid

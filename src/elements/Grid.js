import React from 'react'
import styled from 'styled-components'

const Grid = (props) => {

  const { bdrBtm, maxWidth,className,position,height,border, children, flex, width, padding, margin, _onClick, contentWrap, lineHeight,signWrap, detailWrap,header, align } = props

  const styles = {
    className:className,
    flex: flex,
    position: position,
    width: width,
    height:height,
    padding: padding,
    maxWidth: maxWidth,
    margin: margin,
    align: align,
    border:border,
    lineHeight:lineHeight,
    bdrBtm:bdrBtm,
    
  }

  if (contentWrap) {
    return (
      <ContentWrap {...styles} onClick={_onClick}>
        {children}
      </ContentWrap>
    )
  }

  if (header) {
    return (
      <HeaderBox {...styles} onClick={_onClick}>
        {children}
      </HeaderBox>
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
  maxWidth: 'false',
  width: false,
  //width: 100% -> width:false, 로 바꿈 width:100% 짜리는 다 수정할 것
  height:false,
  padding: false,
  margin: false,
  align: false,
  border: false,
  lineHeight:false,
  _onClick: () => {},
  bdrBtm:false,
}

const HeaderBox = styled.div`
  position: ${(props) => (props.position ? `${props.position}` : '')};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  padding: ${(props) => (props.padding ? `${props.padding}` : '')};
  margin: ${(props) => (props.margin ? `${props.margin}` : '')};
  display: ${(props) => (props.flex ? `${props.flex}` : '')};
  text-align: ${(props) => props.align};
  border: ${(props) => props.border};
  *border: 1px solid #eee;
  border-bottom:${(props) => props.bdrBtm};
`;

const GridBox = styled.div`
  position: ${(props) => (props.position ? `${props.position}` : '')};
  width: ${(props) => props.width};
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : '')}
  height: ${(props) => props.height};
  box-sizing: border-box;
  padding: ${(props) => (props.padding ? `${props.padding}` : '')};
  margin: ${(props) => (props.margin ? `${props.margin}` : '')};
  display: ${(props) => (props.flex ? `${props.flex}` : '')};
  text-align: ${(props) => props.align};
  line-height:${(props) => props.lineHeight};

`

const ContentWrap = styled.div`
  position: relative;
  width: 1140px;

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

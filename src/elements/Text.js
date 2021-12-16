import React from 'react'
import styled from 'styled-components'
import '../index.css'

const Text = (props) => {
  const { weight, h2, mont, className, span, bold, color, size, align, margin, children } = props
  const styles = { weight:weight, margin: margin, bold: bold, color: color, size: size, align: align, className: className }

  if (span) {
    return <Span {...styles}>{children}</Span>
  }

  if (h2) {
    return <H2 {...styles}>{children}</H2>
  }

  if (mont) {
    return <Mont {...styles}>{children}</Mont>
  }

  return <P {...styles}> {children}</P>
}

Text.defaultProps = {
  cihldren: null,
  bold: false,
  color: '#222',
  size: false,
  align: false,
  margin: '0px',
  weight:false,
}

const H2 = styled.h2`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  line-height: 1.39;
  letter-spacing: -1.1px;
  color: #333;
  font-family: 'Noto Sans KR';
`

const P = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  text-align: ${(props) => (props.align ? `${props.align}` : '')};
  margin: ${(props) => (props.margin ? `${props.margin}` : '')};
  word-break: keep-all;
  letter-spacing: -0.5px;
  font-family: 'Noto Sans KR';
  letter-spacing: -0.02em;
`

const Mont = styled.p`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  text-align: ${(props) => (props.align ? `${props.align}` : '')};
  margin: ${(props) => (props.margin ? `${props.margin}` : '')};
  word-break: keep-all;
  letter-spacing: -0.5px;
  font-family: 'Noto Sans KR';
`

const Span = styled.span`
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  text-align: ${(props) => (props.align ? `${props.align}` : '')};
  margin: ${(props) => (props.margin ? `${props.margin}` : '')};
  word-break: keep-all;
  font-family: 'Noto Sans KR';
`
export default Text

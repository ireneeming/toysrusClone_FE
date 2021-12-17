import React, { useState } from 'react'
import styled from 'styled-components'

const TopButton = () => {
  const [ScrollY, setScrollY] = useState(0)

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    })
    setScrollY(0)
  }

  return (
    <React.Fragment>
      <ButtonDiv>
        <ButtonTop onClick={handleTop}></ButtonTop>
      </ButtonDiv>
    </React.Fragment>
  )
}

const ButtonDiv = styled.div`
  position: fixed;
  height: 50px;
  z-index: 900;
  right: 85px;
  bottom: 27px;
`

const ButtonTop = styled.button`
  position: absolute;
  top: -9px;
  right: 0;
  width: 68px;
  height: 68px;
  border: none;
  background-image: url(https://static.lotteon.com/p/common/foCommon/assets/img/btn_move_top.png);
  background-size: 100% 100%;
  cursor: pointer;
`

export default TopButton

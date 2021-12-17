import React from 'react'
import styled from 'styled-components'
import { Grid, Text, Input, Button, Images } from '../elements/index'

const MainTitle = (props) => {
  const { src } = props

  return (
    <>
      <Grid width="370px" margin="0 auto" padding="15px 0">
        <Images src={src} />
      </Grid>
    </>
  )
}

MainTitle.defaultProps = {
  src: 'https://contents.lotteon.com/display/dshoplnk/31650/2/M000017/196808/P9D05E33D67464E73319DAFF4A951B7F4AF38A8F02E2383E45644D45E800BC44A/file/dims/optimize',
}

export default MainTitle

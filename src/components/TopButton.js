import React from 'react'
import './QuickMenu.css'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined'
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp'

const TopButton = () => {
  var location = document.querySelector('#Header')

  return (
    <React.Fragment>
      <Grid position="fixed" right="7%" bottom="5%">
        <div className="Rotate">
          <Grid is_grid font-size="5rem">
            {/* <Permit> */}
            <ArrowDropDownCircleSharpIcon
              className="TopToButton"
              fontSize="10rem"
              width="auto"
              height="auto"
              outline="none"
              _onClick={() => {
                window.scrollBy(0, -window.innerHeight)
                //ref로 요소를 잡아오기,scrollTP
              }}
            />
          </Grid>
        </div>
      </Grid>
    </React.Fragment>
  )
}

export default TopButton

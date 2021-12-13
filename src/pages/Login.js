import React from 'react'

import { Grid, Button, Text, Input } from '../elements'

const Login = (props) => {
  return (
    <>
      <Grid width="420px">
        <Grid>
          <Text>로그인</Text>
        </Grid>
        <Grid>
          <Input></Input>
          <Input></Input>
        </Grid>
        <Grid>
          <Button>로그인하기</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Login

import React from 'react';
import styled from 'styled-components';
import {Grid,Text,Input, Button,Images} from '../elements/index';

const BranchIcon = (props)=> {
  const {src} = props;

  return(
    <>
      
        <Grid align="center">
          <Icon src={src}/>
          <Text>{props.text}</Text>
        </Grid>
      
    </>
  );
}

BranchIcon.defaultProps = {
  display:'block',
  width:'80px',
  height:'80px',
  src:"https://contents.lotteon.com/display/dshoplnk/31650/2/M000024/66471/PA03BB454A7A80C2ED70B8C662D5526A82AB0DFDDFD895F90E86FAC09E0566824/file/dims/optimize",
  text:'롯데마트'

}
const Icon = styled.button`
  width:80px;
  height:80px;
  background:url('${(props) => props.src}');
  background-size:100%;
  border:none;
  margin:15px 20px;

`;


export default BranchIcon;

import React from 'react';
import { useState } from 'react';
import {Grid, Text, Images, Input, Button} from '../elements/index';

import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

const Rank = (props) => {
 
const {No}=props;
  
  return (
    <>
    <RankBox><span className="mont">{No}.</span> {props.itemName}</RankBox>
     </>
  );
}

const RankBox = styled.div`
position:relative;
display:block; 
width:100%; 
overflow:hidden;
min-height:40px;

line-height:40px;
z-index:999;
white-space:nowrap;
text-overflow: ellipsis;
font-family: 'Noto Sans KR';
color:#222;
`;
export default Rank;
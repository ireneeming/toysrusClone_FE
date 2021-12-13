import React from 'react';
import '../shared/App.css';
import styled from 'styled-components';

import {Grid,Text,Image,Input} from '../elements/index';



const Header = () => {
  return(
    <>
      <Grid header height="178px;">
         
          <Grid contentWrap>
            <Grid className="flexEnd" header height="34px;">
              <Grid className="flexSpaceBetween" width="246px;">
                <Grid lineHeight="34px;"><Text className="headerInfo">username 님</Text></Grid>
                <Grid lineHeight="34px;"><Text className="headerInfo">로그아웃</Text> </Grid>
                <Grid lineHeight="34px;"><Text className="headerInfo">주문배송</Text> </Grid>
                <Grid lineHeight="34px;"><Text className="headerInfo">고객센터</Text> </Grid>
              </Grid>
            </Grid>
            <Grid className="flexSpaceBetween" height="91px">
              <Image logo />
              <Grid width="450px;">
                <Input></Input>
              </Grid>
              <ul>
                <li>
                  <div>
                    <img src="https://static.lotteon.com/p/common/foCommon/assets/img/icon_heart_black.svg" />
                    <p>챗봇</p>
                    
                  </div>
                </li>
                <li>
                  <div>
                    <img src="https://static.lotteon.com/p/common/foCommon/assets/img/icon_heart_black.svg"/>
                    <p>챗봇</p>
                    
                  </div>
                </li>
                <li>
                  <div>
                    <img src="https://static.lotteon.com/p/common/foCommon/assets/img/icon_heart_black.svg"/>
                    <p>챗봇</p>
                    
                  </div>
                </li>
               

              </ul>

            </Grid>
           
          </Grid>

      </Grid>
    </>
  );
}

const Ul = styled.ul`

`;
export default Header;


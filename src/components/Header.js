import React from 'react';
import '../shared/App.css';
import HeaderMenu from './HeaderMenu';
import { history } from '../redux/configureStore'; 
import {Grid,Text} from '../elements/index';
import {useSelector, useDispatch} from "react-redux";

import { actionCreators as userActions } from '../redux/modules/user';




const Header = (props) => {
  const dispatch = useDispatch();

  const local_token = localStorage.getItem('token');
  const local_name = localStorage.getItem('name');

  const logout = () => {
    dispatch(userActions.logOut());
    document.location.href = '/'
  }
  
  if(local_token){
    return(
      <>
        <Grid header>
            <Grid contentWrap>
              <Grid className="flexEnd" header height="34px;">
                <Grid className="flexSpaceBetween" width="246px;">
                  <Grid lineHeight="34px;"><Text className="headerInfo">{local_name} 님</Text></Grid>
                  <Grid lineHeight="34px;" _onClick={logout}><Text className="headerInfo">로그아웃</Text> </Grid>
                  <Grid lineHeight="34px;" ><Text className="headerInfo">주문배송</Text> </Grid>
                  <Grid lineHeight="34px;"><Text className="headerInfo">고객센터</Text> </Grid>
                </Grid>
              </Grid>

            </Grid>
        </Grid>
        <HeaderMenu/>
      </>
    );
  }

  return (
    <>
      <Grid header>
        <Grid contentWrap>
          <Grid className="flexEnd" header height="34px;">
            <Grid className="flexSpaceBetween" width="246px;">
              <Grid
                lineHeight="34px;"
                _onClick={() => {
                  history.push('/login')
                }}
              >
                <Text className="headerInfo">로그인</Text>
              </Grid>
              <Grid
                lineHeight="34px;"
                _onClick={() => {
                  history.push('/register')
                }}
              >
                <Text className="headerInfo">회원가입</Text>{' '}
              </Grid>
              <Grid lineHeight="34px;">
                <Text className="headerInfo">주문배송</Text>{' '}
              </Grid>
              <Grid lineHeight="34px;">
                <Text className="headerInfo">고객센터</Text>{' '}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <HeaderMenu />
    </>
  )
}

export default Header

import React from 'react'
import '../shared/App.css'
import HeaderMenu from './HeaderMenu'
import { history } from '../redux/configureStore'
import { Grid, Text, Images, Input, Button } from '../elements/index'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
  // const dispatch = useDispatch;

  // const is_login = useSelector((state)=>state.user.is_login);

  // if(is_login){
  //   return(
  //     <>
  //       <Grid header>
  //           <Grid contentWrap>
  //             <Grid className="flexEnd" header height="34px;">
  //               <Grid className="flexSpaceBetween" width="246px;">
  //                 <Grid lineHeight="34px;"><Text className="headerInfo">username 님</Text></Grid>
  //                 <Grid lineHeight="34px;"><Text className="headerInfo">로그아웃</Text> </Grid>
  //                 <Grid lineHeight="34px;" ><Text className="headerInfo">주문배송</Text> </Grid>
  //                 <Grid lineHeight="34px;"><Text className="headerInfo">고객센터</Text> </Grid>
  //               </Grid>
  //             </Grid>

  //           </Grid>
  //       </Grid>
  //       <HeaderMenu/>
  //     </>
  //   );
  // }

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

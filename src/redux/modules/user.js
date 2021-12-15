import {createAction, handleActions} from "redux-actions";
import { produce } from 'immer';

import api from '../../api/api';

const GET_USER = "GET_USER";
const LOG_IN = "LOG_IN";



const getUser = createAction(GET_USER, ( user )=>({ user }));
const logIn = createAction(LOG_IN, (user)=> ({user}));

const initialState= {
  email:null,
  is_login:false,

}


// 미들웨어

const loginSP = (email,pwd) => {
  return async function (dispatch, getState, {history}){
    const user = {
      email:email,
      password:pwd
    }
    await api.post("/api/auth/login", user).then(function(response){
      console.log("로그인요청", response);
      

      
    }).catch((err)=>{
      
    })
  }
}


export default handleActions(
  {
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState

);

const actionCreators = {
  getUser,
  loginSP
}

export {actionCreators};
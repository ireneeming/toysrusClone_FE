import {createAction, handleActions} from "redux-actions";
import { produce } from 'immer';
import api from '../../api/api';

const GET_USER = "GET_USER";
const LOG_IN = "LOG_IN";



const getUser = createAction(GET_USER, ( user )=>({ user }));
const logIn = createAction(LOG_IN, (user)=> ({user}));

const initialState= {
  username:null,
  is_login:false,

}


// 미들웨어

const loginSP = (id,pwd) => {
  return async function (dispatch, getState, {history}){
    const user = {
      username:id,
      password:pwd
    }
    await api.post("/api/auth/login", user).then(function(response){
      localStorage.setItem('token', response.headers.authorization);
      localStorage.setItem('name' ,response.headers.name);
      console.log(response);
     
    }).catch((err)=>{
      
    });
    
    
   

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
import {createAction, handleActions} from "redux-actions";
import { produce } from 'immer';
import api from '../../api/api';

const GET_USERNAME = "GET_USERNAME";
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";




const getUser = createAction(GET_USERNAME, ( user )=>({ user }));
const logIn = createAction(LOG_IN, (user)=> ({user}));
const logOut = createAction(LOG_OUT, (user)=>({user}))

const initialState= {
  user:null,
  name:null,
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
      
      //dispatch(logIn(response.data.name));
      
      document.location.href = '/';
     
    }).catch((err)=>{
      window.alert("정확한 아이디와 비밀번호를 입력해주세요.");
    });


    
  }
}

const getUsernameSP = () => {
  return async function (dispatch, getState, {history}){
    const token = localStorage.getItem('token');
    await api.get('/api/auth',
    {
      headers: { Authorization: 
        `${token}` }
    }
    ).then(function(response){
      // console.log("된것이냐 ..",response.data.username)
      dispatch(getUser(response.data.username));
    })
  }
}



export default handleActions(
 
  {
    [GET_USERNAME]: (state, action) => produce(state, (draft) => {
     draft.username = action.payload.user;
     

    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
      localStorage.removeItem('name');
      localStorage.removeItem('token');

    }),
  },
  initialState

);

const actionCreators = {
  getUser,
  loginSP,
  logOut,
  getUsernameSP
}

export {actionCreators};
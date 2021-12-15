import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import api from '../../api/api'
import axios from 'axios'

// 액션 타입

const LOAD_ITEM = 'LOAD_ITEM'

//액션 생성자 생성
const loadItem = createAction(LOAD_ITEM, (item_list) => ({ item_list }))

const initialState = {
  list: [],
}

// middleware

const getItemSP = () => {
  return async function (dispatch, useState, { history }) {
    await api.get('/api/item?page=1&size=30').then(function (response) {
     
      dispatch(loadItem(response.data))
    })
  }
}


//reducer
export default handleActions(
  {
    [LOAD_ITEM]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.item_list;
        draft.recommend_list = action.payload.item_list.recommendProducts.content;
       
      }),
  },
  initialState
)

const actionCreators = {
  loadItem,
  getItemSP,
}

export { actionCreators }

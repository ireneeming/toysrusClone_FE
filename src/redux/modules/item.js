import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import api from '../../api/api'
import axios from 'axios'

// 액션 타입

const LOAD_ITEM = 'LOAD_ITEM'
const GET_DETAIL = 'GET_DETAIL'


//액션 생성자 생성
const loadItem = createAction(LOAD_ITEM, (item_list) => ({ item_list }))
const getDetail = createAction(GET_DETAIL, (item) => ({ item }))

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

//상품 하나만 가져오기
const getDetailSP = (itemId) => {
  return async function (dispatch, useState, { history }) {
    await api.get(`/api/item/${itemId}`).then(function(response) {
      console.log("확인!?", response);
    })
  }
}

//reducer
export default handleActions(
  {
    [LOAD_ITEM]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.item_list
        draft.recommend_list = action.payload.item_list.recommendProducts.content
      }),
    [GET_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        // draft.list = action.payload.detail_list
      }),
  },
  initialState
)

const actionCreators = {
  loadItem,
  getItemSP,
  getDetailSP,
}

export { actionCreators }

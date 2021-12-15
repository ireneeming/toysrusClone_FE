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
      // console.log("혹시이건????",response.data.recommendProducts.content)
      //console.log(response.data)
      // dispatch(loadItem(response.data.recommendProducts.content))
      dispatch(loadItem(response.data))
    })
  }
}

// const getItemSP = () => {
//   return async function (dispatch, useState, { history }) {
//     await api.get('/timeLimitProducts').then(function (response) {
//       console.log(response.data)
//       //console.log("오잉",response.data.recommendProducts);
//       //dispatch(loadItem(response.data.recommendProducts.content))
//     })
//   }
// }


//reducer
export default handleActions(
  {
    [LOAD_ITEM]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.item_list;
        draft.recommend_list = action.payload.item_list.recommendProducts.content;
        //console.log("어떤 액션이니",action.payload.item_list.recommendProducts.content)
      }),
  },
  initialState
)

const actionCreators = {
  loadItem,
  getItemSP,
}

export { actionCreators }

import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import api from '../../api/api'
import axios from 'axios'

// 액션 타입

const LOAD_ITEM = 'LOAD_ITEM'

const loadItem = createAction(LOAD_ITEM, (item_list) => ({ item_list }))

const initialState = {}

// middleware

const getItemSP = () => {
  return async function (dispatch, useState, { history }) {
    await api.get('/christmasProducts').then(function (response) {
      console.log('hmmmmm')
      console.log(response)
      // dispatch(loadItem(response))
    })
  }
}

export default handleActions(
  {
    [LOAD_ITEM]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
)

const actionCreators = {
  loadItem,
  getItemSP,
}

export { actionCreators }

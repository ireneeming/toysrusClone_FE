import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import api from '../../api/api'
import axios from 'axios'

// 액션 타입

const LOAD_ITEM = 'LOAD_ITEM'
const GET_DETAIL = 'GET_DETAIL'
//const ADD_CART = 'ADD_CART'
const GET_CART = 'GET_CART'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

//액션 생성자 생성
const loadItem = createAction(LOAD_ITEM, (item_list) => ({ item_list }))
const getDetail = createAction(GET_DETAIL, (item) => ({ item }))
//const addcart = createAction(ADD_CART, (cart_list) => ({cart_list}))
const getCart = createAction(GET_CART, (cartList) => ({ cartList }))
const increase = createAction(INCREASE, () => ({}))
const decrease = createAction(DECREASE, () => ({}))

const initialState = {
  list: [],
  cartList: [],
  number: 0,
  diff: 1,
}

// middleware

const getItemSP = () => {
  return async function (dispatch, useState, { history }) {
    await api.get('/api/item?page=1&size=30').then(function (response) {
      //  console.log(response)
      dispatch(loadItem(response.data))
    })
  }
}

//상품 하나만 가져오기
const getDetailSP = (itemId) => {
  return async function (dispatch, useState, { history }) {
    await api.get(`/api/item/${itemId}`).then(function (response) {
      // console.log(response.data)
      dispatch(getDetail(response.data))
    })
  }
}

const addCartSP = (itemId, number) => {
  return async function (dispatch, useState, { history }) {
    const addItem = {
      itemId: itemId,
      count: number,
    }

    const token = localStorage.getItem('token')

    await api
      .post('/api/cart', addItem, {
        headers: { Authorization: `${token}` },
      })
      .then(function (response) {
        console.log('카드에 담겻디')
      })
      .catch((err) => {
        console.log('장바구니 담는 과정에서 something wrong')
      })
  }
}

const getCartSP = () => {
  return async function (dispatch, getState, { history }) {
    const token = localStorage.getItem('token')
    await api
      .get('/api/cart', {
        headers: { Authorization: `${token}` },
      })
      .then(function (response) {
        console.log('된것이냐 ..', response.data)
        dispatch(getCart(response.data))
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
        draft.list = action.payload.item
      }),
    [GET_CART]: (state, action) =>
      produce(state, (draft) => {
        //console.log("다시다시다시",action.payload.cartList.items)
        draft.cartList = action.payload.cartList.items
      }),
    [INCREASE]: (state, action) =>
      produce(state, (draft) => {
        console.log('+리듀서')
        console.log('state', state)
        draft.increase = action.payload
        console.log(draft.increase)
      }),
    [DECREASE]: (state, action) =>
      produce(state, (draft) => {
        console.log('나와라')
      }),
  },
  initialState
)

const actionCreators = {
  loadItem,
  increase,
  decrease,
  getItemSP,
  getDetailSP,
  addCartSP,
  getCartSP,
}

export { actionCreators }

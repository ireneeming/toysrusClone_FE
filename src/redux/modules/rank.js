import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import api from '../../api/api'

//액션 타입
const LOAD_RANK = 'LOAD_RANK';

const loadRank = createAction(LOAD_RANK, (rankList) => ({rankList}))

const initialState ={
  list:[]
}

const getRankSP = () => {
  return async function(dispatch, useState, {history}){
    await api.get('api/item/ranking').then(function(response){
      console.log("ranking response",response)
      dispatch(loadRank(response))
    })
  }
}

export default handleActions(
  {
    [LOAD_RANK]: (state, action) => produce(state,(draft)=> {
      draft.rank_list = action.payload.rankList.data
    })
  },
  initialState
)

const actionCreators = {
  getRankSP,
  loadRank

}

export { actionCreators }

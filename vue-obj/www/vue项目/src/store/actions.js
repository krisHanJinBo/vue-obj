import * as types from './types'
export default {
  showFoot:({commit,state},payload)=>{
    commit(types.SHOW_FOOT)
  },
  hideFoot:({commit,state},payload)=>{
    commit(types.HIDE_FOOT)
  },
  showLoading:({commit,state},payload)=>{
    commit(types.SHOW_LOADING)
  },
  hideLoading:({commit,state},payload)=>{
    commit(types.HIDE_LOADING)
  }
}

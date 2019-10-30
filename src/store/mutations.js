import * as types from './mutations-types'
const mutations={
  [types.set_singer]:(state,singer)=>{
      state.singers=singer;
  }

}
export default mutations
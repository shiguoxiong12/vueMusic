import * as types from './mutations-types'
const mutations={
  [types.set_singer]:(state,singer)=>{
      state.singers=singer;
  },
  [types.set_songsList]:(state,songslist)=>{
     state.songsList=songslist;
  }

}
export default mutations
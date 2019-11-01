import * as types from './mutations-types'
const mutations={
  [types.set_singer]:(state,singer)=>{
      state.singers=singer;
  },
  [types.set_songsList]:(state,songslist)=>{
     state.songsList=state.myLove.concat(songslist);
  },
  [types.change_play]:(state,status)=>{
    state.playStatus=status;
  }

}
export default mutations
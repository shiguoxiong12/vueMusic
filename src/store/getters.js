const getSinger=state=> state.singers;
const getSongList=state=> state.songsList;
const getPlay=state=>state.playStatus;
const getLove=state => state.myLove
export default{
    getSinger,
    getSongList,
    getPlay,
    getLove
}
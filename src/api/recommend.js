/*
 * @Author: shiguoxiong
 * @Date: 2019-09-22 14:33:59
 * @Description: 
 */
/**********獲取推薦相關數據***********/
import jsonp from '../util'
import axios from 'axios'
import {commonParames,options} from './config'
export  function getRecommend(){
      let url='https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
       const data=Object.assign({},commonParames,{
       '_':1569134349124,
       'uin':0,
       'platform':'h5',
       'needNewCode':1
      })
      return  jsonp(url,data,options)
}
export function getSongList(){ //熱門歌單
  //  let url='/pc/cgi-bin/musicu.fcg';
    let url='/pc/splclound/fcgi-bin/fcg_grt_diss_by_tag.fcg';
    const data=Object.assign({},commonParames, {
        platform: 'yqq',
        hostUin: 0,
        sin:0,
        ein:0,
        sortId:5,
        needNewCode:0,
        categoryId:10000000,
        rnd:Math.random()
        // loginUin: 0,
        // hostUin: 0,
        // platform: 'yqq.json',
        // needNewCode: 0,
        // data: JSON.stringify({
        //   'comm': { 'ct': 24 },
        //   'playlist': {
        //     'method': 'get_playlist_by_category',
        //     'param': {
        //       'id': 3317,
        //       'curPage': 1,
        //       'size': 40,
        //       'order': 5,
        //       'titleid': 3317
        //     },
        //     'module': 'playlist.PlayListPlazaServer'
        //   }
        // }),
        //...commonParames

    })
        return axios({
             method: 'get',
             url: url,
             params: data
          })
  
}
import jsonp from '../util'
import axios from 'axios'
import {commonParames,options} from './config'
export function getLyric(mid) {
    const url = '/api/lyric'
    const data = Object.assign({}, commonParames, {
      songmid: "002MOW3w0vbJHf",
      platform:'yqq.json',
      loginUin:2668057765,
      inCharset:'utf8',
      outCharset:'utf-8',
      notice:0,
      hostUin: 0,
      needNewCode: 0,
      pcachetime: +new Date(),
      format: 'json',
      g_tk:5381
    })
   
    return axios.get(url, {
      params: data
    }).then((res) => {
      if (typeof res.data === 'string') {
        //返回的jsonp格式，利用正则，提取我们需要的json字段
        const reg = /^\w+\(({[^()]+})\)$/
        var matches = res.data.match(reg)
        if (matches) {
          let val = JSON.parse(matches[1])
          //为什么用Promise：为了后边的方法调用的时候，进一步then，操作数据
          return Promise.resolve(val)
        }
      }
    })
  }
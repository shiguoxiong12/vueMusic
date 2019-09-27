/*
 * @Author: shiguoxiong
 * @Date: 2019-09-22 21:28:35
 * @Description: 
 */
import jsonp from '../util'
import axios from 'axios'
import {commonParames,options} from './config'
export function getSingers(){
    let url="https://c.y.qq.com/v8/fcg-bin/v8.fcg";
    const data=Object.assign({},commonParames,{
       channel:'singer',
       pagenum:'1',
       page:'list',
       key:'all_all_all',
       hostUnit:0,
       pagesize:50,
       needNewCode:0,
       platform:'yqq',
       g_tk:1664029744
    })
    return jsonp(url,data,options)
}
/*
 * @Author: shiguoxiong
 * @Date: 2019-09-22 14:11:39
 * @Description: 
 */
import parameJsonp from 'jsonp'

export default function jsonp(url,data,option){
    url+=(url.indexOf("?")<0 ? '?' : "&")+parames(data);
    return new Promise((resolve,reject)=>{
        parameJsonp(url,option,(error,data)=>{
            if(!error){
                resolve(data)
            }else{
                reject(error)
            }
        })
    })
    
}
/********
 * 給url 添加請求參數後綴
 * **********/
function parames(data){
    let url="";
    for(let k in data){
       let value=data[k] !==undefined  ? data[k] : '';
       url+=`&${k}=${encodeURIComponent(value)}`
    }
    return url ?  url.substring(1) : ""
}
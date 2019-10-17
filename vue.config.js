/*
 * @Author: shiguoxiong
 * @Date: 2019-09-22 17:30:49
 * @Description: 
 */
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports={
    publicPath:'/',
    devServer: {
       port: 9000,
        proxy: { // 代理跨域
          '/api': { // 代理url关键字
            target: 'https://c.y.qq.com', // 需要代理的地址
            secure: false, // 如果是https接口，需要配置这个参数
            changeOrigin: true, // 是否跨域
            pathRewrite: {
              '^/api': ''
            }
          },
          '/pc': { // 代理url关键字
            target: 'https://u.y.qq.com/', // 需要代理的地址
            secure: false, // 如果是https接口，需要配置这个参数
            changeOrigin: true, // 是否跨域
            pathRewrite: {
              '^/pc': ''
            },
            // 突破host和origin的限制
            headers: {
              referer: 'https://y.qq.com/',
             // host:'c.y.qq.com',
              origin: 'https://y.qq.com'
            }
          }
        }
    }
}
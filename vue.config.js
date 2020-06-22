/*
 * @Author: shiguoxiong
 * @Date: 2019-09-22 17:30:49
 * @Description: 
 */
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports={
    publicPath:'/',
    chainWebpack: config => {
      // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
      config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
      })
    },
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
          },
          '/api/lyric':{
            target: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg',
            bypass: function (req, res, proxyOptions) {
              req.headers.referer = 'https://c.y.qq.com';
              req.headers.host = 'c.y.qq.com';
            },
            pathRewrite: {
              '^/api/lyric': ''
            }
          }    
        }
    }
}
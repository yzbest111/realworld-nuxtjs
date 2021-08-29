/*
 * 基于axios封装的请求模块
*/

import axios from 'axios'
const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
// do something before request is sent

}, function name(error) {
  // do something with request error

})
export default request
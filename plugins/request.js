/*
 * 基于axios封装的请求模块
 */
import axios from 'axios';
export const request = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com',
});

// http://realworld.api.fed.lagounews.com/

// 通过插件机制获取到上下文对象，上下文对象中包含：query、param、request、reponse、app实例、store等
// 插件导出必须作为default等默认成员
export default ({ store }) => {
  // 请求拦截器
  request.interceptors.request.use(
    function(config) {
      // do something before request is sent
      const { user } = store.state
      if (user && user.token)
        config.headers.Authorization = `Token ${user.token}`

      return config
    },
    function name(error) {
      // do something with request error
    }
  );
};

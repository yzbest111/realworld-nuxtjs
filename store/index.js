const cookieParser = process.server ? require('cookieparser') : undefined
// nuxt会自动加载注册store，只要导出这个实例就可以
// 由于在服务端渲染期间运行的是同一个store实例，为了防止数据冲突，务必将state定义成一个函数
export const state = () => ({
  user: null, // 当前登陆用户的登陆状态
})

export const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

export const actions = {
  // nuxtServerInit是nuxt提供的一个特殊的action中的方法
  // 这个方法会在服务器渲染期间自动调用
  // 作用：初始化容器数据，传递数据给客户端使用
  nuxtServerInit({ commit }, { req }) {
    let user = null
    // 如果请求头中有cookie
    if (req.headers.cookie) {
      const parsed = cookieParser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (error) {
        // no valid found
      }
    }
    // 提交mutation，更新state状态
    commit('setUser', user)
  }
}
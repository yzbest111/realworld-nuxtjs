/**
 * nuxt.js配置文件，用来覆盖nuxtjs的默认配置
 */
module.exports = {
  // 自定义路由表规则
  router: {
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      // 清除nuxtjs默认生成的路由规则
      routes.splice(0)
      routes.push(...[
        {
          path: '/',
          // name: 'layout',
          component: resolve(__dirname, 'pages/layout/index.vue'),
          children: [
            {
              path: '', // 默认子路由
              name: 'home',
              component: resolve(__dirname, 'pages/home/index.vue')
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login/index.vue')
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/login/index.vue')
            },
            {
              path: '/profile/:username',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/index.vue')
            },
            {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings/index.vue')
            },
            {
              path: '/editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor/index.vue'),
            },
            {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article/index.vue'),
            },
          ]
        }
      ])
    }
  },
  // 注册插件
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ],
  // 服务端配置
  server: {
    host: '0.0.0.0',
    port: '3000'
  }
}
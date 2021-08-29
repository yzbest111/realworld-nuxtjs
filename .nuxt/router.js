import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e5f16032 = () => interopDefault(import('../pages/layout/index.vue' /* webpackChunkName: "" */))
const _0cc08bdc = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "" */))
const _c3a67e3c = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "" */))
const _59d99ba2 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "" */))
const _60e2ed20 = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "" */))
const _bb48832c = () => interopDefault(import('../pages/editor/index.vue' /* webpackChunkName: "" */))
const _6fb5e2af = () => interopDefault(import('../pages/article/index.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _e5f16032,
    children: [{
      path: "",
      component: _0cc08bdc,
      name: "home"
    }, {
      path: "/login",
      component: _c3a67e3c,
      name: "login"
    }, {
      path: "/register",
      component: _c3a67e3c,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _59d99ba2,
      name: "profile"
    }, {
      path: "/settings",
      component: _60e2ed20,
      name: "settings"
    }, {
      path: "/editor",
      component: _bb48832c,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _6fb5e2af,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

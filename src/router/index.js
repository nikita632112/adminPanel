import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { Cookies } from 'quasar'

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
    history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
  })
  let entryUrl = null
  Router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
      if (Cookies.get('token') === null || Cookies.get('token') === undefined) {
        if (to.path !== 'login') {
          entryUrl = to.fullPath
        }
        next({
          path: '/login'
        })
      } else if (entryUrl) {
        const url = entryUrl
        entryUrl = null
        next(url)
      } else {
        next()
      }
    } else {
      next()
    }
  })

  return Router
})

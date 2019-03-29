// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// lib-flexible
import 'lib-flexible'

// 使用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { getCookie } from '@/utils/storeUtil'

// vuex
import store from './store/index.js'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 路由前置守卫
router.beforeEach((to, from, next) => {
  if (!getCookie('token')) {
    next()
  } else {
    if (to.path !== '/login') {
      next()
    } else {
      next(from.fullPath)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

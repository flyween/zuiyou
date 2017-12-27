// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/rem'
import '@/style/reset.less'
import '@/style/common.less'
import '@/style/night.less'
import '@/style/iconfont.css'
import store from './store'
import FastClick from 'fastclick'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.config.productionTip = false

const menuPath = '/recommend,/follow,/discover,/message,/me'
router.beforeEach(function (to, from, next) {
  if (menuPath.indexOf(to.path) >= 0 && menuPath.indexOf(from.path) >= 0) {
    // nothing
    store.commit('UPDATE_SLIDE', {noslide: true})
  } else {
    store.commit('UPDATE_SLIDE', {noslide: false})
    if (menuPath.indexOf(to.path) >= 0) {
      store.commit('UPDATE_DIRECTION', {direction: 'reserve'})
    } else {
      store.commit('UPDATE_DIRECTION', {direction: 'forward'})
    }
  }
  store.commit('UPDATE_ROUTER', {routerName: to.path.slice(1)})
  next()
})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

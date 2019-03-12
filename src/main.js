// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

  //vuex为true的时候就会写入这些
import Vuex from 'vuex'
import store from  './store'
Vue.use(Vuex)

import './global'
import mixin from './mixin'

Vue.config.productionTip = false

Vue.mixin(mixin)
/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  ,
  store,
})

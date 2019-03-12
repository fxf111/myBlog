import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import config from '../../config'
const baseRoot = config.rootPath.slice(0, config.rootPath.length-1); //根

const Index = () =>
    import (/* webpackChunkName: "index" */'cmp/views/Index/Index');


export default new Router({
  base: baseRoot,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },    
  ]
})

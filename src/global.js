import Vue from 'vue';
import 'css/reset.css';
//logo地址前缀
//window.logoBaseUrl = 'https://192.168.110.183/manage/';
//mock数据
if(process.env.NODE_ENV=='development'){
	// import '../mock/show.js'
}

import api from './api';
window.api = Vue.prototype.api = api;

//按需引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import {Checkbox, Select, Option, Scrollbar, Container, Aside, Main, Header, Footer} from 'element-ui';
// Vue.component('ElCheckbox', Checkbox);
// Vue.component('ElSelect', Select);
// Vue.component('ElOption', Option);
// Vue.component('ElScrollbar', Scrollbar);
// Vue.component('ElContainer', Container);
// Vue.component('ElAside', Aside);
// Vue.component('ElMain', Main);
// Vue.component('ElHeader', Header);
// Vue.component('ElFooter', Footer);

// import Circle from 'cmp/common/MyCircle.vue';
// Vue.component('MyCircle',Circle);


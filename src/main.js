// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入elem ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'

// 使用vue 的插件
Vue.use(ElementUI);


// 项目伤上线的话 调试信息  false 对编程没影响
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //  components 注册组件    使用template 组件
  components: { App },
  template: '<App/>'
})

/**
 * main.js 是整个项目的入口文件
 */

import Vue from 'vue'

// 引入插件，由于 plugins 使用 默认暴露，引入格式如下
import plugins from './plugins'

import App from './App.vue'

// 使用插件，同时传入参数
Vue.use(plugins, 1, 2)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



/**
 * main.js 是整个项目的入口文件
 */

// 引入 Vue
import Vue from 'vue'

// 引入 App 这个组件，该组件是所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

// 创建 Vue 实例对象
new Vue({
  // 将 App 这个组件放入容器，其作用与 template 属性的作用一致
  render: h => h(App),
}).$mount('#app')

// .$mount()，挂载，指定 Vue 实例对象服务的容器，即 el 配置项



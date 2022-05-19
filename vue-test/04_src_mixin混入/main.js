/**
 * main.js 是整个项目的入口文件
 */

// 引入 Vue
import Vue from 'vue'

// 引入 App 这个组件，该组件是所有组件的父组件
import App from './App.vue'

// 引入混合。由于 mixin1、mixin2 是单独暴露，需要用 {} 引入
import {mixin1, mixin2} from "./mixin";

Vue.config.productionTip = false

// 全局引入 混入文件，这样，项目中的每一个 组件、vm 实例都会存在 混入文件中的配置项(App.vue 中同样存在)，无需在单独引入
Vue.mixin(mixin1)
Vue.mixin(mixin2)

// 创建 Vue 实例对象
new Vue({
  // 将 App 这个组件放入容器，其作用与 template 属性的作用一致
  render: h => h(App),
}).$mount('#app')

// .$mount()，挂载，指定 Vue 实例对象服务的容器，即 el 配置项



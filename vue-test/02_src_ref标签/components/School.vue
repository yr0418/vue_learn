<template>
  <!-- 组件结构 -->
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
  // 组件交互逻辑以及资源数据。注意，组件需要使用 export 进行暴露以供外部引用
  export default {
    // 定义组件注册时的名字
    name: "School",

    data() {
      return {
        name: "尚硅谷",
        address: "北京昌平"
      }
    },
  }
</script>

<!-- 组件样式，可以不写 -->
<style>
  .demo {
    background-color: orange;
  }
</style>

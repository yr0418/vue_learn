<template>
  <!-- 组件结构 -->
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
  // 组件交互逻辑以及资源数据。注意，组件需要使用 export 进行暴露以供外部引用
  export default {
    // 定义组件注册时的名字
    name: "Student",

    data() {
      return {
        name: "黄米饭",
        age: 18
      }
    },
  }
</script>
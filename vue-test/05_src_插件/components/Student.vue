<template>
    <!-- 组件结构 -->
    <div class="demo">
        <!-- 使用插件中自带的 全局过滤器 -->
        <h2>学生姓名：{{ name | mySlice}}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <!-- 使用插件中自带的全局指令 -->
        <input type="text" v-fbind="name">
    </div>
</template>

<script>

    // 组件交互逻辑以及资源数据。注意，组件需要使用 export 进行暴露以供外部引用
    export default {
        // 定义组件注册时的名字
        name: "Student",

        data() {
            return {
                name: "黄米饭！！！！！",
                sex: "女",
            }
        },
    }

</script>

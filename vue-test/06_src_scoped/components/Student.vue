<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
    </div>
</template>

<script>
    export default {
        name: "Student",

        data() {
            return {
                name: "黄米饭！！！！！",
                sex: "女",
            }
        },
    }

</script>

<style scoped>
    /* 在 School 组件中同样包含 名为 demo 的样式，由于在 App.vue 中先引入 Student 组件，后引入 School 组件，因此，如果 不加 scoped，那么 Student 中的 demo 样式 会被 School 中的 demo 样式所覆盖
     */
    .demo {
        background-color: orangered;
    }
</style>

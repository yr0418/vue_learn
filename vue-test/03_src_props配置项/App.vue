<template>
    <div>
        <!-- 传递参数给 Student 组件，该形式下，传递的所有参数类型为 String 类型。props 配置项不会进行强制类型转换 页面展示效果中，age+1 将变成 181 -->
        <Student sex="女"/>
        <hr>

        <!-- 传递参数给 Student 组件，注意，使用 v-bind 绑定 age 属性，因此 age 属性传入的将是 引号 中的表达式，也就是 18，Number 类型。页面展示效果中，age+1 将变成 19 -->
        <Student name = "黄米饭" :age="18" sex="女" :scorn="88"/>
        <hr>
    </div>
</template>

<script>
    import Student from "./components/Student.vue"

    export default {
        name: "App",

        components: {
            Student
        },

    }
</script>

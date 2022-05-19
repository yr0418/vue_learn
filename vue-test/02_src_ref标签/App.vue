<template>
    <div>
        <!--
            在 Vue 中使用 ref 标识每一个标签。类似原生的 id
              1. ref 用在 HTML 标签上，拿到的是 HTML 标签的 真实 DOM 元素
              2. ref 用在 Vue 组件标签上，拿到的是这个组件的 VueComponent 实例对象
        -->
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDom">点我显示上方元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    import School from "./components/School.vue"

    export default {
        name: "App",

        components: {
            School
        },

        data() {
            return {
                msg: "欢迎学习Vue"
            }
        },

        methods: {
            showDom() {
                // 控制台打印 用 ref 标识的 标签
                console.log(this.$refs.sch)
            }
        },

    }
</script>

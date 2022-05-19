<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>学生年龄：{{ age+1 }}</h2>
        <h2>学生分数：{{myScorn}}</h2>
        <!-- 对学生的分数进行修改，因为插值语法中是 myScorn 而不是 scorn -->
        <button @click="updateScorn">点我修改学生分数</button>
    </div>
</template>

<script>
    // 组件交互逻辑以及资源数据。注意，组件需要使用 export 进行暴露以供外部引用
    export default {
        // 定义组件注册时的名字
        name: "Student",

        data() {
            return {
                msg: "欢迎你！！！",
                // props 中的属性值是只读的，如果需要对其中的属性值进行修改，则应该复制一份 props 的内容到 data 中，然后去修改 data 中的数据。
                myScorn: this.scorn  // 创建 myScorn 保存 scorn 中的值
            }
        },

        methods: {
            updateScorn() {
                this.myScorn += 1
            }
        },

        // 组件接收外部参数，简单声明接收，所有参数类型均为 String
        // props: ["name", "age", "sex"]

        // 组件接收外部参数，指定参数的类型，但不会对接收到的参数做类型转换，控制台打印异常
        /*props: {
            name: String,
            age: Number,
            sex: String
        }*/

        // 组件接收外部参数，指定参数的类型、是否必需、默认值
        /**
         * 注意：
         *   1. 默认 required = false
         *   2. 若配置 required = true 但 未传入相关的参数值，控制台打印异常，页面有默认值渲染默认值，无默认值渲染为空
         *
         */
        props: {
            name: {
                type: String,     // 类型
                required: true,   // 是否必需
                default: "狼同学"  // 默认值
            },
            age: {
                type: Number,
                default: 23
            },
            sex: {
                type: String,
                required: true,
                default: "男"
            },
            scorn: {
                type: Number
            }
        }
    }

</script>

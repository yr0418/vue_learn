<template>
    <!-- 组件结构 -->
    <div class="demo">
        <h2 @click="showName">学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
    </div>
</template>

<script>
    // 引入 混入
    import {mixin1, mixin2} from "../mixin"

    // 组件交互逻辑以及资源数据。注意，组件需要使用 export 进行暴露以供外部引用
    export default {
        // 定义组件注册时的名字
        name: "Student",

        data() {
            return {
                name: "黄米饭",
                sex: "女",
                x: 999999
            }
        },

        /**
         * mixins，局部配置要使用的 混入
         * 此时，该组件中将包括 mixin1 中所有的配置项，例如 showName 方法、数据：x、y
         * 混入文件中，除生命周期函数外，其他配置项的优先级均比组件中的优先级低。
         * 例如，混入文件的 data 配置项中，存在 `x=100`，组件的 data 配置项中，也存在 `x=200`，那么，**x** 的值即为 **200**。
         */
        mixins: [mixin1, mixin2]
    }

</script>

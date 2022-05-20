<template>
  <div class="todo-header">
    <!-- @keyup，绑定键盘事件，enter 修饰符表明这个按键是 回车键 -->
    <input
        type="text"
        placeholder="请输入你的任务名称，按回车键确认"
        v-model="title"
        @keyup.enter="add"
        v-hfocus
    />
  </div>
</template>

<script>
  import {nanoid} from "nanoid";

  export default {
    name: "Header",

    props: ["addTodo"],

    data() {
      return {
        title: ""
      }
    },
    // 自定义指令，指定元素获取焦点
    directives: {
      hfocus: {
        inserted(element) {
          element.focus()
        }
      }
    },
    methods: {
      add() {
        // 添加数据校检，当未输入而直接输入回车时，不进行添加
        if (!this.title.trim()) return alert("输入不能为空")

        // 封装 todo 对象，传入 List
        const todo = {
          id: nanoid(),
          title: this.title,
          done: false
        }
        // 调用 父组件 传入的 receive 方法，这样，父组件中的 receive 方法就能接收到 传入的 todo 对象
        this.addTodo(todo)
        this.title = ""
      }
    }
  }
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>

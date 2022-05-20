<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- v-bind 绑定 方法，以 props 的形式传递给子组件，供 子组件 调用 -->
        <Header :addTodo="addTodo"/>
        <List
            :todos="todos"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
        />
        <Footer
            :todos="todos"
            :checkAll="checkAll"
            :deleteAll="deleteAll"
        />
      </div>
    </div>
  </div>
</template>

<script>

  import Header from "./components/Header";
  import List from "./components/List";
  import Footer from "./components/Footer";


  export default {
    name: "App",

    components: {List, Header, Footer},

    data() {
      return {
        todos: [
          {id: "001", title: "吃饭", done: true},
          {id: "002", title: "睡觉", done: false},
          {id: "003", title: "学习", done: true}
        ],
      }
    },

    methods: {
      // 定义 addTodo 方法，供 子组件 调用，则可以接受到来自 子组件 传递的数据，并添加到数组
      addTodo(todoObj) {
        // console.log(todoObj)
        this.todos.unshift(todoObj)
      },

      // 是否勾选
      checkTodo(id) {
        this.todos.forEach((todo) => {
          if (todo.id === id) {
            todo.done = !todo.done
          }
        })
      },

      // 删除
      // Vue 中对数组的删除操作只能通过遍历获取元素下标，再利用 splice 进行删除操作，不能类比 java 中的 list
      deleteTodo(id) {
        for (let i = 0; i < this.todos.length; i++) {
          if (this.todos[i].id === id) {
            this.todos.splice(i, 1)
          }
        }
        // console.log(this.todos)
      },

      // 是否全选
      checkAll(check) {
        if (check) {
          this.todos.forEach((todo) => {
            todo.done = true
          })
        } else {
          this.todos.forEach((todo) => {
            todo.done = false
          })
        }
      },

      deleteAll() {
        // for (let i = 0; i < this.todos.length; i++) {
        //   if (this.todos[i].done === true) {
        //     this.todos.splice(i, 1)
        //   }
        // }

        /**
         * 使用 过滤器 实现 数组的删除效果
         */
        this.todos = this.todos.filter((todo) => {
          return !todo.done  // 留下 todo.done = false 的值
        })
      }
    }
  }
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>

<template>
  <div class="todo-footer" v-show="len">
    <label>
      <!--<input type="checkbox" :checked="isAll" @click="check"/>-->

      <!-- 使用 v-model 配合 计算属性的完整形式 简化 是否全选 的实现 -->
      <input type="checkbox" v-model:checked="isAll"/>
    </label>
    <span>
          <span>已完成{{doneTotal}}</span> / 全部{{len}}
        </span>
    <button class="btn btn-danger" @click="deleteItem">清除已完成任务</button>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    props:["todos", "checkAll", "deleteAll"],

    computed: {
      // 总数
      len() {
        return this.todos.length
      },

      // 统计 已做 todo 的数量
      count() {
        let countDone = 0
        this.todos.forEach((todo) => {
          if (todo.done === true) {
            countDone += 1
          }
        })
        return countDone
      },

      // 利用 reduce 进行统计
      doneTotal() {
        /**
         * reduce 接收两个参数，第一个参数 是一个方法，这是 reduce 进行条件统计的的主体，第二个参数 是 reduce 启动时的初始值
         * reduce 调用的次数是数组的长度，循环调用，最后一次调用的返回值 即 reduce 的返回值
         * 在 reduce 的第一个方法中，接收两个参数：
         *   1. pre：为 reduce 上一次调用的返回值，其初始值即 reduce 接收的第二个参数
         *   2. current：数组中，当前遍历到的对象
         * @type {number}
         */
        const count = this.todos.reduce((pre, current)=> {
          return pre + (current.done ? 1: 0)
        }, 0)
        return count
      },

      // 判断是否全部完成
      isAll: {
        get() {
          return this.len === this.doneTotal && this.len > 0
        },

        set(value) {
          return this.checkAll(value)
        }

      }
    },

    methods: {
      check(event) {
        return this.checkAll(event.target.checked)
      },

      deleteItem() {
        return this.deleteAll()
      }
    }
  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>

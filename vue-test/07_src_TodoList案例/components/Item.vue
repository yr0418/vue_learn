<template>
  <li>
    <label>
      <!-- v-bind 绑定 checked 属性值，该属性用以表示该多选框是否选择 -->
      <!-- @change 绑定 改变事件，当勾选状态改变时触发该事件，同时传入参数 item.id -->
      <input
          type="checkbox"
          :checked="item.done"
          @change="handlerCheck(item.id)"
      />
      <span>{{ item.title }}</span>
    </label>
    <button class="btn btn-danger" @click="itemDelete(item.id)">删除</button>
  </li>
</template>

<script>
  export default {
    name: "Item",

    props: ["todo", "checkTodo", "deleteTodo"],

    data() {
      return {
        item: this.todo
      }
    },
    methods: {
      handlerCheck(id) {
        // console.log(id)
        this.checkTodo(id)
      },

      itemDelete(id) {
        if (confirm("确定删除吗？")) {
          this.deleteTodo(id)
        }
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #dddddd;
  }

  li:hover button {
    display: block;
  }

</style>

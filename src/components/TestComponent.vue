<template>
  <form @submit.prevent="addTodo">
    <input type="text" placeholder="Enter a new task" v-model="task" />
  </form>
</template>

<script>
//import store from '../store/index'

export default {
  data() {
    return {
      task: "",
      id: 0,
    };
  },
  methods: {
    addTodo: function () {
      console.log(this.$store)
      // const { id, task } = this;
      // this.$store.commit("addTodo", { id, task });
      // this.id++;
      // console.log(this.store.todos)
      // this.task = "";
    },
  }
};
</script>

<style>
</style>
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TestComponent msg="Welcome to Your Vue.js App"/>
  <TodoList/>
  <!-- <telport to="#portal-root">
    <h1>hello</h1>
  </telport> -->
</template>

<script>
import TestComponent from './components/TestComponent.vue'
import TodoList from './components/TodoList.vue'


export default {
  name: 'App',
  components: {
    TestComponent,
    TodoList
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

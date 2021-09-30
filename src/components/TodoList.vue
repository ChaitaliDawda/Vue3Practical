<template>
  <ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.description }}
  </li>
</ul>
</template>

<script>
export default {

}
</script>

<style>

</style>
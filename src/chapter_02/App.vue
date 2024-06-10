<template>
  <div class="container">
    <h1>Templating</h1>
    <!-- 
        Text interpolation is done via double curly braces (also known as moustaches).
        The value inside the moustaches is evaluated as JavaScript and the result is
        rendered in the DOM.
        The value is reactive, meaning it will update when the value changes.
        The value can be a variable, a function, or an expression.
        Since this is used inside a redner function, it must have a reference to the
        object that holds the value (aka if 'state' as reactive reference does not 
        exist on the component internal state, this will throw an exception).

        The v-html directive is used to render HTML content inside the DOM.
    -->
    <div><span v-html="state.title"></span> : {{ state.value }}</div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  value: 0,
  title: '<bold>Count</bold>'
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}
</style>

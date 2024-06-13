<template>
  <div class="container">
    <h1>Composables</h1>
    <!-- 
      Composables are a way to extract logic from components and reuse it in other components.
      This can be useful when you have logic that is shared between multiple components.

      In vue2 this was achieved via mixins, but in vue3 we have the composition API which
      is a more powerful way to share logic between components, in terms of being more 
      flexible and easier to understand/trace.

      Composables are functions that return an object with properties that can be used in
      the component. They can be used in the setup function of the component. General
      convention is to prefix the function with 'use' (e.g. useCounter).
    -->
    <div>
      <div>Parent Counter:</div>
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>

    <br />

    <!-- 
      The child component also uses the counter logic, but it also uses a formatter for it.
    -->
    <c-child></c-child>
  </div>
</template>

<script setup lang="ts">
import CChild from './components/c-child.vue'

import { useCounter } from './composables'

const { count, increment, decrement } = useCounter()
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
  flex-direction: column;
}
</style>

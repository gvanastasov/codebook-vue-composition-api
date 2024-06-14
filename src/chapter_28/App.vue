<template>
  <div class="container">
    <h1>State Management</h1>
    <!-- 
      State management is a way to manage the state of your application in a centralized
      location. This can be useful when you have multiple components that need to share
      the same state.

      In the given example, all 3 components share the same state using a store.
      CounterOne is used to increment the counter value.
      CounterTwo is used to decrement the counter value.
      The App.vue component displayes the current counter value.
    -->
    <CCounterOne />
    <CCounterTwo />
    <div>Count: {{ counterStore.count }}</div>
  </div>
</template>

<script setup lang="ts">
import CCounterOne from './components/c-counter-one.vue'
import CCounterTwo from './components/c-counter-two.vue'

import { counterStore } from './state'
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

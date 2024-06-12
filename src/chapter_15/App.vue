<template>
  <div class="container">
    <h1>Events</h1>
    <!-- 
      Apart from the built-in events, you can also define custom events emit from
      within the child component and listen to them in the parent component.
    -->
    <c-child
      @inline-click="() => console.log('Inline click event')"
      @click="() => console.log('Click event')"
      @argument-click="(value) => console.log('Argument click event', value)"
    ></c-child>
  </div>
</template>

<script setup lang="ts">
import CChild from './components/c-child.vue'
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

<template>
  <div class="container">
    <Counter/>
  </div>
</template>

<script setup lang="ts">
import Counter from './components/Counter.vue';
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
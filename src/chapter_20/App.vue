<template>
  <div class="container">
    <h1>Async components</h1>
    <!-- 
      Async components are useful when you want to load a component only when it's needed.
      This can be useful for performance optimization, especially when you have a large
      application with many components.
    -->
    <CChild v-if="state.showChild" />

    <!-- 
      Check your browser's network tab to see the component being loaded when the button
      is clicked. You should see the chunk file representing the component being loaded.
    -->
    <button @click="state.showChild = !state.showChild">Toggle Child</button>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'

const state = ref({
  showChild: false
})

const CChild = defineAsyncComponent({
  loader: () => import('./components/c-child.vue'),
  loadingComponent: {
    template: '<div>Loading...</div>'
  },
  errorComponent: {
    template: '<div>Error...</div>'
  },
  delay: 200,
  timeout: 3000
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
  flex-direction: column;
}

.blue {
  color: blue;
}
</style>

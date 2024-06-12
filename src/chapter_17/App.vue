<template>
  <div class="container">
    <h1>Multi-root component</h1>
    <!-- 
      A component used to NOT allow multiple root elements in the template.
      This is a limitation of Vue 2. In Vue 3, a component can have multiple
      root elements in the template.

      However, when passing attributes to a component with multiple root elements,
      we need explicitly bind the root to which those will fall through. This is
      done using the v-bind directive.
    -->
    <c-parent text="Application"></c-parent>
  </div>
</template>

<script setup lang="ts">
import CParent from './components/c-parent.vue'
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

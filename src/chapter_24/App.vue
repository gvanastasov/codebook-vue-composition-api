<template>
  <div class="container">
    <h1>Transitions</h1>
    <!-- 
      The AnimateFade component is a wrapper for the content that we want to animate.
      The content will fade in and out when the button is clicked. See the component 
      for more details.
    -->
    <div :style="{ position: 'relative' }">
      <AnimateFade :style="{ position: 'absolute' }">
        <span :key="count">{{ count }}</span>
      </AnimateFade>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AnimateFade from './components/a-fade.vue'

const count = ref(0)
setInterval(() => count.value++, 1000)
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

<template>
  <div class="container">
    <h1>THE LIFECYCLE HOOKS</h1>
    <div>
      <ul>
        <li v-for="(hook, idx) in state.hooks" :key="idx + 1">{{ idx + 1 }}. {{ hook }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onBeforeMount, onMounted } from 'vue'

const state = reactive({
  hooks: [] as string[] // Explicitly define the type of the hooks array as string[]
})

onBeforeMount(() => {
  state.hooks.push('onBeforeMount')
})

onMounted(() => {
  state.hooks.push('onMounted')
})

/**
 * everything inside a setup script is executed synchronously
 * before the component is mounted to the DOM and beforeCreate
 * lifecycle hook is called, essentially making it the first
 * lifecycle hook to be called.
 */
state.hooks.push('setup')
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

.active {
  background-color: #919191;
}
</style>

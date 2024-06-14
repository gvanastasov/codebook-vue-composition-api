<template>
  <div class="container">
    <h1>Cached components</h1>

    <!-- 
      When we use v-if, the component is destroyed and re-created every time it's toggled.
    -->
    <div>
      Non-cached: <c-counter v-if="state.mounted" />
      <button @click="state.mounted = !state.mounted">{{ state.mounted ? 'Hide' : 'Show' }}</button>
    </div>

    <!-- 
      When we use v-show, the component is hidden and shown without being destroyed.
    -->
    <div>
      Hidden: <c-counter v-show="state.hidden" />
      <button @click="state.hidden = !state.hidden">{{ state.hidden ? 'Show' : 'Hide' }}</button>
    </div>

    <!-- 
      When we use keep-alive, the component is cached and not destroyed when hidden. Caching
      here means that the component is kept in memory and its state is preserved.
    -->
    <div>
      Cached: <keep-alive><c-counter v-if="state.cached" /></keep-alive>
      <button @click="state.cached = !state.cached">{{ state.cached ? 'Hide' : 'Show' }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CCounter from './components/c-counter.vue'

const state = ref({
  mounted: true,
  cached: true,
  hidden: true
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

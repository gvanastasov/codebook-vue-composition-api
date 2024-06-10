<template>
  <div class="container">
    <h1>Watchers</h1>
    <form>
      <input type="text" v-model="state.username" />
    </form>

    <p>
      <small>Dirty: {{ state.dirty }}</small>
    </p>
    <p>
      <small>Empty: {{ state.empty }}</small>
    </p>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'

const state = reactive({
  username: '',
  dirty: false,
  empty: true
})

/**
 * Watchers are used to watch for changes in reactive
 * state and trigger a callback function when the value
 * changes.
 *
 */
watch(
  () => state.username,
  (newValue, oldValue) => {
    console.log('newValue:', newValue)
    console.log('oldValue:', oldValue)

    if (!state.dirty) {
      state.dirty = true
    }

    state.empty = state.username === ''
  }
)
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

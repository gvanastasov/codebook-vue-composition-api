<template>
  <div class="container">
    <h1>Computed Properties</h1>
    <div>value: {{ state.value }}</div>

    <!-- 
      Sometimes having logic inside the template is not nice,
      so we can use the setup syntax to separate the logic 
      from the template. One way to achieve this is by using
      computed properties to calculate values based on the
      reactive state.
    -->
    <div>doubled: {{ double }}</div>
    <div>type: {{ isOdd ? 'Odd' : 'Even' }}</div>
    <div>
      <button @click="state.value += 1">Increment</button>
      <button @click="state.value -= 1">Decrement</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'

const state = reactive({
  value: 0
})

/**
 * Computed properties are reactive and will update
 * whenever the reactive state changes (that is all
 * the properties that are used inside the computed
 * function, which are also reactive).
 *
 * In this case, the `double` computed property will
 * update whenever the `state.value` changes.
 *
 */
const double = computed(() => state.value * 2)
const isOdd = computed(() => state.value % 2 === 1)

/**
 * We can also create computed properties that have
 * a setter function. This is useful when we want to
 * update the reactive state based on the computed
 * property. This is called writable computed properties.
 */
const random = computed({
  get() {
    return state.value * Math.random()
  },
  set(value) {
    state.value = value
  }
})
console.log('random', random)
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

<template>
  <div class="container">
    <h1>Transitions</h1>
    <!-- 
      The AnimateFade component is a wrapper for the content that we want to animate.
      The content will fade in and out when the button is clicked. See the component 
      for more details.

      The content inside Transition component must always be either:
        - conditionally rendered using v-if or v-show
        - keyed using the key attribute
    -->
    <div :style="{ position: 'relative' }">
      <AnimateFade :style="{ position: 'absolute' }">
        <span :key="count">{{ count }}</span>
      </AnimateFade>
    </div>

    <br />

    <!-- 
      When dealing with more than one element, we can use the TransitionGroup component.
      The main difference here being that the TransitionGroup component wraps a list of
      elements that are being added or removed from the DOM, in esssense animting a group
      of elements.
    -->
    <div>
      <AnimateFadeCollection :items="items" />
      <button @click="addRandomItem">Add</button>
      <button @click="removeRandomItem">Remove</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AnimateFade from './components/a-fade.vue'
import AnimateFadeCollection from './components/a-fade-collection.vue'

const count = ref(0)
setInterval(() => count.value++, 1000)

const items = ref([1, 2, 3, 4, 5])
let lastIndex = items.value.length
const addRandomItem = () => {
  lastIndex++
  const randomIndex = Math.floor(Math.random() * (items.value.length + 1))
  items.value.splice(randomIndex, 0, lastIndex)
}
const removeRandomItem = () => {
  const randomIndex = Math.floor(Math.random() * items.value.length)
  items.value.splice(randomIndex, 1)
}
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

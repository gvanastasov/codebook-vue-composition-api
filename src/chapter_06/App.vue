<template>
  <div class="container">
    <div>
      <!-- 
        (v-bind:) class and style are special types of attribute
        bindings in Vue. They can accept an object, where the keys
        are the CSS property names and the values are the CSS
        property values when styling, or the actual class names
        when applying classes.
        
        the syntax for classes is:
          - :class="{ 'class-name': condition, etc... }"
          - :class="[ 'class-name', 'class-name-2', etc... ]"
          - :class="classObject" (where classObject is a computed property)

        the syntax for styles is:
          - :style="{ 'property-name': value, etc... }"
          - :style="[ { 'property-name': value }, { 'property-name-2': value-2 }, etc... ]"
          - :style="styleObject" (where styleObject is a computed property)
      -->
      <button
        v-for="n in 3"
        :key="n"
        :class="{ active: n === state.activeIndex }"
        :style="{ color: n === state.activeIndex ? 'white' : 'black' }"
        @click="setActive(n)"
      >
        {{ n === state.activeIndex ? 'Active' : 'Inactive' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  activeIndex: 0
})

function setActive(index: number) {
  state.activeIndex = index
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

.active {
  background-color: #919191;
}
</style>

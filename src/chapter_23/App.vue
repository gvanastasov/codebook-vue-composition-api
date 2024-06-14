<template>
  <div class="container">
    <h1>Dynamic components</h1>
    <!-- 
      Dynamic components are useful when you want to load a component based on a condition.
      This can be useful when you want to switch between components based on a user's action.
      This is done via a special <component> element in Vue.
    -->
    <component :is="'div'">Just a dummy div...</component>

    <!-- 
      We can also bind a component as a type. This can be useful when you want to load a component
      based on a condition. The rest of the interface is the same as a normal component.
    -->
    <component :is="CChild" v-bind="{ text: 'Just a child component...' }" />
  </div>
</template>

<script setup lang="ts">
import CChild from './components/c-child.vue'
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

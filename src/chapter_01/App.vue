<template>
  <div class="container">
    <HelloWorld/>
  </div>
</template>

<script setup lang="ts">
  /**
   * This file is a single-file component (SFC for short), which means it
   * contains the template, script, and style tags all in one.
   * 
   * Since we are using 'setup' in the script tag, this means
   * we are using the Composition API. This is a new way to
   * write Vue components. Everything inside the script tage is
   * part of the 'setup' function, used during the component's
   * initialization (and not global scope).
   * 
   * It allows greater control over the component's logic and
   * data, and is more flexible than the Options API. 
   */
  import HelloWorld from './components/HelloWorld.vue';
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
}
</style>
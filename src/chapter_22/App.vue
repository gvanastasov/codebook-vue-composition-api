<template>
  <div class="container">
    <h1>Plugins</h1>

    <p>In England, they say: {{ $translate('EN.hello') }}</p>
    <p>In Denmark, they say: {{ $translate('DK.hello') }}</p>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'

/**
 * Plugins are a way to add global properties, methods or behaviour to your Vue application.
 * When you create a plugin, you can add it to your Vue application using the `app.use()` method.
 * In this particular case, we have added a global 'logging' method. Accessing this within an
 * instance is done by calling `app.config.globalProperties.$log()`. For setup functions this is a
 * bit more complicated, as you need to get the current instance and then access the global properties.
 *
 */
const { $log, $translate } = getCurrentInstance()!.appContext.config.globalProperties

$log('Hello from App.vue')
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

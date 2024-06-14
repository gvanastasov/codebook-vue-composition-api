<template>
  <button @click="counterStore.increment()">Increment</button>
</template>

<script setup lang="ts">
import { counterStore } from '../state'
</script>

<template>
  <button @click="counterStore.decrement()">Decrement</button>
</template>

<script setup lang="ts">
import { counterStore } from '../state'
</script>

<template>
  <span>{{ count }}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)

setInterval(() => count.value++, 1000)
</script>

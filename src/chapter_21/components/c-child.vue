<template>
  <div>
    <div>Child Counter:</div>
    <button @click="decrement">-</button>
    <span>{{ format(count) }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script setup lang="ts">
import { useCounter, useFormatter } from '../composables'

const { count, increment, decrement } = useCounter()
const { format } = useFormatter()
</script>

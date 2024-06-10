<template>
  <component :is="h">{{ props.text }}</component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  level: string
  text: string
}>()

const h = computed(() => `h${props.level}`)
</script>

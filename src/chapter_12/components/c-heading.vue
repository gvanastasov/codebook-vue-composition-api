<!-- 
  This component is used to render headings with different levels.
  It accepts two props:
  - level: The level of the heading (1-6)
  - text: The text to display in the heading
  The component uses the h1-h6 HTML elements to render the heading.

  (expecting that every application has many of those...)
-->
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

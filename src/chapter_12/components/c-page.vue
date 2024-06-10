<template>
  <c-container>
    <c-heading level="1" :text="props.title" />
    <slot></slot>
  </c-container>
</template>

<script setup lang="ts">
import CContainer from './c-container.vue'
import CHeading from './c-heading.vue'

const props = defineProps<{
  title: string
}>()
</script>

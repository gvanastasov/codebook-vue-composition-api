<template>
  <c-child text="Line 1"></c-child>
  <c-child text="Line 2" v-bind="$attrs"></c-child>
  <c-child text="Line 3"></c-child>
</template>

<script setup lang="ts">
import CChild from './c-child.vue'
</script>

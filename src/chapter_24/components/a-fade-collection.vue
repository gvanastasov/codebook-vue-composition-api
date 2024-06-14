<template>
  <TransitionGroup name="fade-collection" tag="ul">
    <li v-for="item in items" :key="item">
      <slot :data="item">{{ item }}</slot>
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
defineProps({
  items: {
    type: Array as PropType<any[]>,
    required: true
  }
})
</script>

<style>
.fade-collection-enter-active,
.fade-collection-leave-active {
  transition: all 0.5s ease;
}
.fade-collection-enter-from,
.fade-collection-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

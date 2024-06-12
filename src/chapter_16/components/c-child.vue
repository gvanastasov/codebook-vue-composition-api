<template>
  <div class="child">{{ text }}</div>
</template>

<script setup lang="ts">
defineProps({ text: String })

defineOptions({
  /**
   * We can also disable attribute inheritance by setting the inheritAttrs
   * option to false. (PS: this is not reactive and cannot be set dynamically)
   */
  inheritAttrs: true
})
</script>

<style scoped>
.child {
  color: white;
  background-color: #f00;
}
</style>

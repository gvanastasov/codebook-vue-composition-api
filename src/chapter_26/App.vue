<template>
  <div class="container">
    <h1>Teleport</h1>
    <!-- 
      This acts as global placeholder for the modal content. The content will be teleported
      inside of it, from within anywhere around our app. Technically, its good to keep those
      placeholders at the root of the app, outside of the lifecycle of the components, to 
      ensure they are available when needed. For now this works fine.
    -->
    <div id="modal-wrapper" v-show="!isModalEmpty">
      <div ref="modalContent"></div>
    </div>
    <!-- 
      Just a dummy hidden form, to show how teleport works. The form is teleported inside the
      modal-wrapper div, when the button is clicked. Check the c-form.vue file for more details.
    -->
    <CForm />
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, onUnmounted } from 'vue'
import CForm from './components/c-form.vue'

/**
 * We also need to check if the modal content is empty, so we can hide the modal-wrapper
 * when there is no content to show. We use a MutationObserver to create reactivity for
 * the modal content. In a bigger app, you might want to create a custom directive for this.
 */
const modalContent: Ref<HTMLElement | null> = ref(null)
const isModalEmpty = ref(true)
let observer: MutationObserver | null = null

onMounted(() => {
  observer = new MutationObserver(() => {
    isModalEmpty.value = modalContent.value?.innerHTML.trim() === ''
  })

  if (modalContent.value) {
    observer.observe(modalContent.value, { childList: true, subtree: true })
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  flex-direction: column;
}

#modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

#modal-wrapper > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem;
}
</style>

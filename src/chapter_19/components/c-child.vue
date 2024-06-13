<template>
  <div>
    <div>Child scope...</div>
    <p>{{ injected.myApp }}</p>
    <p>{{ injected.myRoot.message.value }}</p>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'
import { myAppKey, myRootKey } from '../provide/keys'

const injected = {
  myApp: inject(myAppKey),
  myRoot: inject(myRootKey) as { message: Ref<string>; updateMessage: () => void }
}
</script>

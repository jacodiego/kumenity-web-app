<script setup lang="ts">
import { RouterView } from 'vue-router'
import { provide, shallowRef } from 'vue'
import router from '@/router'
import layouts from './layouts'

const layout = shallowRef('div')

router.afterEach((to) => {
  layout.value = layouts[to.meta.layout]
})

provide('app:layout', layout)
</script>

<template>
  <component :is="layout || 'main'">
    <RouterView />
  </component>
</template>

<style scoped>

</style>

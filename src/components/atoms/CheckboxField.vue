<script setup lang="ts">
import Checkbox from 'primevue/checkbox';

const model = defineModel()
const props = defineProps(['id', 'label'])

</script>

<template>
  <div class="flex gap-2 items-center py-2">
    <Checkbox :id="props.id" v-model="model" :value="true"/>
    <label :for="props.id" class="text-xs">{{ props.label }}</label>
  </div>
</template>

<style scoped>

</style>

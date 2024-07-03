<script setup lang="ts">
import InputText from "primevue/inputtext";

const model = defineModel()
const props = defineProps(['id', 'label'])

</script>

<template>
  <div class="flex flex-col gap-1 py-2">
    <label :for="props.id" class="text-xs">{{ props.label }}</label>
    <InputText :id="props.id" v-model="model" size="small"/>
  </div>
</template>

<style scoped>

</style>

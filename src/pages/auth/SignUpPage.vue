<script setup lang="ts">

import { ref } from 'vue'

const username = ref()
const email = ref()
const password = ref()
const confirmPassword = ref()
const acceptConditions = ref()
</script>

<template>
  <section class="flex flex-col items-center gap-4 w-full">
    <div class="text-xl font-bold">
      Sign Up
    </div>
    <div>
      <InputTextField id="username" label="Username" v-model="username" />
      <InputTextField id="email" label="E-mail" v-model="email" />
      <InputTextField id="password" label="Password" v-model="password" />
      <InputTextField id="confirmPassword" label="Confirm password" v-model="confirmPassword" />
      <CheckboxField id="acceptConditions" label="I have read and agree to the privacy policy *" v-model="acceptConditions" />
    </div>
    <div>
      <Button label="Sign up" size="small" />
    </div>
    <div class="flex justify-between">
      <RouterLink to="/">
        <Button label="Home" size="small" link/>
      </RouterLink>
      <RouterLink to="/auth/sing_in">
        <Button label="Sign in" size="small" link/>
      </RouterLink>
    </div>
  </section>
</template>

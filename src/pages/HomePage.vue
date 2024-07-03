<script setup lang="ts">
</script>

<template>
  <section class="flex flex-col items-center gap-4 w-full">
    <div>
      Home
    </div>
    <nav class="flex justify-between gap-2">
      <RouterLink to="/auth/sign_in">
        <Button label="Sign in" size="small"/>
      </RouterLink>
      <RouterLink to="/auth/sign_up">
        <Button label="Sign up" size="small" />
      </RouterLink>
    </nav>
  </section>
</template>

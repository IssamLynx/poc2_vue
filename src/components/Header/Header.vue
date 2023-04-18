<script setup>
import Logo from '@/assets/zenika_logo.png'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="w-full h-16 flex items-center space-x-4">
      <RouterLink to="/"><img :src="Logo" class="h-full aspect-auto w-[90px]" /></RouterLink>
      <RouterLink to="/">Valeurs</RouterLink>
      <RouterLink to="/">Offres</RouterLink>
      <RouterLink to="/">Green IT</RouterLink>
      <RouterLink to="/">Login</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="h-24 w-screen box-border flex justify-around items-center flex-col">
    <nav class="w-1/2 text-black flex justify-around justify-items-center">
      <RouterLink to="/">Youtube</RouterLink>
      <RouterLink to="/">Instagram</RouterLink>
      <RouterLink to="/">Facebook</RouterLink>
      <RouterLink to="/">Twitter</RouterLink>
    </nav>
    <p class="text-black">Copyright © 2023 Zenika − Tous droits réservés.</p>
  </footer>
</template>

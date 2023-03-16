<script setup>
import Logo from '../../assets/zenika_logo.png'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-full h-16 flex items-center space-x-4">
    <RouterLink to="/">
      <img :src="Logo" class="h-full aspect-auto w-[90px]" />
    </RouterLink>
    <ul>
      <li><a>Valeurs</a></li>
    </ul>
    <ul>
      <li><a>Offres</a></li>
    </ul>
    <ul>
      <li><a>Green IT</a></li>
    </ul>
    <ul>
      <li><a>Sécurité</a></li>
    </ul>
  </div>
</template>

<style scoped></style>

<template>
  <router-link :to="`/details/${anime._id}`">
    <article class="w-[200px] h-[270px] my-1">
      <img :src="anime.image" alt="poster" class="w-full h-full object-cover" />
      <h2>{{ anime.title }}</h2>
      <p>{{ anime.type }}</p>
    </article>
  </router-link>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    anime: Object
  }
})
</script>

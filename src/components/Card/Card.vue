<template>
  <router-link :to="`/details/${anime._id}`">
    <div class="w-[200px] h-[270px] my-1">
      <img :src="anime.image" alt="poster" class="w-full h-full object-cover" />
      <p>{{ anime.title }}</p>
      <p>{{ anime.type }}</p>
    </div>
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

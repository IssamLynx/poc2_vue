<template>
  <router-link :to="`/details/${id}`">
    <article class="w-[200px] h-[270px] my-1">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
        @error="errorImageHandling"
      />
      <h2>{{ title }}</h2>
      <p>{{ type }}</p>
    </article>
  </router-link>
</template>

<script setup>
import noImageAvailable from '@/assets/SVG/no_image_available.svg'

const errorImageHandling = (event) => {
  event.target.src = noImageAvailable
}
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  id: {
    type: String,
    required: true
  }
})
</script>

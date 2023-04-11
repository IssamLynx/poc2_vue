<script setup>
import Card from '@/components/Card/Card.vue'
const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul v-if="data.length > 0" class="my-6 flex flex-wrap justify-around py-1 flex-row">
    <li v-for="(anime, index) in data" :key="index" class="my-10">
      <Card :title="anime.title" :type="anime.type" :id="anime._id" :image="anime.image" />
    </li>
  </ul>
  <p v-else>Not Found</p>
</template>

<style></style>

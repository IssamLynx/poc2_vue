<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getSpecificAnime } from '@/services/api'

const route = useRoute()
const id = route.params.id
const animeDetails = ref({})

const fetchSpecificAnime = async () => {
  try {
    const specificAnime = await getSpecificAnime(id)
    animeDetails.value = specificAnime
  } catch (error) {
    console.error(error.message)
  }
}
await fetchSpecificAnime()
</script>

<template>
  <div class="h-screen">
    <div class="w-full flex space-x-4 p-4">
      <img :src="animeDetails.image" alt="{{animeDetails.image}}" class="h-full aspect-auto" />
      <div class="flex-col">
        <h1 class="font-bold text-xl">{{ animeDetails.title }}</h1>
        <p class="my-4 text-justify" v-if="animeDetails.synopsis">
          {{ animeDetails.synopsis }}
        </p>
        <p class="my-4 text-justify" v-else>Pas de synopsis disponible</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getSpecificAnime } from '../../services/api'

//PARAMS
const route = useRoute()
console.log(route.params.id)

//STATE
const state = reactive({
  animeDetails: []
})

const fetchSpecificAnime = async () => {
  try {
    const specificAnime = await getSpecificAnime(route.params.id)
    state.animeDetails = specificAnime
  } catch (error) {
    console.error(error.message)
  }
}

await fetchSpecificAnime()
</script>

<template>
  <div class="h-screen">
    <div class="w-full flex space-x-4 p-4">
      <img
        :src="state.animeDetails.image"
        alt="{{state.animeDetails.image}}"
        class="h-full aspect-auto"
      />
      <div class="flex-col">
        <h1 class="font-bold text-xl">{{ state.animeDetails.title }}</h1>
        <p class="my-4 text-justify" v-if="state.animeDetails.synopsis">
          {{ state.animeDetails.synopsis }}
        </p>
        <p class="my-4 text-justify" v-else>Pas de synopsis disponible</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'

//PARAMS
const route = useRoute()
console.log(route.params.id)

//STATE
const state = reactive({
  beerDetails: []
})

//OPTION
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
}
//API CALL
async function fetchBeerdetails() {
  const response = await fetch(
    `https://anime-db.p.rapidapi.com/anime/by-id/${route.params.id}`,
    options
  ).then((res) => res.json())
  return response
}

state.beerDetails = await fetchBeerdetails()
</script>

<template>
  <div class="h-screen">
    <div class="w-full flex space-x-4 p-4">
      <img
        :src="state.beerDetails.image"
        alt="{{state.beerDetails.image}}"
        class="h-full aspect-auto"
      />
      <div class="flex-col">
        <h1 class="font-bold text-xl">{{ state.beerDetails.title }}</h1>
        <p class="my-4 text-justify" v-if="state.beerDetails.synopsis">
          {{ state.beerDetails.synopsis }}
        </p>
        <p class="my-4 text-justify" v-else>Pas de synopsis disponible</p>
      </div>
    </div>
  </div>
</template>

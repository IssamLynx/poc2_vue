<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
//PARAMS
const route = useRoute()
console.log(route)
console.log(route.params.id)

//STATE
const state = reactive({
  beerDetails: []
})

//OPTION
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.VITE_APP_API_KEY,
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

state.beerDetails === (await fetchBeerdetails())
</script>

<!-- <template><h1>Hello world</h1></template> -->

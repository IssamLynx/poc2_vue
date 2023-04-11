<template>
  <defaultLayout>
    <p v-if="isLoading">En cours de chargement...</p>
    <div v-else>
      <SearchBar v-model="searchInput" />
      <ul v-if="data.length > 0" class="my-6 flex flex-wrap justify-around py-1 flex-row">
        <li v-for="(anime, index) in data" :key="index" class="my-10">
          <Card :anime="anime" />
        </li>
      </ul>
      <p v-else>Not Found</p>
    </div>
  </defaultLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import Card from '@/components/Card/Card.vue'
import SearchBar from '@/components/SearchBar/SearchBar.vue'
import defaultLayout from '@/layouts/defaultLayout.vue'
import { getAllAnime } from '@/services/api'

const initialData = ref([])
const isLoading = ref(true)
const searchInput = ref('')

const data = computed(() => {
  if (searchInput.value === '') return initialData.value
  else {
    return initialData.value.filter((anime) => {
      return anime.title.toLowerCase().includes(searchInput.value.toLowerCase())
    })
  }
})

const fetchAnimeList = async () => {
  try {
    const animeList = await getAllAnime()
    initialData.value = animeList
  } catch (error) {
    console.error(error.message)
  } finally {
    isLoading.value = false
  }
}

fetchAnimeList()
</script>

<template>
  <div>
    <Header></Header>
    <div v-if="isLoading === true">
      <p>En cours de chargement...</p>
    </div>
    <div v-else>
      <SearchBar @handleSearch="handleSearch" @handleClear="handleClear" />
      <div v-if="data.length > 0" class="my-6 flex flex-wrap justify-around py-1 flex-row">
        <div v-for="(anime, index) in data" :key="index" class="my-10">
          <Card :anime="anime" />
        </div>
      </div>
      <div v-else>
        <p>Not Found</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from '../../components/Card/Card.vue'
import SearchBar from '../../components/SearchBar/SearchBar.vue'
import Header from '../../components/Header/Header.vue'
import Footer from '../../components/Footer/Footer.vue'
import { getAllAnime } from '../../services/api'

const data = ref([])
const isLoading = ref(true)
const initialData = ref([])

const fetchAnimeList = async () => {
  try {
    const animeList = await getAllAnime()
    data.value = animeList
    initialData.value = animeList
  } catch (error) {
    console.error(error.message)
  } finally {
    isLoading.value = false
  }
}

fetchAnimeList()

const handleSearch = (searchInput) => {
  if (searchInput.length > 0) {
    const filteredData = initialData.value.filter((anime) => {
      return anime.title.toLowerCase().includes(searchInput.toLowerCase())
    })
    data.value = filteredData
  }
}
const handleClear = () => {
  data.value = initialData.value
}
</script>

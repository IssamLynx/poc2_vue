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
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Card from '../../components/Card/Card.vue'
import SearchBar from '../../components/SearchBar/SearchBar.vue'
import Header from '../../components/Header/Header.vue'
import Footer from '../../components/Footer/Footer.vue'

const data = ref([])
const isLoading = ref(true)
const initialData = ref([])

const options = {
  method: 'GET',
  params: {
    page: '1',
    size: '30'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
}

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://anime-db.p.rapidapi.com/anime?page=1&size=30',
      options
    )
    data.value = response.data.data
    initialData.value = response.data.data
    isLoading.value = false
  } catch (error) {
    console.log(error.message)
  }
}

onMounted(() => {
  fetchData()
})
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

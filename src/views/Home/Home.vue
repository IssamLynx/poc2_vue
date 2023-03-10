<template>
  <div>
    <div v-if="isLoading === true">
      <p>En cours de chargement...</p>
    </div>
    <div v-else>
      <div v-if="data.length > 0" class="my-6 flex flex-wrap justify-around py-1 flex-row">
        <div v-for="(anime, index) in data" :key="index" class="my-10">
          <Card :anime="anime" />
        </div>
      </div>
      <div v-else>
        <p>Not Found</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import Card from '../../components/Card/Card.vue'

export default defineComponent({
  components: {
    Card
  },
  setup() {
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
        'X-RapidAPI-Key': process.env.VUE_APP_RAPIDAPI_KEY,
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

    return {
      data,
      isLoading,
      initialData
    }
  }
})
</script>

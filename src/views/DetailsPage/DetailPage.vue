<script setup>
import { ref, computed } from 'vue'
import DetailsComponent from '@/components/CardDetails/DetailsComponent.vue'
import defaultLayout from '@/layouts/defaultLayout.vue'
import { useRoute } from 'vue-router'
import { getSpecificAnime } from '@/services/api'

const route = useRoute()
const id = route.params.id
const anime = ref({})
const isLoading = ref(true)

function isEmpty(obj) {
  return Object.keys(obj).length === 0
}

const fetchSpecificAnime = async () => {
  try {
    const specificAnime = await getSpecificAnime(id)
    anime.value = specificAnime
  } catch (error) {
    console.error(error.message)
  } finally {
    isLoading.value = false
  }
}

fetchSpecificAnime()

const animeSynopsis = computed(() => {
  return anime.value.synopsis || 'Pas de synopsis disponible'
})
</script>

<template>
  <defaultLayout>
    <p v-if="isLoading">En cours de chargement...</p>
    <div v-else>
      <DetailsComponent
        v-if="!isEmpty(anime)"
        :title="anime.title"
        :image="anime.image"
        :synopsis="animeSynopsis"
      />
      <p v-else>Not found</p>
    </div>
  </defaultLayout>
</template>

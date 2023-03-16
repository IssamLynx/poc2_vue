<script setup>
import DetailsComponent from '@/components/CardDetails/DetailsComponent.vue'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
</script>

<template>
  <Header />
  <Suspense>
    <DetailsComponent />
    <template v-slot:fallback>Data is Loading....</template>
  </Suspense>
  <Footer />
</template>

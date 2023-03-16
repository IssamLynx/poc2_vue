<script setup>
import CardDetails from '../../components/CardDetails/CardDetails.Vue'
</script>

<template>
  <Suspense>
    <CardDetails />
    <template v-slot:fallback>Data is Loading....</template>
  </Suspense>
</template>

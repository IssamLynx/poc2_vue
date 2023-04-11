<script setup>
import DetailsComponent from '@/components/CardDetails/DetailsComponent.vue'
import defaultLayout from '@/layouts/defaultLayout.vue'
</script>

<template>
  <defaultLayout>
    <Suspense>
      <DetailsComponent />
      <template v-slot:fallback>En cours de chargement ...</template>
    </Suspense>
  </defaultLayout>
</template>

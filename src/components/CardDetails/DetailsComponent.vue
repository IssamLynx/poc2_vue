<script setup>
const props = defineProps(['title', 'image', 'synopsis'])
</script>

<template>
  <div class="h-screen">
    <div class="w-full flex space-x-4 p-4">
      <img :src="props.image" alt="{{props.image}}" class="h-full aspect-auto" />
      <div class="flex-col">
        <h1 class="font-bold text-xl">{{ props.title }}</h1>
        <p class="my-4 text-justify">
          {{ props.synopsis }}
        </p>
      </div>
    </div>
  </div>
</template>

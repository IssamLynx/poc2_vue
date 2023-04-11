<script setup>
import noImageAvailable from '@/assets/SVG/no_image_available.svg'
const props = defineProps(['title', 'image', 'synopsis'])
const handleImageError = (event) => {
  event.target.src = noImageAvailable
}
</script>

<template>
  <div class="h-screen">
    <div class="w-full flex space-x-4 p-4">
      <img
        :src="props.image"
        alt="{{props.image}}"
        class="h-full aspect-auto"
        @error="handleImageError"
      />
      <div class="flex-col">
        <h1 class="font-bold text-xl">{{ props.title }}</h1>
        <p class="my-4 text-justify">
          {{ props.synopsis }}
        </p>
      </div>
    </div>
  </div>
</template>

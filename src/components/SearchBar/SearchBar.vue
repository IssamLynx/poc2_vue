<script setup>
import { ref } from 'vue'

const emit = defineEmits(['handleSearch'])
let searchInput = ref('')
</script>

<template>
  <div class="flex items-center mt-2 ml-4">
    <input
      type="text"
      v-model="searchInput"
      class="w-[200px] h-[30px] border border-black rounded"
    />
    <button
      @click="emit('handleSearch', searchInput.value)"
      class="ml-[10px] w-[100px] h-[30px] border border-black rounded bg-black text-white cursor-pointer"
    >
      Search
    </button>
  </div>
</template>

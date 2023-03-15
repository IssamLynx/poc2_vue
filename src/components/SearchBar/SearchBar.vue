<script setup>
import { ref } from 'vue'

const emit = defineEmits(['handleSearch', 'handleClear'])
let searchInput = ref('')

const handleClear = () => {
  searchInput.value = ''
  emit('handleClear')
}
</script>

<template>
  <div class="flex items-center mt-2 ml-4">
    <input
      type="text"
      v-model="searchInput"
      class="w-[200px] h-[30px] border border-black rounded"
      placeholder="Search"
    />
    <button
      @click="emit('handleSearch', searchInput)"
      class="ml-[10px] w-[100px] h-[30px] border border-black rounded bg-black text-white cursor-pointer"
      role="search_button"
    >
      Search
    </button>

    <button
      v-if="searchInput.length > 0"
      @click="handleClear"
      class="ml-[10px] w-[100px] h-[30px] border rounded bg-gray-200 border-gray-200"
      role="clear_button"
    >
      Clear
    </button>
  </div>
</template>

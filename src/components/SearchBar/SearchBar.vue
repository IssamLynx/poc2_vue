<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex items-center mt-2 ml-4">
    <input
      type="text"
      class="w-[200px] h-[30px] border border-black rounded"
      placeholder="Search"
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

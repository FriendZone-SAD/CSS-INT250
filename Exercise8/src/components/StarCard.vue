<template>
  <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1 min-w-[200px]">
    <p class="text-sm text-gray-500 mb-2 font-medium">{{ label }}</p>
    <h3 class="text-3xl font-bold text-gray-900">{{ value }}</h3>
  </div>
</template>

<script setup>
defineProps(['label', 'value'])
</script>
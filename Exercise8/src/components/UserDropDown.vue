<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200 transition-colors">
      <div class="w-7 h-7 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold">ST</div>
      <span class="text-sm font-medium text-gray-700">Student</span>
      <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    <div v-if="isOpen" class="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-lg z-20">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</a>
      <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Logout</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
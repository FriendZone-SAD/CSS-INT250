<template>
  <div v-if="isOpen" @click.self="$emit('close')" class="fixed inset-0 bg-gray-900/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
    <div class="bg-white p-6 rounded-2xl max-w-md w-full shadow-xl">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-2xl font-bold text-gray-900">{{ course?.code }}</h2>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <h3 class="font-semibold text-lg text-gray-800 mb-2">{{ course?.title }}</h3>
      <p class="text-gray-600 mb-6 text-sm leading-relaxed">{{ course?.desc }}</p>
      
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <div class="flex justify-between items-center">
          <span class="text-sm font-medium text-gray-500">Current Progress</span>
          <span class="font-bold text-indigo-600">{{ course?.progress }}%</span>
        </div>
      </div>
      
      <button @click="$emit('close')" class="w-full bg-gray-100 text-gray-800 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
        Close Details
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps(['isOpen', 'course'])
const emit = defineEmits(['close'])

const handleEsc = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc)
})
</script>
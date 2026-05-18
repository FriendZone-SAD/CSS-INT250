<template>
  <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
    <div class="flex justify-between items-start mb-2">
      <h3 class="font-bold text-xl text-gray-900">{{ course.code }}</h3>
      <span class="bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full font-semibold">{{ course.status }}</span>
    </div>
    <h4 class="font-semibold text-gray-800 mb-2">{{ course.title }}</h4>
    <p class="text-sm text-gray-500 mb-6 flex-grow">{{ course.desc }}</p>
    
    <div class="mb-6">
      <div class="flex justify-between text-sm mb-2">
        <span class="text-gray-500 font-medium">Progress</span>
        <span class="font-bold text-gray-700">{{ course.progress }}%</span>
      </div>
      <div class="w-full bg-gray-100 rounded-full h-2">
        <div class="bg-indigo-600 h-2 rounded-full" :style="{ width: course.progress + '%' }"></div>
      </div>
    </div>
    
    <div class="flex flex-col sm:flex-row gap-3 mt-auto">
      <button @click="$emit('viewDetails', course)" class="flex-1 bg-white border border-gray-200 text-gray-700 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
        View Course Details
      </button>
      <button @click="$emit('submitAssignment', course)" class="flex-1 bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors">
        Submit Assignment
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(['course'])
defineEmits(['viewDetails', 'submitAssignment'])
</script>
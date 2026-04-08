<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <div class="w-1/2">
    <div class="p-8 rounded-2xl bg-white shadow-sm border border-gray-100">
      <!-- Title and Description -->
      <h1 class="text-xl font-bold text-gray-800">{{ item.id }}. {{ item.name }}</h1>
      <p class="text-gray-500 mb-6">{{ item.desc }}</p>

      <!-- This is where the specific UI elements (Buttons, Badges, etc.) will go -->
      <div class="mt-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
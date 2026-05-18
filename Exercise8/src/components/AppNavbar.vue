<template>
  <nav class="flex items-center justify-between p-4 bg-white shadow-sm">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-lg font-bold">LS</div>
      <div>
        <h1 class="font-bold text-gray-900 leading-tight">LearnSpace</h1>
        <p class="text-xs text-gray-500">Student Dashboard</p>
      </div>
    </div>
    <div class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
      <a href="#" class="text-gray-900">Dashboard</a>
      <a href="#" class="hover:text-gray-900">Courses</a>
      <a href="#" class="hover:text-gray-900">Assignments</a>
      <a href="#" class="hover:text-gray-900">Progress</a>
    </div>
    <UserDropDown />
  </nav>
</template>

<script setup>
import UserDropDown from './UserDropDown.vue'
</script>
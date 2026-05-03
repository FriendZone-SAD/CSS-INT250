<script setup>
import UserDropDown from './UserDropDown.vue';

</script>

<template>
  <header
    class="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90"
  >
    <!-- Navigation -->
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-sm font-bold text-white shadow-sm"
        >
          LS
        </div>

        <div>
          <h1 class="text-lg font-bold leading-tight">LearnSpace</h1>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Student Dashboard
          </p>
        </div>
      </a>
      
      <!-- Desktop Menu -->
       <ul class="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
        <li class="flex gap-8">
            <a href="#" class="transition hover:text-indigo-600">DashBoard</a>
            <a href="#" class="transition hover:text-indigo-600">Courses</a>
            <a href="#" class="transition hover:text-indigo-600">Assignment</a>
            <a href="#" class="transition hover:text-indigo-600">Progress</a>
        </li>
       </ul>

       <!-- Desktop Dropdown -->
        <UserDropDown/>
          <div class="hidden border p-2 rounded-2xl border-zinc-300 shadow-md shadow-gray-300 items-center gap-3 md:flex">
            <h1 class="font-bold text-indigo-600 border py-1 px-2 rounded-full border-indigo-100 bg-indigo-100">ST</h1>
            <p>Student</p>
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>drop-down</title> <desc>Created with sketchtool.</desc> <g id="directional" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="drop-down" fill="#000000"> <polygon id="Shape" points="5 8 12 16 19 8"> </polygon> </g> </g> </g></svg>
          </div>
        <!-- Mobile Menu Button -->
    </nav>
  </header>
</template>

<script setup>
defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section class="bg-black text-white py-12 px-6 mt-24">

    <!-- Container -->
    <div class="
      w-full 
      md:flex md:justify-between md:items-start 
      md:px-6
      lg:max-w-6xl lg:mx-auto lg:px-0
    ">

      <!-- LEFT SIDE -->
      <div class="flex flex-col items-center text-center gap-6 md:items-start md:text-left">

        <!-- Logo -->
        <img src="../assets/logo.svg" alt="logo" class="w-40" />

        <!-- Menu -->
        <div class="flex flex-col gap-4 md:flex-row md:gap-6">
          <div v-for="item in menuItems" :key="item.name" class="group">
            <a href="#" class="relative">
              {{ item.name }}
              <!-- hover underline -->
              <span class="block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>

      </div>

      <!-- RIGHT SIDE -->
      <div class="flex flex-col items-center text-center gap-6 mt-8 md:mt-0 md:items-end md:text-right">

        <!-- Social -->
        <div class="flex gap-5">
          <img src="../assets/icon-facebook.svg" />
          <img src="../assets/icon-twitter.svg" />
          <img src="../assets/icon-pinterest.svg" />
          <img src="../assets/icon-instagram.svg" />
        </div>

        <!-- Copyright -->
        <p class="text-gray-400 text-sm">
          © 2022 Loopstudios. All Rights Reserved
        </p>

      </div>

    </div>

  </section>
</template>
<script setup>
import Navbar from "./components/Navbar.vue"
import SearchBar from "./components/SearchBar.vue"
import Card from "./components/Card.vue"
</script>

<template>
  <div class="px-2 py-4 bg-gradient-to-r from-blue-100 to-blue-200">
    <div class="bg-white p-30 rounded-2xl">
      <Navbar class="mb-20" />
      <SearchBar />
      <div class="grid grid-cols-3 gap-3 mt-10">
        <Card image="./src/assets/diet.jpg" />
        <Card image="./src/assets/diet.jpg" />
        <Card image="./src/assets/diet.jpg" />
        <Card image="./src/assets/diet.jpg" />
        <Card image="./src/assets/diet.jpg" />
        <Card image="./src/assets/diet.jpg" />
      </div>
    </div>
  </div>
</template>

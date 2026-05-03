<script setup>
import { ref } from "vue"
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Card from "./components/Card.vue"

const navbarItems = ref([
  { name: "About", link: "#" },
  { name: "Careers", link: "#" },
  { name: "Events", link: "#" },
  { name: "Products", link: "#" },
  { name: "Supports", link: "#" },
]);

const cardItems = ref([
  { name: "a", date: "today", img: "https://media.tenor.com/I9qt03YKkjQAAAAM/monkey-thinking.gif"},
  { name: "b", date: "today", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIr7whmFSnnyBjgsXOsMsqNtIbLCOhdofFkg&s" },
  { name: "c", date: "today", img: "https://cdn-useast1.kapwing.com/static/templates/monkey-where-meme-template-full-44e70f08.webp" },
  { name: "d", date: "today", img: "https://media.tenor.com/Ud57kLHQ2yQAAAAM/100.gif" },
  { name: "e", date: "today", img: "https://i.redd.it/64cxhmnmzwve1.jpeg" },
  { name: "f", date: "today", img: "https://cdn-images.dzcdn.net/images/cover/24b5c291c0bb35c11451cb8d4136c712/1900x1900-000000-80-0-0.jpg" },
])
</script>

<template>
  <div class="relative m-3 flex flex-col gap-3">
    <Navbar :navbar-items="navbarItems"/>
    <Hero />
    <h1 class="font-bold text-2xl">Shorten Componenet</h1>
    <Card :card-items="cardItems"/>
  </div>
</template>

<style scoped></style>

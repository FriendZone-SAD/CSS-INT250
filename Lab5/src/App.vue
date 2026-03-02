<script setup>
import CTA from './components/CTA.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Shorten from './components/Shorten.vue';
</script>

<template>
  <div class="p-5">
    <Navbar class="mb-30" />
    <Hero class="mb-30"/>
  </div>
    <Shorten class="p-10 pb-0"/>
    <CTA />
    <Footer />
</template>

<style scoped></style>

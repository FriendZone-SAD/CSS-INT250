<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="min-h-screen layout-bg font-sans selection:bg-sky-200">
    <Navbar />
    <main class="max-w-6xl mx-auto px-6 pt-20 pb-32">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </div>
</template>

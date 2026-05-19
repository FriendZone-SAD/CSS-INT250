<script setup>
import handheld from "../assets/portable-ps1-featured.jpg";
import vinyl from "../assets/Vinyl.jpg";
import travel from "../assets/poopk.jpg";

const projects = [
  {
    title: 'Pi4 Portable Console',
    img: handheld,
    desc: 'A custom-built portable gaming console powered by a Raspberry Pi 4 Model B, featuring a custom enclosure and optimized OS for retro emulation.',
    tags: ['Hardware', 'Raspberry Pi 4', 'Linux', 'Maker'],
    link: '#'
  },
  {
    title: 'Spotify Lyric Sync',
    img: vinyl,
    desc: 'A web application interfacing with the Spotify Web API to display real-time, synchronized lyrics for currently playing tracks.',
    tags: ['Vue.js', 'REST API', 'OAuth', 'Three-Layer Backend'],
    link: '#'
  },
  {
    title: 'TravelQuest',
    img: travel,
    desc: 'A gamified travel recommendation platform. Features a social feed and a custom "Accept Quest" system to reward users for exploring.',
    tags: ['Full-Stack', 'Vue.js', 'Tailwind CSS', 'UX/UI'],
    link: '#'
  }
]
</script>

<template>
  <section id="projects" class="mb-32">
    <h2 class="text-3xl font-bold mb-8">Featured Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.title"
        class="group card-bg rounded-xl overflow-hidden border border-accent hover:border-accent-hover transition-colors flex flex-col shadow-sm">
        <div class="h-48 border-b border-accent p-6 flex items-end bg-cover bg-center relative"
          :style="{ backgroundImage: `url(${project.img})` }">
          <div class="absolute inset-0 bg-black/40"></div>
          <h3 class="text-2xl font-bold text-white relative z-10 group-hover:text-sky-300 transition-colors">
            {{ project.title }}
          </h3>
        </div>
        <div class="p-6 flex flex-col grow">
          <p class="text-subtle text-sm mb-6 grow">{{ project.desc }}</p>
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="tag in project.tags" :key="tag"
              class="text-xs font-mono text-accent bg-sky-50 px-2 py-1 rounded">{{ tag }}</span>
          </div>
          <a :href="project.link" class="text-sm font-bold flex items-center gap-2 hover:text-accent transition-colors">
            View Project
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const frontend = ["HTML", "CSS", "JavaScript", "Vue.js", "TailwindCSS"]
const tool = ["Git", "GitHub", "VS Code", "Linux"]
const hardware = ["Soldering", "Circuit Design", "Hardware Prototyping", "Raspberry Pi", "Electronics Assembly"]
const backend = ['Node.js', 'Route-Controller-Service', 'REST APIs', 'Global Error Handling']
</script>

<template>
  <section id="skills" class="mb-32">
    <h2 class="text-3xl font-bold mb-8">Skills</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-6 card-bg rounded-xl shadow-sm">
        <h3 class="text-xl font-bold mb-4 text-accent">Frontend</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in frontend" :key="skill"
            class="layout-bg border border-accent px-3 py-1 rounded-md text-sm">{{ skill }}</span>
        </div>
      </div>
      <div class="p-6 card-bg rounded-xl shadow-sm">
        <h3 class="text-xl font-bold mb-4 text-accent">Backend & Architecture</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in backend" :key="skill"
            class="layout-bg border border-accent px-3 py-1 rounded-md text-sm">{{ skill }}</span>
        </div>
      </div>
      <div class="p-6 card-bg rounded-xl shadow-sm">
        <h3 class="text-xl font-bold mb-4 text-accent">Tools</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in tool" :key="skill"
            class="layout-bg border border-accent px-3 py-1 rounded-md text-sm">{{ skill }}</span>
        </div>
      </div>
      <div class="p-6 card-bg rounded-xl shadow-sm">
        <h3 class="text-xl font-bold mb-4 text-accent">Hardware Skills</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in hardware" :key="skill"
            class="layout-bg border border-accent px-3 py-1 rounded-md text-sm">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    menuItems: {
        type: Array,
        required: true,
    },
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};


</script>

<template>
    <!-- Hero Section -->
    <section
        class="bg-[url(assets/mobile/image-hero.jpg)] bg-no-repeat bg-cover md:bg-[url(assets/desktop/image-hero.jpg)] md:bg-cover">
        <div class="container max-w-6xl mx-auto px-6 py-12">
            <nav class="relative top-0 z-50 flex items-center text-white font-bold">
                <transition name="menu">
                    <div v-if="isMenuOpen"
                        class="absolute top-full left-0 w-full bg-black text-white flex flex-col p-6 z-40">
                        <div class="flex flex-col gap-6 text-2xl uppercase">
                            <a v-for="item in menuItems" :key="item.name" :href="item.link" @click="toggleMenu">
                                {{ item.name }}
                            </a>
                        </div>
                    </div>
                </transition>

                <img class="w-1/2 mr-auto md:w-1/3" src="../assets/logo.svg" alt="Loopstudios Logo">
                <!-- Menu -->
                <div class="hidden h-10 font-sans ml-auto md:flex md:space-x-8 md:items-center">
                    <div v-for="item in menuItems" :key="item.name" class="group">
                        <a :href="item.link">{{ item.name }}</a>
                        <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                    </div>
                </div>
                <div class="w-6 ml-auto md:hidden z-50" @click="toggleMenu">
                    <!-- ☰ Hamburger -->
                    <svg v-if="!isMenuOpen" class="z-50" viewBox="-0.5 0 25 25" fill="none" stroke="#ffffff">
                        <path d="M2 12.32H22" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M2 18.32H22" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M2 6.32H22" stroke-width="1.5" stroke-linecap="round" />
                    </svg>

                    <!-- ✕ Close -->
                    <svg v-else class="z-50" viewBox="0 0 24 24" fill="none" stroke="#ffffff">
                        <path d="M6 6L18 18" stroke-width="2" stroke-linecap="round" />
                        <path d="M6 18L18 6" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
            </nav>
            <div class="mx-2">
                <h1
                    class="text-white border-white border p-3 max-w-[80%] text-4xl font-thin mx-auto mt-20 mb-12 md:max-w-fit md:text-6xl md:p-5 md:ml-0">
                    IMPRESSIVE<br>EXPERIENCES<br>THAT DELIVER</h1>
            </div>
        </div>
    </section>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.25s ease;
}

.menu-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.menu-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
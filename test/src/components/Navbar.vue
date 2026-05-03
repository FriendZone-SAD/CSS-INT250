<script setup>
defineProps({
    navbarItems: {
        type: Array,
        required: true,
    }
})
</script>

<template>
    <div class="flex items-center justify-between border-b pb-3">

        <!-- this is the left side of the navbar section -->
        <div class="flex flex-row gap-3">

            <!-- the icon section -->
            <div>
                <h1 class=" text-xl font-bold p-2 border w-fit h-fit rounded-2xl">SIT</h1>
            </div>
        </div>

        <!-- navbar in tablet and mobile -->
        <div class=" align-baseline">
            <h1 class="lg:hidden border rounded-2xl p-1 px-auto">SIT KMUTT</h1>
        </div>

        <!-- navbar items with v-for in desktop -->
        <div class="hidden lg:flex items-center gap-3">
            <h1 v-for="item in navbarItems" :key="item.name">{{ item.name }}</h1>
        </div>

        <!-- this is the search section -->
        <div>
            <div class="w-32 h-6 bg-gray-400 rounded-3xl border"></div>
        </div>
    </div>
</template>
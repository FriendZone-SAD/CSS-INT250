<script setup>
defineProps({
    cardItems: {
        type: Array,
        required: true,
    }
})
</script>

<template>
    <div class=" grid grid-cols-[1fr] justify-center items-center md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]">
        <div v-for="item in cardItems" :key="item.name" class="border p-3 w-fit">
            <img :src="item.img" alt="image" class="w-50">
            <div>
                <h1>{{ item.name }}</h1>
                <p>{{ item.date }}</p>
            </div>
        </div>
    </div>
</template>
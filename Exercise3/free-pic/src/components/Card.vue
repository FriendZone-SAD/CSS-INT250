<script setup>
import {defineProps} from "vue";

defineProps([
    "image"
]);
</script>

<template>
    <div class="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
        <img :src="image" alt="Card Image" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
    </div>
</template>
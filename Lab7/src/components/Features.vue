<script setup>
import { ref } from 'vue'

const props = defineProps({
    featureList: {
        type: Object,
    }
});

const featureList = ref(props.featureList);
</script>

<template>
    <div class="features-section" v-for="item in featureList" key="item.feature">
        <div class="feature-icon-wrapper flex-col p-5">
            <img :src="item.img">
            <h1 class="feature-title">{{ item.feature }}</h1>
            <p class="feature-description">{{ item.detail }}</p>
        </div>
    </div>
    <div class="features-section"></div>
</template>
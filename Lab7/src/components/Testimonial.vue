<script setup>
import {ref} from 'vue'

const props = defineProps({
    testimonialList: {
        type: Object
    }
})

const testimonialList = props.testimonialList
</script>

<template>
    <div class="mx-5 mt-20 relative md:flex md:gap-5">
        <img src="../assets/bg-quotes.png" alt="bg-quotes" class="absolute -top-3 left-1">
        <div class="flex flex-col py-10 px-15 w-full mb-5 gap-5 rounded-2xl mx-auto dark:bg-darkBlue-03 bg-gray-100" v-for="item in testimonialList" key="item.name">
            <p class=" overflow-clip">{{ item.detail }}</p>
            <div class="flex gap-3">
                <img :src="item.profile" class="rounded-full w-12 h-full ">
                <div>
                    <h1 class="font-bold">{{ item.name }}</h1>
                    <p>{{ item.position }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
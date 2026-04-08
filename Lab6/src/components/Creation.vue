<script setup>
defineProps({
    creationItems: {
        type: Array,
        required: true,
    }
})
</script>

<template>
    <section class="px-5 mx-auto">
        <div class="max-w-6xl mx-auto mt-24 mb-12 px-6 text-[#a9a9a9] md:px-0">
            <div class="flex justify-between items-center">
                <h1 class="text-4xl mx-auto md:ml-0 md:text-5xl">OUR CREATIONS</h1>
                <button
                    class="hidden text-black md:block md:px-10 md:py-2 md:my-0 font-bold border-2 border-black hover:bg-black hover:text-white">SEE
                    ALL</button>
            </div>
        </div>
        <div class="flex flex-col max-w-329 w-full gap-6 justify-around mx-auto md:flex-row md:gap-8 md:flex-wrap">
            <div v-for="item in creationItems" :key="item.name"
                class="relative overflow-hidden bg-cover h-full w-full md:w-1/5 group">
                <img :src="item.mobileImg" class="w-full md:hidden">

                <img :src="item.img" class="hidden md:block w-full transition duration-200 group-hover:scale-110">

                <div
                    class="absolute inset-0 bg-linear-to-b from-transparent to-gray-900 transition duration-200 group-hover:from-gray-300/40 group-hover:to-gray-200/70">
                </div>

                <h5
                    class="absolute px-6 md:px-10 bottom-4 md:bottom-8 w-52 text-2xl text-white uppercase transition duration-200 group-hover:scale-110 group-hover:text-black">
                    {{ item.name }}
                </h5>
            </div>
        </div>
        <div class="flex mt-6 justify-center border-2 font-medium w-full px-10 py-2 tracking-widest hover:bg-black hover:text-white transition duration-200 md:hidden">
            <button>SEE ALL</button>
        </div>

        <!-- <div class="grid grid-cols-1 mx-auto w-fit md:grid-cols-4">
            <div v-for="item in creationItems" :key="item.name" :style="{ backgroundImage: `url(${item.img})` }"
                class="bg-cover bg-center h-48 w-full">
                <div class="flex">
                    <h1 class="bg-[url()]">{{ item.name }}</h1>
                </div>
            </div>
        </div> -->
    </section>
</template>
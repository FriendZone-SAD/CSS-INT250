<script setup>
import { ref } from 'vue'

const props = defineProps({
    FAQList: {
        type: Array
    }
})

const activeIndex = ref(null)

const toggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
    <div class="mt-10 p-5 flex flex-col gap-5 items-center">
        <h1 class="feature-title mx-auto">Frequently Asked Questions</h1>
        <p class="feature-description text-center mx-auto">Here are some of FAQs. If you have any other questions you'd
            like answered please feel free to email us.</p>
        <div v-for="(item, index) in FAQList" :key="item.question" class="flex flex-col border-b max-w-4/5 w-full">
            <div class="flex justify-between p-2">
                <h1>{{ item.question }}</h1>
                <button @click="toggle(index)">
                    <svg class="w-6 h-fit text-black dark:text-white" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                                fill="currentColor"></path>
                        </g>
                    </svg>
                </button>
            </div>


            <div class="grid transition-all duration-300 ease-in-out" 
                 :class="activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
                <div class="overflow-hidden">
                    <div class="p-2 pt-0">
                        {{ item.answer }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
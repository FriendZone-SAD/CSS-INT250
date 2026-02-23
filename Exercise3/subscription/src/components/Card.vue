<script setup>
import { defineProps, ref, computed } from 'vue';

defineProps([
    "borderColor",
    "packageName",
    "storage",
    "price",
]);

</script>

<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="rounded-[10px] p-2 bg-[#334155] hover:bg-[#7c3aed] transition-colors duration-300">
            <div class="bg-[#1e293b] rounded-[10px] gap-3 p-5 flex flex-col justify-start items-center">
                <p class="text-white text-xs mb-7">{{ packageName }}</p>
                <p class="text-white text-3xl">{{ storage }}</p>
                <p class="text-white text-xs">{{ price }}</p>
                <button
                    class=" border-2 border-[#372e6c] rounded-[10px] px-5 py-2 text-white hover:bg-[#7c3aed] hover:border-[#7c3aed] duration-500">Purchase</button>
                <a class=" border-b-1 border-[#334155] w-[120%] overflow-hidden"></a>
                <p class="flex items-center gap-3 text-white">
                    <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px"
                        viewBox="0 0 335.765 335.765" xml:space="preserve">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                    <polygon
                                        points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 ">
                                    </polygon>
                                </g>
                            </g>
                        </g>
                    </svg>
                    {{ storage }} storage
                </p>
                <p class="flex items-center justify-start gap-3 text-white">
                    <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px"
                        viewBox="0 0 335.765 335.765" xml:space="preserve">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                    <polygon
                                        points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 ">
                                    </polygon>
                                </g>
                            </g>
                        </g>
                    </svg>
                    Option to add members
                </p>
                <p class="flex items-center gap-3 text-white">
                    <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px"
                        viewBox="0 0 335.765 335.765" xml:space="preserve">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g>
                                <g>
                                    <polygon
                                        points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 ">
                                    </polygon>
                                </g>
                            </g>
                        </g>
                    </svg>
                    Extra member benefits
                </p>
            </div>
        </div>
    </div>
</template>
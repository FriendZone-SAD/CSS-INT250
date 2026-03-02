<script setup>

</script>

<template>
    <div class=" bg-gray-300">
        <div class=" bg-indigo-950 rounded-xl p-10 pb-13 relative -top-25">
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-5 md:flex-row md:">
                <input type="text" placeholder="Shorten a link here"
                    class=" text-amber-500 text-xl bg-white py-2 px-4 rounded-xl md:w-full">
                <button type="submit" class="bg-cyan-500 text-white text-xl py-3 rounded-xl md:ml-auto md:px-10 md:w-61">
                    Shorten It
                </button>
            </form>
        </div>
        <div class=" bg-white rounded-2xl p-8 relative -top-20 flex flex-col items-center md:flex-row">
            <p class=" text-xl font-bold md:mr-auto">http://frontendmentor.io</p>
            <p class=" text-xl font-bold pb-3 text-cyan-500 md:p-0 md:pr-3">http:/rel.ink/k4lKyk</p>
            <button class="bg-cyan-500 text-white text-xl py-3 px-8 rounded-xl">Copy</button>
        </div>
        <div class=" bg-white rounded-2xl p-8 relative -top-15 flex flex-col items-center md:flex-row">
            <p class=" text-xl font-bold md:mr-auto">http://twitter.com/frontendmentor</p>
            <p class=" text-xl font-bold pb-3 text-cyan-500 md:p-0 md:pr-3">http:/rel.ink/gxOXp9</p>
            <button class="bg-indigo-950 text-white text-xl py-3 px-8 rounded-xl">Copy</button>
        </div>
        <div class=" bg-white rounded-2xl p-8 relative -top-10 flex flex-col items-center md:flex-row">
            <p class=" text-xl font-bold md:mr-auto">http://linkedin.com/frontend-mentor</p>
            <p class=" text-xl font-bold pb-3 text-cyan-500 md:p-0 md:pr-3">http:/rel.ink/gob3x9</p>
            <button class="bg-cyan-500 text-white text-xl py-3 px-8 rounded-xl">Copy</button>
        </div>
    </div>
</template>

<style scoped></style>

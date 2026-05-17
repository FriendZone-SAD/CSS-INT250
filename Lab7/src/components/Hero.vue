<script setup>

</script>

<template>
    <div class="flex flex-col items-center mt-5">
        <img src="../assets/illustration-intro.png" alt="illustration-intro-image" class="w-4/5 md:w-3/5 md:mt-20">
        <div class="text-center z-5">
            <h1 class="text-3xl font-bold mb-5">All your files in one secure location, <br>assessible anywhere.</h1>
            <p class="max-w-9/10 mx-auto mb-5">Fylo stores all your most important files in one secure location.
                <br>Access them wheerever you need, share and colaborate with friends family, and co-workers.
            </p>
        </div>
        <button class="px-10 py-2 mt-5 z-5 bg-accent-cyan rounded-3xl hover:bg-accent-blue active:scale-90 duration-100">Get
            Started</button>
        <img src="@/assets/bg-curvy-light-mode.svg" class="w-full h-auto dark:hidden mt-20 md:m-0" />
        <img src="@/assets/bg-curvy-dark-mode.svg" class="hidden dark:block w-full h-auto mt-20 z-0 md:-mt-40" />
    </div>
</template>
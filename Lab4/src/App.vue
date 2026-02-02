<script setup>
import ProfileCard from "./components/ProfileCard.vue";
</script>

<template>
    <div
        class="flex items-center justify-center gap-8 min-h-screen bg-gradient-to-br from-green-500 to-sky-400"
    >
        <ProfileCard
            class="hover:mb-4 transition-all duration-300"
            background="./src/assets/background.jpg"
            profileimg="./src/assets/monkey.jpg"
            name="Kritsanaphong Jaritpot"
            subheading="Student, 21, BKK"
            followers="1M"
            following="0"
            projects="10+"
            instagram="https://www.instagram.com/kritsanaphong.jaritpot"
            facebook="https://www.facebook.com/kritsanaphong.jaritpot"
            linkedin="https://www.linkedin.com/in/kritsanaphong-jaritpot/"
        />
        <ProfileCard
            class="hover:mb-4 transition-all duration-300"
            background="./src/assets/background.jpg"
            profileimg="./src/assets/pig.jpg"
            name="Piyada Hanpayom"
            subheading="Student, 19, BKK"
            followers="1M"
            following="0"
            projects="10+"
            instagram="https://www.instagram.com/Piyada.Hanpayom"
            facebook="https://www.facebook.com/Piyada.Hanpayom"
            linkedin="https://www.linkedin.com/in/Piyada.Hanpayom/"
        />
        <ProfileCard
            class="hover:mb-4 transition-all duration-300"
            background="./src/assets/background.jpg"
            profileimg="./src/assets/pakkapao.jpg"
            name="Vanishaya Saephoo"
            subheading="Student, 19, BKK"
            followers="1M"
            following="0"
            projects="10+"
            instagram="https://www.instagram.com/vanishaya.saephoo"
            facebook="https://www.facebook.com/vanishaya.saephoo"
            linkedin="https://www.linkedin.com/in/vanishaya.saephoo/"
        />
    </div>
</template>

<style scoped></style>

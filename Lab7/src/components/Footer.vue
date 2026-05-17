<script setup>
</script>

<template>
    <footer class="bg-darkBlue-02 text-white pt-32 pb-16 px-6 w-full font-opensans">
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between gap-12">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-4">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span>+1-543-123-4567</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span>example@fylo.com</span>
                    </div>
                </div>

                <div class="flex gap-10">
                    <div class="flex flex-col gap-4">
                        <a href="#" class="hover:font-bold">About Us</a>
                        <a href="#" class="hover:font-bold">Jobs</a>
                        <a href="#" class="hover:font-bold">Press</a>
                        <a href="#" class="hover:font-bold">Blog</a>
                    </div>

                    <div class="flex flex-col gap-4">
                        <a href="#" class="hover:font-bold">Contact Us</a>
                        <a href="#" class="hover:font-bold">Terms</a>
                        <a href="#" class="hover:font-bold">Privacy</a>
                    </div>
                </div>

                <div class="flex gap-4 w-fit">
                    <img src="../assets/facebook.svg" class="footer-icon">
                    <img src="../assets/twitter.svg" class="footer-icon">
                    <img src="../assets/instagram.svg" class="footer-icon">
                </div>
            </div>
        </div>
    </footer>
</template>
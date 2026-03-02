<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
     isOpen.value = !isOpen.value
}
</script>

<template>
     <!-- nav container -->
     <nav>
          <!-- Flex container for all items -->
          <div>
               <!-- flex container for logo/menu -->
               <div class="flex w-full items-center gap-5">
                    <!-- logo -->
                    <img class="w-1/4 lg:w-1/10" src="../assets/logo.svg" alt="" />
                    <!-- Hamburger Menu -->
                    <button @click="toggleMenu" class="ml-auto lg:hidden cursor-pointer">
                         <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                              <g id="SVGRepo_iconCarrier">
                                   <path d="M20 7L4 7" stroke="#b1b2b4" stroke-width="1.5" stroke-linecap="round">
                                   </path>
                                   <path d="M20 12L4 12" stroke="#b1b2b4" stroke-width="1.5" stroke-linecap="round">
                                   </path>
                                   <path d="M20 17L4 17" stroke="#b1b2b4" stroke-width="1.5" stroke-linecap="round">
                                   </path>
                              </g>
                         </svg>
                    </button>
                    <!-- Mobile Menu -->
                    <div :class="[
                         'absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 lg:hidden transition-all duration-300',
                         isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    ]">
                         <a href="#">Features</a>
                         <a href="#">Pricing</a>
                         <a href="#">Resources</a>
                         <hr class="w-3/4" />
                         <a href="#">Login</a>
                         <a class="bg-cyan-500 text-white px-6 py-2 rounded-full" href="#">
                              Sign Up
                         </a>
                    </div>
                    <!-- left menu -->
                    <div class=" hidden lg:flex text-2xl font-bold gap-5">
                         <a href="#">Features</a>
                         <a href="#">Pricing</a>
                         <a href="#">Resources</a>
                    </div>

                    <!-- Right Button Mn -->
                    <div class=" hidden lg:flex text-2xl ml-auto font-bold gap-5 items-center">
                         <a href="#">Login</a>
                         <a href="#" class=" bg-sky-500 text-white px-6 py-2 rounded-full">Sign Up</a>
                    </div>
                    <!-- @todo Hamburger Button -->
               </div>
          </div>
     </nav>
</template>

<style scoped></style>

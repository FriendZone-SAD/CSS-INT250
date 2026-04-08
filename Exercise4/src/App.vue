<script setup>
import Card from "./components/Card.vue"

const topic = [
  { id: 1, name: "Buttons", desc: "Reusable action styles for primary, secondary, outline, and disabled states." },
  { id: 2, name: "Badges", desc: "Small reusable labels for category, state, or status indication." },
  { id: 3, name: "Alert", desc: "Reusable feedback messages for success, warning, and error states." },
  { id: 4, name: "Form Controls", desc: "Consistent form patterns with labels, helper text, and validation style." },
  { id: 5, name: "Cards", desc: "Responsice card layout for reusable content blocks such as event, profile, or product cards." },
  { id: 6, name: "Responsive Layout Example", desc: "A reusable section layout with content on the left and summary panel on the right." },
]

const cardsItems = [
  {name: "Basic Card", desc: "A simple reusable card for general content blocks in a dashboard or landing page."},
  {name: "Student Profile Card", desc: "A profile summary card showing student status, program, and quick information."},
  {name: "Event Card", desc: "A reusable event component for workshops, seminars, or hackathon activities."}
]
</script>

<template>
  <!-- Header Section -->
  <div class="flex p-10 items-center flex-col w-full mx-auto bg-white">
    <div class="w-1/2">
      <p class="text-sm font-bold text-[#155dfc]">TAILWIND CSS + VUE.JS</p>
      <h1 class="text-3xl font-bold text-[#1d293d]">UI Kit Page Listing</h1>
      <p class="text-gray-500 mt-2">
        This page demonstrates reusable UI patterns including buttons, badges, alerts, form controls, cards, and
        responsive layout sections.
      </p>
    </div>
  </div>

  <!-- Content Section -->
  <section class="bg-gray-100 min-h-screen flex flex-col items-center p-5 gap-6">

    <!-- 1. Buttons -->
    <Card :item="topic[0]">
      <div class="flex flex-wrap gap-3">
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg">Primary Button</button>
        <button class="px-4 py-2 bg-gray-600 text-white rounded-lg">Secondary Button</button>
        <button class="px-4 py-2 border border-blue-600 rounded-lg text-blue-600">Outline Button</button>
        <button class="px-4 py-2 bg-gray-200 text-gray-400 rounded-lg cursor-not-allowed" disabled>Disabled
          Button</button>
      </div>
    </Card>

    <!-- 2. Badges -->
    <Card :item="topic[1]">
      <div class="flex gap-2">
        <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Success</span>
        <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">Warning</span>
        <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Error</span>
        <span class="px-3 py-1 bg-[#f1f5f9] text-[#314158] rounded-full text-xs font-medium">Neutral</span>
      </div>
    </Card>

    <!-- 3. Alerts -->
    <Card :item="topic[2]">
      <div class="space-y-3">
        <div class="p-4 bg-green-50 border border-green-500 text-green-700 rounded-2xl">
          <p class="font-bold">Success Alert</p>
          <p class="text-sm">Your profile has been updated successfully.</p>
        </div>
        <div class="p-4 bg-[#fefce8] border rounded-2xl border-[#fff085] text-[#894b00]">
          <p class="font-bold">Warning Alert</p>
          <p class="text-sm">Please review the form before submitting.</p>
        </div>
        <div class="p-4 bg-red-50 border rounded-2xl border-red-500 text-red-700">
          <p class="font-bold">Error Alert</p>
          <p class="text-sm">Something went wrong. Please try again.</p>
        </div>
      </div>
    </Card>

    <Card :item="topic[3]">
      <form class="space-y-4" @submit.prevent>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Full Name -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-gray-700">Full Name</label>
            <input type="text" placeholder="Enter your full name"
              class="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <p class="text-xs text-gray-400">Use a clear and complete student name.</p>
          </div>
          <!-- Email Address -->
          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-gray-700">Email Address</label>
            <input type="email" placeholder="Enter your email"
              class="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            <p class="text-xs text-gray-400">Example: student@mail.kmutt.ac.th</p>
          </div>
        </div>

        <!-- Role -->
         <div class="flex flex-col gap-1">
      <label class="text-sm font-semibold text-gray-700">Role</label>
      <select class="p-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer">
        <option value="" disabled selected>Select your role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>
    </div>

        <!-- Message -->
        <div class="flex flex-col gap-1">
          <label class="text-sm font-semibold text-gray-700">Message</label>
          <textarea placeholder="Write your message here" rows="3"
            class="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
          <p class="text-xs text-red-500 font-medium italic">This is an example of validation/helper text styling.</p>
        </div>

        <button class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
          Submit Form
        </button>
      </form>
    </Card>

    <Card :item="topic[4]">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Mini Card Example -->
        <div v-for="n in 3" :key="n" class="border rounded-xl p-4 flex flex-col gap-2 bg-gray-50">
          <div class="flex justify-between items-start">
            <span class="bg-blue-100 text-blue-600 text-[10px] uppercase px-2 py-0.5 rounded font-bold">Profile</span>
            <span class="text-gray-400 text-xs">Reusable</span>
          </div>
          <h3 class="font-bold text-gray-800">{{ cardsItems[n-1].name }} {{ n }}</h3>
          <p class="text-xs text-gray-500">{{ cardsItems[n-1].desc }}</p>
          <button class="text-blue-600 text-xs font-bold text-left mt-2 underline">View Details</button>
        </div>
      </div>
    </Card>

    <Card :item="topic[5]">
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Main Content Area -->
        <div class="flex-1 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <h3 class="font-bold text-blue-900 mb-2">Main Content Area</h3>
          <p class="text-sm text-blue-800 opacity-80 leading-relaxed">
            This area can be used for dashboard content, feature sections, or product descriptions. It demonstrates a
            container pattern with consistent padding.
          </p>
        </div>

        <!-- Summary Panel -->
        <div class="w-full md:w-64 p-6 bg-gray-800 rounded-xl text-white">
          <h3 class="font-bold mb-2">Summary Panel</h3>
          <p class="text-xs text-gray-400 mb-4 leading-relaxed">
            This panel can be reused for quick stats or call-to-action content.
          </p>
          <button class="w-full bg-white text-gray-900 py-2 rounded-lg text-sm font-bold">
            Learn More
          </button>
        </div>
      </div>
    </Card>
  </section>
</template>

<style scoped></style>

<script setup>
import { computed, reactive, ref } from "vue";
import BaseInput from "./Components/BaseInput.vue";
import BaseSelect from "./Components/BaseSelect.vue";
import BaseTextarea from "./Components/BaseTextArea.vue";
import BaseRadioGroup from "./Components/BaseRadioGroup.vue";
import BaseCheckbox from "./Components/BaseCheckBox.vue";

const form = reactive({
  fullName: "",
  studentId: "",
  email: "",
  password: "",
  program: "",
  yearLevel: "",
  bio: "",
  track: "",
  agree: false,
})

const submitted = ref(false)
const showModal = ref(false)

const programOptions = [
  { label: "Computer Science", value: "CS" },
  { label: "Digital Service Innovation", value: "DSI" },
  { label: "Information Technology", value: "IT" },
  { label: "Software Engineering", value: "SE" },
]

const trackOptions = [
  { label: "Frontend UI Development", value: "frontend" },
  { label: "Backend API Design", value: "backend" },
  { label: "UX/UI Design", value: "ux" },
  { label: "AI for Productivity", value: "ai" },
]

const yearOptions = [
  { label: "Year 1", value: "1"},
  { label: "Year 2", value: "2"},
  { label: "Year 3", value: "3"},
  { label: "Year 4", value: "4"},
]

const errors = computed(() => {
  const e = {}

  if (!form.fullName.trim()) e.fullName = "Full name is required."

  if (!form.studentId.trim()) {
    e.studentId = "Student ID is required."
  } else if (!/^\d{11}$/.test(form.studentId)) {
    e.studentId = "Student ID must be 11 digits." // Fixed to 11 to match your regex
  }

  if (!form.email.trim()) {
    e.email = "Email is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    e.email = "Please enter a valid email address."
  }

  if (!form.password.trim()) {
    e.password = "Password is required."
  } else if (form.password.length < 8) {
    e.password = "Password must be at least 8 characters."
  }

  if (!form.program) e.program = "Please select your program."
  if (!form.yearLevel) e.yearLevel = "Please select your year level."
  if (!form.track) e.track = "Please choose a workshop track."
  if (!form.agree) e.agree = "You must accept the terms before submitting."

  return e
})

const isFormValid = computed(() => Object.keys(errors.value).length === 0)

function handleSubmit() {
  submitted.value = true

  if (!isFormValid.value) return

  // Trigger modal instead of alert
  showModal.value = true
}

function resetForm() {
  form.fullName = ""
  form.studentId = ""
  form.email = ""
  form.password = ""
  form.program = ""
  form.yearLevel = ""
  form.bio = ""
  form.track = ""
  form.agree = false
  submitted.value = false
}

function closeModal() {
  showModal.value = false
  resetForm()
}
</script>

<template>
  <div class="min-h-screen bg-slate-100 py-10 px-4 relative">
    <div class="mx-auto max-w-4xl relative z-10">
      <div class="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
        <div class="border-b border-slate-200 bg-slate-50 px-6 py-5">
          <p class="text-sm font-medium text-blue-600">Hands-on Lab</p>
          <h1 class="text-2xl font-bold text-slate-900">Student Workshop Registration Form</h1>
          <p class="text-sm text-slate-600">Practice styling form controls, focus states, and validation feedback with
            Vue.js and Tailwind CSS</p>
        </div>
        
        <!-- Added @submit.prevent -->
        <form @submit.prevent="handleSubmit" class="p-6 md:p-8 gap-6 flex flex-col">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <!-- Passing state down as props -->
            <BaseInput :form="form" :errors="errors" :submitted="submitted" />
            <BaseSelect :form="form" :errors="errors" :submitted="submitted" :program-options="programOptions" :track-options="trackOptions"/>
          </div>
          
          <BaseRadioGroup :form="form" :errors="errors" :submitted="submitted" :year-options="yearOptions"/>
          <BaseTextarea :form="form" />
          <BaseCheckbox :form="form" :errors="errors" :submitted="submitted" />
          
          <div class="flex flex-col gap-4 border-t border-slate-200 pt-6 justify-between sm:flex-row sm:items-center">
            <p class="text-sm text-slate-500">
              <span class="font-bold">Tip:</span>
              Try submitting with empty fields to test validation feedback.
            </p>

            <!-- Added Reset Button -->
            <div class="flex gap-3">
              <button type="button" @click="resetForm"
                class="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50">
                Reset Form
              </button>
              <button type="submit"
                class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-[0.99]">
                Submit Registration
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Success Modal Overlay -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm px-4">
      <div class="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl text-start flex flex-col items-start">
        <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg class="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-slate-900">Registration Submitted</h2>
        <p class="mt-2 text-slate-500">Your workshop registration has been recorded successfully.</p>
        <button @click="closeModal" class="mt-6 w-fit ml-auto rounded-lg bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus:ring-2 focus:ring-green-500">
          Close
        </button>
      </div>
    </div>
  </div>
</template>
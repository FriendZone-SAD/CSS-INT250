<script setup>
import { ref } from 'vue'
import AppNavbar from './components/AppNavbar.vue'
import StarCard from './components/StarCard.vue'
import CourseCard from './components/CourseCard.vue'
import CourseModal from './components/CourseModal.vue'
import ToastNotification from './components/ToastNotification.vue'

const stats = [
  { label: 'Active Courses', value: '3' },
  { label: 'Pending Assignments', value: '2' },
  { label: 'Completed Tasks', value: '8' },
  { label: 'Overall Progress', value: '72%' }
]

const courses = [
  {
    id: 1,
    code: 'INT250',
    title: 'CSS Framework',
    desc: 'Learn how to build responsive and interactive web applications using Vue.js and Tailwind CSS.',
    progress: 72,
    status: 'In Progress'
  },
  {
    id: 2,
    code: 'INT161',
    title: 'Object-Oriented Programming',
    desc: 'Practice Java programming, object-oriented design, and software development principles.',
    progress: 58,
    status: 'In Progress'
  }
]

const isModalOpen = ref(false)
const selectedCourse = ref(null)
const showToast = ref(false)
const toastMessage = ref('')

const scrollToCourses = () => {
  document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' })
}

const openModal = (course) => {
  selectedCourse.value = course
  isModalOpen.value = true
}

const triggerToast = (course) => {
  if (showToast.value) return 
  toastMessage.value = `Assignment submitted successfully for ${course.code}`
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-sans pb-12">
    <AppNavbar />

    <main class="max-w-6xl mx-auto px-4 mt-8">
      <section class="bg-violet-600 rounded-3xl p-8 md:p-12 text-white mb-8 shadow-sm">
        <div class="flex items-center gap-2 mb-4 text-violet-200 text-sm font-medium">
          <span>Welcome back, Student</span>
          <span>👋</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Continue your learning journey today.</h2>
        <p class="text-violet-200 mb-8 max-w-2xl text-sm md:text-base">Track your courses, review assignments, and monitor your learning progress in one place.</p>
        <button @click="scrollToCourses" class="bg-white text-violet-700 font-semibold px-6 py-2.5 rounded-full hover:bg-gray-50 transition-colors text-sm">
          View My Courses
        </button>
      </section>

      <section class="flex flex-wrap gap-4 mb-12">
        <StarCard v-for="stat in stats" :key="stat.label" :label="stat.label" :value="stat.value" />
      </section>

      <section id="courses-section">
        <div class="mb-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-1">My Courses</h2>
          <p class="text-gray-500 text-sm">Review your course progress and assignment status.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CourseCard
            v-for="course in courses"
            :key="course.id"
            :course="course"
            @viewDetails="openModal"
            @submitAssignment="triggerToast"
          />
        </div>
      </section>
    </main>

    <CourseModal :isOpen="isModalOpen" :course="selectedCourse" @close="isModalOpen = false" />
    <ToastNotification :show="showToast" :message="toastMessage" />
  </div>
</template>

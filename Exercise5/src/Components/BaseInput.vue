<script setup>
defineProps({
    form: Object,
    errors: Object,
    submitted: Boolean
})
</script>

<template>
    <div class="flex flex-col gap-1">
        <label class="text-slate-500 font-semibold after:ml-1 after:text-red-500 after:content-['*']">Full Name</label>
        <input v-model="form.fullName" 
            :class="['border-2 rounded-lg p-2 placeholder:text-slate-300 outline-none focus:ring-2', submitted && errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500']" 
            type="text" placeholder="Enter your full name">
        <p v-if="submitted && errors.fullName" class="text-sm text-red-500">{{ errors.fullName }}</p>
    </div>

    <div class="flex flex-col gap-1">
        <label class="text-slate-500 font-semibold after:ml-1 after:text-red-500 after:content-['*']">Student ID</label>
        <input v-model="form.studentId" 
            :class="['border-2 rounded-lg p-2 placeholder:text-slate-300 outline-none focus:ring-2', submitted && errors.studentId ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500']" 
            type="text" placeholder="e.g. 6601234567">
        <p v-if="submitted && errors.studentId" class="text-sm text-red-500">{{ errors.studentId }}</p>
    </div>

    <div class="flex flex-col gap-1">
        <label class="text-slate-500 font-semibold after:ml-1 after:text-red-500 after:content-['*']">Email</label>
        <input v-model="form.email" 
            :class="['border-2 rounded-lg p-2 placeholder:text-slate-300 outline-none focus:ring-2', submitted && errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500']" 
            type="text" placeholder="yourname@example.com">
        <p v-if="submitted && errors.email" class="text-sm text-red-500">{{ errors.email }}</p>
    </div>

    <div class="flex flex-col gap-1">
        <label class="text-slate-500 font-semibold after:ml-1 after:text-red-500 after:content-['*']">Password</label>
        <input v-model="form.password" 
            :class="['border-2 rounded-lg p-2 placeholder:text-slate-300 outline-none focus:ring-2', submitted && errors.password ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500']" 
            type="password" placeholder="At least 8 characters">
        <p v-if="submitted && errors.password" class="text-sm text-red-500">{{ errors.password }}</p>
    </div>
</template>
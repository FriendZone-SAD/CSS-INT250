<script setup>
defineProps({
    form: Object,
    errors: Object,
    submitted: Boolean
})
</script>

<template>
    <div class="flex flex-col gap-1">
        <div class="flex items-start gap-3">
            <input type="checkbox" id="agree" v-model="form.agree" 
                :class="['mt-1 size-4 rounded', submitted && errors.agree ? 'border-red-500 focus:ring-red-500' : 'text-blue-600 focus:ring-blue-500']">
            <label for="agree" :class="['text-sm leading-relaxed cursor-pointer', submitted && errors.agree ? 'text-red-500' : 'text-slate-700']">
                I confirm that the information provided is correct and I agree to participate in the workshop activities.
            </label>
        </div>
        <p v-if="submitted && errors.agree" class="text-sm text-red-500 ml-7">{{ errors.agree }}</p>
    </div>
</template>
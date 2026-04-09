<script setup>
defineProps({
    form: Object,
    errors: Object,
    submitted: Boolean,
    yearOptions: Array
})
</script>

<template>
    <div class="flex flex-col gap-1">
        <label class="text-slate-500 font-semibold after:ml-1 after:text-red-500 after:content-['*']">Year Level</label>

        <div class="flex gap-4 mt-1">
            <label v-for="item in yearOptions" :key="item.value" :class="['flex flex-col border-2 p-3 rounded-xl cursor-pointer transition-all',
                form.yearLevel === item.value ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-slate-200 hover:border-blue-300 bg-white',
                submitted && errors.yearLevel && form.yearLevel === '' ? 'border-red-500' : '']">

                <div class="flex gap-3">
                    <input type="radio" :value="item.value" v-model="form.yearLevel" name="year"
                        class="size-4 mt-1 text-blue-600 focus:ring-blue-500">
                    <span class="font-semibold text-slate-900">{{ item.label }}</span>
                </div>
            </label>
        </div>
        <p v-if="submitted && errors.yearLevel" class="text-sm text-red-500">{{ errors.yearLevel }}</p>
    </div>
</template>
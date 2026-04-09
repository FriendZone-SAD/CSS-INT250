<script setup>
defineProps({
    form: Object,
    errors: Object,
    submitted: Boolean,
    programOptions: Array,
    trackOptions: Array
})
</script>

<template>
    <div class="flex flex-col gap-1">
        <label for="program" class="text-slate-500 font-semibold after:ml-1 after:text-red-500 after:content-['*']">Program / Major</label>
        <select v-model="form.program" id="program" 
            :class="['p-2 border-2 rounded-lg outline-none focus:ring-2', submitted && errors.program ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500']">
            <option value="" disabled selected>Select your program</option>
            <option v-for="item in programOptions" :key="item.value" :value="item.value">{{ item.label }}</option>
        </select>
        <p v-if="submitted && errors.program" class="text-sm text-red-500">{{ errors.program }}</p>
    </div>

    <div class="flex flex-col gap-1">
        <label for="track" class="text-slate-500 font-semibold after:ml-1 after:text-red-500 after:content-['*']">Workshop Track</label>
        <select v-model="form.track" id="track" 
            :class="['p-2 border-2 rounded-lg outline-none focus:ring-2', submitted && errors.track ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500']">
            <option value="" disabled selected>Select a track</option>
            <option v-for="item in trackOptions" :key="item.value" :value="item.value">{{ item.label }}</option>
        </select>
        <p v-if="submitted && errors.track" class="text-sm text-red-500">{{ errors.track }}</p>
    </div>
</template>
<script setup>
defineProps({
    form: Object
})
</script>

<template>
    <div class="flex flex-col gap-1">
        <div class="flex justify-between items-center">
            <label class="text-slate-500 font-semibold" for="bio" >Short Bio</label>
            <span class="text-sm text-slate-400 font-medium">{{ form.bio.length }}/200</span>
        </div>
        
        <textarea id="bio" v-model="form.bio" maxlength="200" 
            class="mt-1 w-full min-h-30 h-full border-2 border-slate-300 rounded-xl p-3 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y" 
            placeholder="Tell us about your interests..."></textarea>
        
        <p class="text-slate-400 mt-1 text-sm">Optional: briefly describe your interests or previous experience.</p>
    </div>
</template>
<script setup>
import Card from "./components/Card.vue"
</script>

<template >
  <div>
    <div class="bg-[#1e293b] h-screen flex justify-center gap-5">
      <Card 
        border-color="#334155"
        package-name="BASIC"
        storage="100GB"
        price="$1.99/month"
      />
      <Card 
        border-color="#334155"
        package-name="STANDARD"
        storage="200GB"
        price="$3.99/month"
      />
      <Card 
        border-color="#334155"
        package-name="PREMIUM"
        storage="2TB"
        price="$8.99/month"
      />
    </div>
  </div>
</template>

<style scoped></style>

<script setup>

import Button from "@/components/Button.vue";
</script>

<template>
  <div class="h-[calc(100vh-70px)] bg-gray-500 relative">
   <!-- <video autoplay loop muted width="100%">
      <source src="/src/assets/Post-Mestizo-v1.mp4" type="video/mp4"/>
      Your browser does not support the video tag
    </video>-->

    <div class="absolute bottom-0 -translate-x-1/2 left-1/2 w-5/6 lg:w-4/6 font-agrandir mb-20
    font-extrabold font-extraexpanded text-center space-y-10 text-[#323231] z-10">
      <p class="text-2xl md:text-5xl">La inspiración está en la oportunidad de darnos variedad para crear y aprender</p>
      <Button>Mi trabajo</Button>
    </div>
  </div>
</template>

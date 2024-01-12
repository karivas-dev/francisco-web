<script setup>
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="relative">
    <video autoplay loop muted width="100%" class="hidden md:block">
      <source src="@/assets/videos/main-gradient.mp4" type="video/mp4"/>
      Your browser does not support the video tag
    </video>

    <video autoplay loop muted width="100%" class="block md:hidden">
      <source src="@/assets/videos/gradient-phone.mp4" type="video/mp4"/>
      Your browser does not support the video tag
    </video>

    <div class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-5/6 lg:w-4/6 font-agrandir
    font-extrabold font-extraexpanded text-center space-y-10 text-[#323231] z-10">
      <p class="text-2xl md:text-5xl">La inspiración está en la oportunidad de darnos variedad para crear y aprender</p>
      <Button>Mi trabajo</Button>
    </div>
  </div>
</template>

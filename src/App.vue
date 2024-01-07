<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <header class="pb-[68px]">
    <Navbar/>
  </header>

  <main class="max-w-[1920] mx-auto font-scp leading-tight">
    <router-view></router-view>
  </main>
</template>


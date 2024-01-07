<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <header class="bg-[#FCFCF7] pb-[68px]">
    <Navbar/>
  </header>

  <main class="bg-[#FCFCF7] font-scp leading-tight">
    <router-view></router-view>
  </main>
</template>


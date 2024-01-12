<script setup>
import Home from "@/components/Home.vue";
import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Home/>
  <AboutMe/>
  <img alt="Banner screen" class="w-full my-10 hidden md:block" src="@/assets/img/homepage/banner-home.png"/>
  <img alt="Banner phone" class="w-full my-10 block md:hidden" src="@/assets/img/homepage/phrase-phone.png"/>
  <Projects/>
  <Footer/>
</template>

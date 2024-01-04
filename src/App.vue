<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Home from "@/components/Home.vue";
</script>

<template>
  <header class="pb-[68px]">
    <Navbar/>
  </header>

  <main class="max-w-7xl mx-auto font-scp leading-tight">
    <Home/>
    <AboutMe/>
  </main>

  <!--  <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="">
      <HelloWorld msg="You did it!" />
    </div>

  <main>
    <TheWelcome />
    <TheWelcome />
    <TheWelcome />
    <TheWelcome />
    <TheWelcome />
  </main>-->
</template>


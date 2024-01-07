<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Navbar from "@/components/Navbar.vue";
import AboutMe from "@/components/AboutMe.vue";
import Home from "@/components/Home.vue";
import Projects from "@/components/Projects.vue";
</script>

<template>
  <header class="pb-[68px]">
    <Navbar/>
  </header>

  <main class="max-w-[1920] mx-auto font-scp leading-tight">
    <router-view></router-view>
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


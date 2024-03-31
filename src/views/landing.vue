<script setup>
import Home from "@/components/Home.vue";
import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/Footer.vue";
import Button from "@/components/Button.vue";
import Reel from "@/views/reel.vue";
import Portafolio from "@/views/portafolio.vue";
import {ref} from "vue";

const option = ref('projects');
</script>

<template>
  <Home v-model="option"/>
  <AboutMe/>
  <img alt="Banner screen" class="w-full my-10 hidden md:block" src="@/assets/img/homepage/banner-home.png"/>
  <img alt="Banner phone" class="w-full my-10 block md:hidden" src="@/assets/img/homepage/phrase-phone.png"/>
  <div id="proyectos"  class="mx-8 md:mx-28 scroll-mt-28">
    <div ref="targetRef" class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 mt-16 md:mt-20">
      <Button @click="option = 'projects'" :class="{'bg-[#f7bf33]': option == 'projects'}">
        Mi trabajo
      </Button>
      <Button @click="option = 'reel'" :class="{'bg-[#f7bf33]': option == 'reel'}">
        Reel 2024
      </Button>
      <Button @click="option = 'portafolio'" :class="{'bg-[#f7bf33]': option == 'portafolio'}">
        Portafolio
      </Button>
    </div>
  </div>

  <Projects v-if="option == 'projects'" class=""/>
  <Reel v-else-if="option == 'reel'"/>
  <Portafolio v-else/>

  <Footer/>
</template>

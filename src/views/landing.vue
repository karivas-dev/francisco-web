<script setup>
import Home from "@/components/Home.vue";
import AboutMe from "@/components/AboutMe.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/Footer.vue";
import Button from "@/components/Button.vue";
import Reel from "@/views/reel.vue";
import Portafolio from "@/views/portafolio.vue";
import {useProjectsStore} from "@/stores/ProjectsStore";

const projectsStore = useProjectsStore();
</script>

<template>
  <Home/>
  <AboutMe/>
  <img alt="Banner screen" class="w-full my-10 hidden md:block" src="@/assets/img/homepage/banner-home.png"/>
  <img alt="Banner phone" class="w-full my-10 block md:hidden" src="@/assets/img/homepage/phrase-phone.png"/>
  <div id="proyectos"  class="mx-8 md:mx-28 scroll-mt-28">
    <div ref="targetRef" class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 mt-16 md:mt-20">
      <Button @click="projectsStore.currentProject = projectsStore.projects.projects"
              :class="{'bg-[#f7bf33]': projectsStore.currentProject === projectsStore.projects.projects}">
        Mi trabajo
      </Button>
      <Button @click="projectsStore.currentProject = projectsStore.projects.reel"
              :class="{'bg-[#f7bf33]': projectsStore.currentProject === projectsStore.projects.reel}">
        Reel 2024
      </Button>
      <Button @click="projectsStore.currentProject = projectsStore.projects.portafolio"
              :class="{'bg-[#f7bf33]': projectsStore.currentProject === projectsStore.projects.portafolio}">
        Portafolio
      </Button>
    </div>
  </div>

  <Projects v-show="projectsStore.currentProject === projectsStore.projects.projects"/>
  <Reel v-show="projectsStore.currentProject === projectsStore.projects.reel"/>
  <Portafolio v-show="projectsStore.currentProject === projectsStore.projects.portafolio"/>

  <Footer/>
</template>

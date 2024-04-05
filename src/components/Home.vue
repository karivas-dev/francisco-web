<script setup>
import Button from "@/components/Button.vue";
import {useProjectsStore} from "@/stores/ProjectsStore";

const projectsStore = useProjectsStore();

function scrollTo() {
  this.$refs.targetRef.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <div id="inicio" class="relative">
    <video autoplay class="hidden md:block" loop muted width="100%">
      <source src="@/assets/videos/main-gradient.mp4" type="video/mp4"/>
      Your browser does not support the video tag
    </video>

    <video autoplay class="block md:hidden" loop muted width="100%">
      <source src="@/assets/videos/gradient-phone.mp4" type="video/mp4"/>
      Your browser does not support the video tag
    </video>

    <div class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-5/6 lg:w-4/6 font-agrandir
    font-extrabold font-extraexpanded text-center space-y-10 text-[#323231] z-10">
      <p class="text-2xl md:text-5xl">La inspiración está en la oportunidad de darnos variedad para crear y aprender</p>
      <Button>
        <a href="#proyectos" @click="projectsStore.currentProject = projectsStore.projects.projects">
          Mi trabajo
        </a>
      </Button>
    </div>
  </div>
</template>

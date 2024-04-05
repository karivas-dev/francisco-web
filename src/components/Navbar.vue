<script setup>
import {computed, nextTick, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {useProjectsStore} from "@/stores/ProjectsStore";

const route = useRoute();
const routeName = computed(() => route.name);

const showMenu = ref(false);
const animation = ref(false);

const projectsStore = useProjectsStore();

watch(showMenu, () => {
  if (!showMenu.value) return;

  animation.value = true;
  setTimeout(() => nextTick(() => {
    animation.value = false;
  }), 2600);
});
</script>

<template>
  <nav class="fixed w-full bg-[#333] z-30 py-4 px-5 md:px-8">
    <div class="mx-auto flex items-center justify-between max-w-[192]">
      <router-link :to="{ name: 'home' }" @click="() => {showMenu = false; projectsStore.currentProject = projectsStore.projects.projects;}">
        <img alt="r logo" class="" height="30" src="../assets/img/r.svg" width="30"/>
      </router-link>

      <div class="text-xl font-extraLight text-white text-center font-agrandir font-expanded">
        <span v-if="routeName == 'home'">Inicio</span>
        <span v-else-if="routeName == 'counter'">Cuenta regresiva</span>
        <span v-else>Proyectos</span><span class="text-[#f7bf33]">//
          <span v-if="routeName != 'home' && routeName != 'counter'">
            {{ routeName }}
          </span>
        </span>
      </div>

      <img alt="dots" class="h-1.5 md:h-2" src="../assets/img/dots.svg" width="45" @click="showMenu = !showMenu"/>
    </div>
  </nav>

  <div :class="{
          '-top-full': !showMenu,
          'top-[67px] animate-[bounce2_0.55s_0.35s_1]': showMenu
       }"
       class="fixed left-0 w-full h-[calc(100vh_-_67px)] bg-[#333] opacity-[0.97] z-20 flex justify-center items-center
        ease-out transition-all duration-500">
    <div class="text-white font-scp flex flex-col">
      <a href="#inicio" @click="() => {showMenu = !showMenu; projectsStore.currentProject = projectsStore.projects.projects}">
        Inicio
      </a>
      <a href="#sobre-mi" @click="showMenu = !showMenu">
        Sobre mi
      </a>
      <router-link :to="{name: 'home', hash: '#proyectos'}"
                   @click="() => {showMenu = !showMenu; projectsStore.currentProject = projectsStore.projects.projects}">
        Proyectos
      </router-link>
      <router-link :to="{name: 'home', hash: '#proyectos'}"
                   @click="() => {showMenu = !showMenu; projectsStore.currentProject = projectsStore.projects.reel}">
        Reel
      </router-link>
      <router-link :to="{name: 'home', hash: '#proyectos'}"
                   @click="() => {showMenu = !showMenu; projectsStore.currentProject = projectsStore.projects.portafolio}">
        Porta
      </router-link>
      <a href="#contacto" @click="showMenu = !showMenu">
        Contáctame
      </a>
    </div>
  </div>
</template>

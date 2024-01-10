<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const routeName = computed(() => route.name);

</script>

<template>
  <nav class="fixed w-full bg-[#333] z-20 py-4 px-8">
    <div class="max-w-[1920] mx-auto flex justify-between items-center">

      <router-link :to="{ name: 'home' }">
        <img alt="r logo" class="" height="30" src="../assets/img/r.svg" width="30"/>
      </router-link>

      <div class="text-xl text-white font-agrandir font-expanded font-extraLight">
        <span v-if="routeName == 'home'">Inicio</span>
        <span v-else>Proyectos</span><span class="text-[#f7bf33]">//
          <span v-if="routeName != 'home'">
            {{ routeName }}
          </span>
        </span>
      </div>

      <img alt="dots" class="" height="45" src="../assets/img/dots.svg" width="45"/>

    </div>
  </nav>
</template>

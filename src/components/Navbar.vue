<script setup>
import {computed, nextTick, ref, watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const routeName = computed(() => route.name);

const showMenu = ref(false);
const animation = ref(false);

watch(showMenu, () => {
  if (!showMenu.value) return;

  animation.value = true;
  setTimeout(() => nextTick(() => {
    animation.value = false;
  }), 2600);
});
</script>

<template>
  <nav class="fixed w-full bg-[#333] z-30 py-4 px-8">
    <div class="mx-auto flex items-center justify-between max-w-[1920]">

      <router-link :to="{ name: 'home' }">
        <img alt="r logo" class="" height="30" src="../assets/img/r.svg" width="30"/>
      </router-link>

      <div class="text-xl font-extraLight text-white font-agrandir font-expanded">
        <span v-if="routeName == 'home'">Inicio</span>
        <span v-else>Proyectos</span><span class="text-[#f7bf33]">//
          <span v-if="routeName != 'home'">
            {{ routeName }}
          </span>
        </span>
      </div>

      <img alt="dots" class="" height="45" src="../assets/img/dots.svg" width="45" @click="showMenu = !showMenu"/>
    </div>
  </nav>

  <div :class="{
          '-top-full': !showMenu,
          'top-[67px] animate-[bounce2_0.75s_0.5s_2]': showMenu
       }"
       class="fixed left-0 w-full h-[calc(100vh_-_67px)] bg-[#333] opacity-[0.97] z-20 flex justify-center items-center
        ease-out transition-all duration-500">
    <div class="text-white">
      A
      <br>
      B
      <br>
      C
    </div>
  </div>
</template>

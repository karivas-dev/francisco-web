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
  <nav class="fixed w-full bg-[#333] z-30 py-4 px-5 md:px-8">
    <div class="mx-auto flex items-center justify-between max-w-[1920]">

      <router-link :to="{ name: 'home' }">
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
          'top-[67px] animate-[bounce2_0.75s_0.5s_2]': showMenu
       }"
       class="fixed left-0 w-full h-[calc(100vh_-_67px)] bg-[#333] opacity-[0.97] z-20 flex justify-center items-center
        ease-out transition-all duration-500">
    <div class="text-white font-scp flex flex-col">
      <router-link to="/#inicio">
        Inicio
      </router-link>
      <router-link to="/#sobre-mi">
        Sobre mi
      </router-link>
      <router-link to="/#proyectos">
        Proyectos
      </router-link>
      <router-link to="/#reel">
        Reel
      </router-link>
      <router-link to="/#porta">
        Porta
      </router-link>
      <router-link to="/#contacto">
        Contáctame
      </router-link>
    </div>
  </div>
</template>

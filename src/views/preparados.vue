<script setup>

import OpeningTitle from "@/components/OpeningTitle.vue";
</script>

<template>
  <div class="grid grid-cols-2 mx-20 mt-20">
    <video autoplay loop muted width="100%">
      <source src="@/assets/prep-video.mp4" type="video/mp4"/>
      Parece ser que hay problemas con el navegador
    </video>
    <img class="w-full" src="@/assets/img/preparados/prep.png"/>
  </div>

  <OpeningTitle>
    <img alt="Titulo" src="@/assets/img/preparados/title-prep.png" width="100%"/>
  </OpeningTitle>

  <div class="grid grid-cols-2 mx-20 mt-20">
    <p class="my-auto">Match con tu salud es un programa enfocado en brindar educación y consejería relacionada al VIH y otras ITS. Para
      ello, por medio de Grupo Plan B, se desarrollaron diversas campañas de comunicación en pro de la educación sexual.
      Desarrollando la campaña “Estamos Preparados”. Para lo cúal, en desarrollo colaborativo, se desarrollaron
      personajes para la comunicación de dicha campaña, así como el motion design de piezas para redes sociales y otros
      aplicativos.
    </p>
    <div class="flex">
      <img class="w-1/2" src="@/assets/img/preparados/condi.png"/>
      <img class="w-1/2" src="@/assets/img/preparados/prep-alone.png"/>
    </div>
  </div>

  <div class="grid grid-cols-3 my-20">
    <img class="" src="@/assets/img/preparados/hands.png"/>
    <img class="" src="@/assets/img/preparados/hands-reaction.png"/>
    <img class="" src="@/assets/img/preparados/hand.png"/>
    <img class="col-start-2 mt-16" src="@/assets/img/preparados/brain.png"/>
  </div>
  <img class="my-20" src="@/assets/img/preparados/proceso.png"/>

  <div class="my-12">
    <p class="text-center font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
    <p class="text-center">Project Manager_Fátima Molina</p>
    <p class="text-center">Contenido_Lidia Echaegoyen</p>
    <p class="text-center">Dirección creativa_Andrea Sánchez</p>
    <p class="text-center">Ilustración y Motion Design_Francisco Rivas</p>
    <p class="text-center">GPB-Plan Internacional</p>
  </div>
</template>

<style scoped>

</style>
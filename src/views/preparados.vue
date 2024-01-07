<script setup>
import OpeningTitle from "@/components/OpeningTitle.vue";
</script>

<template>
  <div class="max-w-1920 mx-auto pt-20">
    <div class="grid grid-cols-2 mx-20">
      <video autoplay loop muted width="100%" controls class="my-auto">
        <source src="@/assets/prep-video.mp4" type="video/mp4" />
        Parece ser que hay problemas con el navegador
      </video>
      <img class="h-full mx-auto" src="@/assets/img/preparados/prep.png" />
    </div>

    <OpeningTitle>
      <template #title>
        <img alt="Titulo" src="@/assets/img/preparados/title-prep.png" width="100%" />
      </template>
      <template #description>
        Diseño de personaje, Motion Desing
      </template>
    </OpeningTitle>

    <div class="grid grid-cols-2 gap-16 mx-20 mb-20">
      <p class="my-auto">Match con tu salud es un programa enfocado en brindar educación y consejería relacionada al VIH y
        otras ITS. Para ello, por medio de Grupo Plan B, se desarrollaron diversas campañas de comunicación en pro de la
        educación sexual. Desarrollando la campaña “Estamos Preparados”. Para lo cúal, en desarrollo colaborativo, se
        desarrollaron personajes para la comunicación de dicha campaña, así como el motion design de piezas para redes
        sociales y otros aplicativos.
      </p>

      <div class="flex">
        <img class="w-1/2" src="@/assets/img/preparados/condi.png" />
        <img class="w-1/2" src="@/assets/img/preparados/prep-alone.png" />
      </div>
    </div>

    <div class="grid grid-cols-3 m-20 justify-items-center">
      <img class="h-full" src="@/assets/img/preparados/hands.png" />
      <img class="h-full" src="@/assets/img/preparados/hands-reaction.png" />
      <img class="h-full" src="@/assets/img/preparados/hand.png" />
      <img class="col-start-2 mt-16" src="@/assets/img/preparados/brain.png" />
    </div>
  </div>

  <div class="bg-[#fcd32c]">
    <img class="max-w-1920 mx-auto w-full my-20" src="@/assets/img/preparados/proceso.png" />
  </div>

  <div class="pb-12 text-center">
    <p class="font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
    <p>Project Manager_Fátima Molina</p>
    <p>Contenido_Lidia Echaegoyen</p>
    <p>Dirección creativa_Andrea Sánchez</p>
    <p>Diseño de personaje y Motion Design_
      <span class="font-semibold">
        Francisco Rivas
      </span>
    </p>
    <p>GPB-Plan Internacional</p>
  </div>
</template>

<style scoped></style>
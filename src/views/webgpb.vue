<script setup>

import Title from "@/components/Title.vue";
import Footer from "@/components/footer.vue";
</script>

<template>
  <div class="bg-white">
    <img alt="Banner Web GPB" class="max-w-1920 mx-auto" src="@/assets/img/webgpb/banner.png" width="100%">
  </div>

  <div class="bg-[#262626] py-12">
    <div class="max-w-1920 mx-auto grid grid-cols-8 text-white gap-y-8 gap-x-3">
      <img alt="Titulo Web GPB" class="col-span-4 row-start-1 col-start-3" src="@/assets/img/webgpb/title.png"
           width="100%">

      <div class="col-span-4 row-start-2 col-start-3 text-center my-12 text-white">
            <span class="px-5 py-4 border border-white rounded-full w-full">
                <span class="font-bold">Menú// Alcances:</span>
                 Diseño web
            </span>
      </div>

      <p class="col-span-2 col-start-2 row-start-3">
        Grupo Plan B es una agencia de marketing digital enfocada en proporcionar distintas soluciones en el mundo
        digital. Junto al equipo multidisciplinario, se desarrolló un refrescamiento de su sitio web con el propósito de
        actualizar la presencia en línea, así como organizar de mejor manera su contenido.
      </p>

      <p class="row-start-4 col-start-4 col-span-2">
        Parte del proceso contempló la estructuración de la información, así como se propuso el uso de una iconografía
        más limpia, manteniendo los bordes redondeados característicos de la marca gráfica. Crómaticamente se propuso un
        cambio para reducir la presencia de naranja y la predominancia de negro y blanco.
      </p>

      <img alt="Mockup teléfono" class="col-span-2 row-start-3 row-span-2 col-start-6"
           src="@/assets/img/webgpb/phone.png" width="100%">
      <img alt="Maquetado 1" class="col-span-3 col-start-2 mt-8" src="@/assets/img/webgpb/layout2.png" width="100%">
      <img alt="Maquetado 2" class="col-span-3 mt-8" src="@/assets/img/webgpb/layout.png" width="100%">
      <img alt="Maquetado 3" class="col-span-3 col-start-2" src="@/assets/img/webgpb/layout3.png" width="100%">
      <img alt="Maquetado 4" class="col-span-3" src="@/assets/img/webgpb/layout1.png" width="100%">
    </div>
  </div>

  <div class="max-w-1920 mx-auto grid grid-cols-8 mt-20 gap-2">
    <div class="col-span-4 col-start-3 mb-5">
      <Title>Site map</Title>
    </div>
    <img alt="Site map" class="col-start-2 col-span-6 mt-8" src="@/assets/img/webgpb/site-map.png" width="100%">
    <div class="col-span-4 col-start-3 my-12">
      <Title>Layouts</Title>
    </div>

    <img alt="Layout 1" class="col-start-2 col-span-2" src="@/assets/img/webgpb/layout03.png" width="100%">
    <img alt="Layout 2" class="col-span-2" src="@/assets/img/webgpb/layout02.png" width="100%">
    <img alt="Layout 3" class="col-span-2" src="@/assets/img/webgpb/layout01.png" width="100%">
  </div>

  <div class="py-12 text-center">
    <p class="font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
    <p>Project Manager_Fátima Molina</p>
    <p>Contenido_Lidia Echaegoyen</p>
    <p>Desarrollo web_Mauricio González</p>
    <p>Diseño web_<span class="font-semibold">Francisco Rivas</span></p>
    <p>GPB</p>
  </div>
  <Footer/>
</template>

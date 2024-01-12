<script setup>
import OpeningTitle from '@/components/OpeningTitle.vue';
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="h-[calc(100vh-68px)] bg-[#f2f3f9] pt-[67px] flex items-center mb-8">
    <video autoplay loop muted width="100%">
      <source src="@/assets/videos/al-tazon.mp4" type="video/mp4"/>
      Parece ser que hay problemas con el navegador
    </video>
  </div>

  <OpeningTitle>
    <template #title>
      <img alt="Titulo" src="@/assets/img/altazon/title.png" width="100%"/>
    </template>
    <template #description>
      Ilustración, Diseño de marca
    </template>
  </OpeningTitle>

  <div class="max-w-1920 mx-auto">
    <p class="mx-6 md:mx-20">Para este proyecto se racionalizó el origen de la comida asiática en nuestro país y región, tomando
      a consideración la forma en como siendo una región de paso se tropicalizan nuevas costumbres, tradiciones,
      lenguaje y comida. Esa mezcla da origen al naming de marca.
      <br><br>
      Al tazón: una marca de comida pensada para un viajero que busque saciar su hambre, llenar su tazón. Como parte de
      los elementos gráficos se consideró el uso de la ilustración de platillos representativos de la marca y de la
      comida asiática.
    </p>

    <div class="grid grid-cols-6 m-6 my-12 md:m-20 gap-4 md:gap-10 items-center ">
      <img alt="Logo variación" class="ml-auto" src="@/assets/img/altazon/logo-full.png" width="100%"/>
      <img alt="Logo variación" class="col-span-2" src="@/assets/img/altazon/letters-altazon.png" width="100%"/>
      <img alt="Logo variación" class="col-span-2" src="@/assets/img/altazon/logo.png" width="100%"/>
      <img alt="Logo variación" src="@/assets/img/altazon/tiny-logo.png" width="100%"/>
      <img alt="Lineas" class="col-span-4 col-start-2" src="@/assets/img/altazon/lines.png" width="100%"/>
    </div>
  </div>

  <div class="bg-[#f7bf34] py-16 px-8">
    <div class="max-w-1920 mx-auto mb-6">
      <div class="grid grid-cols-3 gap-14 mx-32">
        <img alt="Banner 1" src="@/assets/img/altazon/banner.jpg" width="100%"/>
        <img alt="Banner 2" src="@/assets/img/altazon/dumpling.jpg" width="100%"/>
        <img alt="Banner 3" src="@/assets/img/altazon/banner1.jpg" width="100%"/>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 md:gap-5 max-w-1920 mx-auto">
      <img alt="Bolsa de Al Tazón" src="@/assets/img/altazon/bag-altazon.png" width="100%"/>
      <img alt="Delantal" src="@/assets/img/altazon/apron.png" width="100%"/>
    </div>
  </div>

  <div class="bg-[#1fcda1]">
    <img alt="Menú de Al Tazón" class="max-w-1920 mx-auto" src="@/assets/img/altazon/menu.png" width="100%"/>
  </div>

  <div class="max-w-1920 mx-auto grid grid-cols-8 gap-8">
    <div class="col-span-6 col-start-2 mt-20 mb-4 font-agrandir italic font-black font-expanded text-3xl">
      Relevancia de la cocina China-salvadoreña
    </div>
    <p class="col-start-2 md:col-start-2 col-span-6 md:col-span-3 row-span-1">El chef Jorge Cipactli se refiere a la cocina china en El Salvador como
      una mezcla o tropicalización de la misma. Y
      expresa que el primer restaurante de cocina china en nuestro país nace en 1961.
    </p>

    <p class="col-start-2 col-span-6 md:col-start-2 md:col-span-2 row-span-2">
      Por otro lado el libro “Patrimonio
      cultural marítimo de El Salvador de registro de pecios marinos” del antropólogo Roberto Orellana registra las
      visitas de barco de viaje de la PMSC (Pacific Mail Steamship Company) en este habla de los primeros chinos
      visitando
      suelo salvadoreño a través de este barco de vapor.
    </p>
    <img alt="Ilustración de arroz" class="col-end-8 col-span-4 " src="@/assets/img/altazon/arroz.png" width="100%"/>
  </div>

  <div class="bg-white">
    <img alt="Proceso" class="max-w-1920 mx-auto" src="@/assets/img/altazon/process.png" width="100%"/>
  </div>

  <div class="mx-2 py-12 text-center">
    <p class="font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
    <p>Fotografía_Otoniel López</p>
    <p>Diseño de marca e Ilustración_<span class="font-semibold">Francisco Rivas</span></p>
  </div>
  <Footer/>
</template>

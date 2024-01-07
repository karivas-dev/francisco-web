<script setup>
import OpeningTitle from '@/components/OpeningTitle.vue';
</script>

<template>
  <div class="h-[calc(100vh-68px)] bg-[#f2f3f9] flex items-center">
    <video autoplay loop muted width="100%">
      <source src="@/assets/al-tazon.mp4" type="video/mp4" />
      Parece ser que hay problemas con el navegador
    </video>
  </div>

  <OpeningTitle>
    <template #title>
      <img alt="Titulo" width="100%" src="@/assets/img/timienlaoscuridad/title.png" />
    </template>
    <template #description>
      Ilustración, Diseño de marca
    </template>
  </OpeningTitle>

  <div class="max-w-1920 mx-auto">
    <p class="mx-20">Para este proyecto se racionalizó el origen de la comida asiática en nuestro país y región, tomando a
      consideración
      la forma en como siendo una región de paso se tropicalizan nuevas costumbres, tradiciones, lenguaje y comida. Esa
      mezcla da origen al naming de marca.
      <br><br>
      Al tazón: una marca de comida pensada para un viajero que busque saciar su hambre, llenar su tazón. Como parte de
      los elementos gráficos se consideró el uso de la ilustración de platillos representativos de la marca y de la comida
      asiática.
    </p>

    <div class="grid grid-cols-6 m-20 gap-10 items-center ">
      <img alt="Logo variación" class="ml-auto" width="100%" src="@/assets/img/altazon/logo-full.png" />
      <img alt="Logo variación" class="col-span-2" width="100%" src="@/assets/img/altazon/letters-altazon.png" />
      <img alt="Logo variación" class="col-span-2" width="100%" src="@/assets/img/altazon/logo.png" />
      <img alt="Logo variación" width="100%" src="@/assets/img/altazon/tiny-logo.png" />
      <img alt="Lineas" class="col-span-4 col-start-2" width="100%" src="@/assets/img/altazon/lines.png" />
    </div>
  </div>

  <div class="bg-[#f7bf34] py-16 px-8">
    <div class="grid grid-cols-3 gap-14 mx-32 mb-8">
      <img alt="Banner 1" width="100%" src="@/assets/img/altazon/banner.jpg" />
      <img alt="Banner 2" width="100%" src="@/assets/img/altazon/dumpling.jpg" />
      <img alt="Banner 3" width="100%" src="@/assets/img/altazon/banner1.jpg" />
    </div>

    <div class="grid grid-cols-2 gap-5">
      <img alt="Bolsa de Al Tazón" width="100%" src="@/assets/img/altazon/bag-altazon.png" />
      <img alt="Delantal" width="100%" src="@/assets/img/altazon/apron.png" />
    </div>
  </div>

  <img alt="Menú de Al Tazón" width="100%" src="@/assets/img/altazon/menu.png" />

  <div class="max-w-1920 mx-auto grid grid-cols-8 gap-8">
    <p class="col-start-2 col-span-3 row-span-1">El chef Jorge Cipactli se refiere a la cocina china en El Salvador como una mezcla o tropicalización de la misma. Y
      expresa que el primer restaurante de cocina china en nuestro país nace en 1961. 
    </p>

    <p class="col-start-2 col-span-2 row-span-2">
      Por otro lado el libro “Patrimonio
      cultural marítimo de El Salvador de registro de pecios marinos” del antropólogo Roberto Orellana registra las
      visitas de barco de viaje de la PMSC (Pacific Mail Steamship Company) en este habla de los primeros chinos visitando
      suelo salvadoreño a través de este barco de vapor.
    </p>
    <img alt="Ilustración de arroz" class="col-span-4" width="100%" src="@/assets/img/altazon/arroz.png" />
  </div>

  <img alt="Proceso" class="" width="100%" src="@/assets/img/altazon/process.png" />
  
  <div class="py-12 text-center">
    <p class="font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
    <p>Fotografía_Otoniel López</p>
    <p>Diseño de marca e Ilustración_
      <span class="font-semibold">
        Francisco Rivas
      </span>
    </p>
</div></template>

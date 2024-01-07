<script setup>
import OpeningTitle from '@/components/OpeningTitle.vue';
</script>

<template>
  <img alt="Banner Ancestral" class="w-full mb-20" src="../assets/img/ancestral/banner-ancestral.png"/>

  <OpeningTitle>
    <img alt="Titulo" src="@/assets/img/ancestral/title-ancestral.png" width="100%"/>
  </OpeningTitle>

  <div class="mx-32">
    <div class="flex justify-center m-8">
      <span class="px-5 py-4 border border-[#] rounded-full">Menú// Alcances: Ilustración, Diseño de personajes,
        Editorial</span>
    </div>

    <div class="grid grid-cols-2 mx-32 gap-x-12">
      <p class="my-auto">La Organización de las Naciones Unidas para la Alimentación y la Agricultura desarrolló un
        proyecto enfocado en
        la promulgación de la herencia indígena y afrodescendiente de los platillos del territorio salvadoreño, a través
        de un Recetario ancestral, con alimentos nutritivos y de fácil preparación. Para este proyecto se trabajó de
        manera colaborativa, y tuve la oportunidad de ejecutar la dirección fotográfica, así como el food styling de
        dichos platos.</p>
      <img alt="Foto" class="w-full mb-16" src="../assets/img/ancestral/foto06.png"/>
    </div>
  </div>

  <div class="grid grid-cols-8 gap-2 mx-8 mb-24">
    <div class="col-span-3 row-start-1">
      <img alt="Foto" class="w-full h-full" src="../assets/img/ancestral/foto01.png" />
    </div>
    <div class="col-span-3 row-start-2">
      <img alt="Foto" class="w-full h-full" src="../assets/img/ancestral/foto02.png" />
    </div>
    <div class="col-span-5 row-span-2">
      <img alt="Foto" class="w-full" src="../assets/img/ancestral/foto03.png" />
    </div>
  </div>

  <div class="grid grid-cols-8 mx-8 gap-x-2">
    <img alt="Foto" class="col-span-4 col-start-3" src="@/assets/img/ancestral/subtitulo.png" width="100%"/>
    <p class="col-start-2 col-span-6 mt-8 mb-12">
      El registro fotográfico nos llevó a realizar trabajo de campo como parte del proceso. Las recetas son resultado de
      la
      investigación y registro desarrollado por el chef Cipactli para FAO El Salvador. Trabajar de manera
      multidisciplinaria
      y colaborativa es un componente del diseño flexible como parte fundamental en este proyecto.
    </p>

    <img alt="Foto" class="col-span-2 col-start-2" src="@/assets/img/ancestral/foto05.png" width="100%"/>
    <img alt="Foto" class="col-span-2" src="@/assets/img/ancestral/foto07.png" width="100%"/>
    <img alt="Foto" class="col-span-2" src="@/assets/img/ancestral/foto04.png" width="100%"/>
  </div>

  <div class="grid grid-cols-8 mx-8 gap-x-2 mt-3">
    <img alt="Foto" class="col-span-5" src="@/assets/img/ancestral/foto08.png" width="100%"/>
    <img alt="Foto" class="col-span-3 h-full" src="@/assets/img/ancestral/foto09.png" width="100%"/>
  </div>

  <div class="my-12">
    <p class="text-center font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
    <p class="text-center">Fotografía y Post-producción_Otoniel López</p>
    <p class="text-center">Dirección y Food-styling_Francisco Rivas</p>
    <p class="text-center">Cocina y Coordinación_Chef Jorge Cipactli</p>
  </div>
</template>

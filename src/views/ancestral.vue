<script setup>
import OpeningTitle from '@/components/OpeningTitle.vue';
import Footer from "@/components/footer.vue";
</script>

<template>
  <img alt="Banner Ancestral" class="max-w-1920 mx-auto" src="../assets/img/ancestral/banner-ancestral.png"
       width="100%"/>

  <OpeningTitle>
    <template #title>
      <img alt="Titulo" src="@/assets/img/ancestral/title-ancestral.png" width="100%"/>
    </template>
    <template #description>
      Ilustración, Diseño de personajes, Editorial
    </template>
  </OpeningTitle>

  <div class="max-w-1920 mx-auto">
    <div class="grid grid-cols-2 mx-32 gap-x-12">
      <p class="my-auto">La Organización de las Naciones Unidas para la Alimentación y la Agricultura desarrolló un
        proyecto enfocado en la promulgación de la herencia indígena y afrodescendiente de los platillos del territorio
        salvadoreño, a través de un Recetario ancestral, con alimentos nutritivos y de fácil preparación. Para este
        proyecto se trabajó de manera colaborativa, y tuve la oportunidad de ejecutar la dirección fotográfica, así como
        el food styling de dichos platos.</p>
      <img alt="Foto" class="w-full mb-16" src="../assets/img/ancestral/foto06.png"/>
    </div>

    <div class="grid grid-cols-8 gap-2 mx-8 mb-24">
      <div class="col-span-3 row-start-1">
        <img alt="Foto" height="100%" src="../assets/img/ancestral/foto01.png" width="100%"/>
      </div>
      <div class="col-span-3 row-start-2">
        <img alt="Foto" height="100%" src="../assets/img/ancestral/foto02.png" width="100%"/>
      </div>
      <div class="col-span-5 row-span-2">
        <img alt="Foto" height="100%" src="../assets/img/ancestral/foto03.png" width="100%"/>
      </div>
    </div>

    <div class="grid grid-cols-8 mx-8 gap-x-2">
      <img alt="Foto" class="col-span-4 col-start-3" src="@/assets/img/ancestral/subtitulo.png" width="100%"/>
      <p class="col-start-2 col-span-6 mt-8 mb-12">
        El registro fotográfico nos llevó a realizar trabajo de campo como parte del proceso. Las recetas son resultado
        de la investigación y registro desarrollado por el chef Cipactli para FAO El Salvador. Trabajar de manera
        multidisciplinaria y colaborativa es un componente del diseño flexible como parte fundamental en este proyecto.
      </p>

      <img alt="Foto" class="col-span-2 col-start-2" src="@/assets/img/ancestral/foto05.png" width="100%"/>
      <img alt="Foto" class="col-span-2" src="@/assets/img/ancestral/foto07.png" width="100%"/>
      <img alt="Foto" class="col-span-2" src="@/assets/img/ancestral/foto04.png" width="100%"/>
    </div>

    <div class="grid grid-cols-8 mx-8 gap-x-2 mt-3">
      <img alt="Foto" class="col-span-5" src="@/assets/img/ancestral/foto08.png" width="100%"/>
      <img alt="Foto" class="col-span-3 h-full" src="@/assets/img/ancestral/foto09.png" width="100%"/>
    </div>

    <div class="mt-16 mb-12 text-center">
      <p class="font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
      <p>Fotografía y Post-producción_Otoniel López</p>
      <p>Dirección y Food-styling_
        <span class="font-semibold">Francisco Rivas</span>
      </p>
      <p>Cocina y Coordinación_Chef Jorge Cipactli</p>
    </div>
  </div>
  <Footer/>
</template>

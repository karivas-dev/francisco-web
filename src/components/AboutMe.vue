<script setup>
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="px-12 my-20 grid grid-cols-8 place-content-center relative">
    <div class="absolute top-1/2 left-1/2 -z-10">
      <img alt="" width="" class="animate-random-circle" src="../assets/img/homepage/gradientecirc.svg">
    </div>

    <div class="col-span-8 md:col-span-3 row-start-3 md:row-start-1 my-6 md:my-0">
      <img alt="Sobre mi título" class="w-full" src="../assets/img/homepage/greeting-fran.png"/>
    </div>

    <div class="col-span-8 md:col-span-3 md:col-start-2 space-y-6 row-start-4 md:row-start-3">
      <p class="">
        ¡Hey!, agradezco que te detienes a conocerme.
      </p>
      <p class="">
        Soy diseñador por formación y creativo por devoción. Un apasionado por el diseño y el movimiento, las ciencias
        humanistas, la formación constante y compartir mi saber.
      </p>
      <p class="">
        Creo en el diseño colaborativo con perspectiva simbiótica enfocada en proponer soluciones a problemas de interés
        colectivo.
      </p>
    </div>

    <img alt="Fran Foto" class="w-full py-16 md:py-28 col-span-6 md:col-span-2 row-start-1 col-start-2 md:col-start-6 row-span-3 "
         src="../assets/img/homepage/fran-foto.png"/>
    <img alt="About me" class="absolute col-span-2 row-start-1 col-end-9 right-0 top-0" src="../assets/img/homepage/about-me.svg"/>
  </div>
</template>
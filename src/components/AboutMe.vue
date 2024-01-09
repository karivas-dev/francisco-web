<script setup>
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="px-12 my-20 grid grid-cols-8 place-content-center relative">
    <div class="absolute top-0 left-1/2 -z-10">
      <img alt="" width="" class="animate-random-circle" src="../assets/img/homepage/gradientecirc.svg">
    </div>

    <div class="col-span-3 row-start-1">
      <img alt="r logo" class=" mb-10" src="../assets/img/homepage/greeting-fran.png"/>
    </div>

    <div class="col-start-2 col-span-3 space-y-6 row-start-3">
      <p class="col-start-2 col-span-3">
        ¡Hey!, agradezco que te detienes a conocerme.
      </p>
      <p class="col-start-2 col-span-3">
        Soy diseñador por formación y creativo por devoción. Un apasionado por el diseño y el movimiento, las ciencias
        humanistas, la formación constante y compartir mi saber.
      </p>
      <p class="col-start-2 col-span-3">
        Creo en el diseño colaborativo con perspectiva simbiótica enfocada en proponer soluciones a problemas de interés
        colectivo.</p>
    </div>

    <img alt="r logo" class="w-full py-28 col-span-2 row-start-1 col-start-6 row-span-3 "
         src="../assets/img/homepage/fran-foto.png"/>

    <img alt="About me" class="absolute w-56 row-start-1  right-0 top-0" src="../assets/img/homepage/about-me.svg"/>
    <div class="relative row-start-5">
      <Button>Mi trabajo</Button>
    </div>

    <div class="col-span-3 row-start-4 mt-10">
      El diseño flexible
    </div>

    <div class="col-span-3 row-start-5">
    </div>
  </div>
</template>
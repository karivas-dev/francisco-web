<script setup>

import Button from "@/components/Button.vue";
</script>

<template>
  <div class="px-8 h-screen grid grid-cols-6 place-content-center">
    <div class="absolute top-0 left-1/2 -z-10">
      <img alt="" width="" class="animate-random-circle" src="../assets/img/homepage/gradientecirc.svg">
    </div>

    <div class="col-span-3">
      <img alt="r logo" class=" mb-10" src="../assets/img/homepage/greeting-fran.png"/>
      <p class="ml-28 mb-6">
        ¡Hey!, agradezco que te detienes a conocerme.
      </p>
      <p class="ml-28">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna mauris, rhoncus nec molestie nec, egestas
        a nulla. Fusce scelerisque vitae diam in blandit. Aliquam arcu nisi, laoreet nec tempor id, tempus vel lacus.
        Duis tempor sem quis dolor suscipit elementum.
      </p>
    </div>

    <div class="col-span-2 relative">
      <img alt="r logo" class="w-full px-28 py-28" src="../assets/img/homepage/fran-foto.png"/>
      <img alt="About me" class="absolute w-56 right-0 top-0" src="../assets/img/homepage/about-me.svg"/>
    </div>

    <div class="col-span-3 mt-10">
      El diseño flexible
    </div>

    <div class="col-span-3">
      <Button>Mi trabajo</Button>
    </div>
  </div>
</template>
<script setup>
import OpeningTitle from '@/components/OpeningTitle.vue';
</script>

<template>
  <div class="max-w-1920 mx-auto">
    <video autoplay loop muted width="100%">
      <source src="@/assets/videos/mestizo.mp4" type="video/mp4"/>
      Parece ser que hay problemas con el navegador
    </video>
  </div>

  <OpeningTitle>
    <template #title>
      <img alt="Titulo" src="@/assets/img/mestizo/title.png" width="100%"/>
    </template>
    <template #description>
      Diseño de marca, motion graphics
    </template>
  </OpeningTitle>

  <div class="max-w-1920 mx-auto grid grid-cols-8">
    <p class="col-start-2 col-span-3">
      Mestizo exprés nace de la expresión propia del origen del café Pacamara, que es el mestizaje entre dos clases de
      café. De esta idea nace la propuesta de una marca de bebidas enlatadas para degustar del café.
    </p>
    <p class="col-span-3">
      Las combinaciones de las bebidas surgen a su vez de la misma idea del nombre de la marca siendo un mestizaje de
      sabores. La selección de nombres y descriptivos de cada bebida se desarrolló considerando el tipo de público y
      el enfoque de la marca.
    </p>
    <img alt="Titulo" class="col-span-8" src="@/assets/img/mestizo/cans.png" width="100%"/>

    <img alt="Titulo" class="col-span-4" src="@/assets/img/mestizo/tag.svg" width="100%"/>
    <img alt="Titulo" class="col-span-3" src="@/assets/img/mestizo/hands-photo.png" width="100%"/>
    <img alt="Titulo" class="col-span-1" src="@/assets/img/mestizo/gradient.png" width="100%"/>

    <img alt="Estrella" class="col-start-2 pr-12 col-span-2" src="@/assets/img/mestizo/item1.svg" width="100%"/>
    <img alt="Black Morning" class="col-span-3 col-end-8 my-auto" src="@/assets/img/mestizo/item2.svg" width="100%"/>

    <div class="col-start-2 col-span-6 my-12">
      <video autoplay loop muted width="100%">
        <source src="@/assets/videos/story-mestizo.mp4" type="video/mp4"/>
        Parece ser que hay problemas con el navegador
      </video>
    </div>
  </div>
</template>
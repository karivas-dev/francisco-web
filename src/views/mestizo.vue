<script setup>
import OpeningTitle from '@/components/OpeningTitle.vue';
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="max-w-1920 pt-[67px] mx-auto">
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
    <div class="bg-[#262626] col-end-9 md:col-end-9 col-span-7 md:col-span-5 relative mb-24">
      <img src="@/assets/img/mestizo/coffee-plant.png" class="absolute w-1/4 bottom-1/2 left-0 -translate-x-1/2 translate-y-1/2  " alt="">
      <p class="w-2/3 md:w-1/3 text-white mx-auto py-6 md:py-10">
        Para el diseño de los elementos gráficos se tomó en cuenta características propias de cada bebida, otorgándole
        elementos identitarios a cada una, y estos varían desde su color hasta la iconografía utilizada.
      </p>
    </div>

    <p class="col-start-2 col-span-6 md:col-start-2 md:col-span-3 px-5">
      Mestizo exprés nace de la expresión propia del origen del café Pacamara, que es el mestizaje entre dos clases de
      café. De esta idea nace la propuesta de una marca de bebidas enlatadas para degustar del café.
    </p>
    <p class="col-start-2 col-span-6 mt-6 md:col-span-3 px-5">
      Las combinaciones de las bebidas surgen a su vez de la misma idea del nombre de la marca siendo un mestizaje de
      sabores. La selección de nombres y descriptivos de cada bebida se desarrolló considerando el tipo de público y
      el enfoque de la marca.
    </p>
    <img alt="Latas" class="col-span-8 my-10 md:my-16" src="@/assets/img/mestizo/cans.png" width="100%"/>

    <p class="col-start-2 col-span-6 md:col-start-3 md:col-span-4 mt-4 mb-16">Para el diseño de los elementos gráficos se
      tomó en cuenta características propias de cada bebida, otorgándole
      elementos identitarios a cada una, y estos varían desde su color hasta la iconografía utilizada.</p>

    <img alt="Tag" class="col-span-4" src="@/assets/img/mestizo/tag.svg" width="100%"/>
    <img alt="Lata foto" class="col-span-3 row-span-1" src="@/assets/img/mestizo/hands-photo.png" width="100%"/>
    <img alt="Gradient" class="col-span-1 h-full" src="@/assets/img/mestizo/gradient.png" width="100%"/>

    <img alt="Estrella" class="col-start-2 pr-12 col-span-2 my-10 md:my-20" src="@/assets/img/mestizo/item1.svg" width="100%"/>
    <img alt="Black Morning" class="col-span-3 col-end-8 my-auto" src="@/assets/img/mestizo/item2.svg" width="100%"/>

    <div class="col-start-2 col-span-6 mb-16 md:y-12">
      <video autoplay loop muted width="100%">
        <source src="@/assets/videos/story-mestizo.mp4" type="video/mp4"/>
        Parece ser que hay problemas con el navegador
      </video>
    </div>
  </div>
  <Footer/>
</template>
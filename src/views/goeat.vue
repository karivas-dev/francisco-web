<script setup>
import OpeningTitle from '@/components/OpeningTitle.vue';
import Footer from "@/components/Footer.vue";
</script>

<template>
  <img alt="Banner Go eat" class="max-w-1920 mx-auto" src="../assets/img/goeat/banner-goeat.png" width="100%"/>

  <OpeningTitle>
    <template #title>
      <img alt="Titulo" src="@/assets/img/goeat/title.png" width="100%"/>
    </template>

    <template #description>
      Motion design
    </template>
  </OpeningTitle>

  <div class="grid md:grid-cols-8 md:my-16 max-w-1920 mx-auto">

    <div class="bg-[#272727] py-6 md:py-0 col-start-2 col-span-3 text-white flex items-center">
      <p class="px-6">Go eat, una marca en el servicio de delivery, buscaba posicionarse en
        el área metropolitana de San Salvador,
        para ello se generó una campaña digital para anunciar la llegada de la marca. Teniendo la oportunidad de mi
        parte trabajar, de manera colaborativa, en el proceso de conceptualización así como el desarrollo del motion
        design de las piezas.
      </p>
    </div>

    <img alt="Anuncio Go eat" class="col-span-3" src="../assets/img/goeat/anuncio.png" width="100%"/>
  </div>

  <div class="bg-[#262626] mt-12 md:mt-0 py-12 md:py-20">
    <div class="grid grid-cols-8 gap-2 md:gap-8 max-w-1920 mx-auto">

      <p class="col-span-8 font-agrandir font-black text-2xl md:text-5xl mb-6 font-ultraexpanded text-white text-center">
        Adaptaciones</p>

      <video autoplay class="col-start-2 col-span-2" loop muted width="100%">
        <source src="../assets/videos/phone-goeat.mp4" type="video/mp4"/>
        Parece ser que hay problemas con el navegador
      </video>

      <img alt="Anuncio story Go eat" class="col-span-2" src="../assets/img/goeat/phone-story.png" width="100%"/>
      <img alt="Anuncio story Go eat" class="col-span-2" src="../assets/img/goeat/phone-welcome.png" width="100%"/>

      <video autoplay class="col-start-2 col-span-6" loop muted width="100%">
        <source src="../assets/videos/opening-goeat.mp4" type="video/mp4"/>
        Parece ser que hay problemas con el navegador
      </video>

      <img alt="Anuncio Go eat" class="col-start-2 col-span-6 md:col-span-4 my-auto" src="../assets/img/goeat/anuncio-banner.png"
           width="100%"/>
      <img alt="Anuncio Go eat" class="col-start-2 col-span-6 md:col-span-2 md:pl-6" src="../assets/img/goeat/anuncio1.png" width="100%"/>
    </div>
  </div>

  <div class="bg-white py-6">
    <img alt="Proceso Go eat" class="max-w-1920 mx-auto" src="../assets/img/goeat/process.png" width="100%"/>
  </div>

  <div class="py-12 text-center">
    <p class="font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
    <p>Dirección creativa_Andrea Sánchez</p>
    <p>Diseño gráfico_Andrea Sánchez - <span class="font-semibold">Francisco Rivas</span></p>
    <p>Motion design_<span class="font-semibold">Francisco Rivas</span></p>
    <p>GPB</p>
  </div>
  <Footer/>
</template>
<script setup>
import Footer from "@/components/Footer.vue";
import OpeningTitle from "@/components/OpeningTitle.vue";
import Title from "@/components/Title.vue";
</script>

<template>

  <video autoplay loop muted width="100%">
    <source src="../assets/videos/banner-milhistorias.mp4" type="video/mp4"/>
    Parece ser que hay problemas con el navegador
  </video>

  <OpeningTitle>
    <template #title>
      <img alt="Titulo" src="@/assets/img/milhistorias/title.png" width="100%"/>
    </template>

    <template #description>
      Producción multimedia, motion design
    </template>
  </OpeningTitle>

  <div class="grid grid-cols-8 max-w-1920 mx-auto gap-4">
    <p class="col-start-2 md:col-start-2 col-span-6 my-auto md:col-span-3">
      1 Escuela mil historias es un proyecto ejecutado en el departamento de Morazán y desarrollado por la organización
      Contextos, una ONG que trabaja para el desarrollo de la infancia por medio de la literacidad. Al cabo de este,
      tuve la oportunidad de producir un registro audiovisual que reflejara los alcances en beneficio de la infancia
      local. Para ello se realizó un registro fotográfico, así como una producción audiovisual para obtener de las voces
      beneficiadas dichos alcances.
      <br> <br>
      Dentro del desarrollo gráfico del proyecto se incluyó el diseño gráfico del producto audiovisual, así como toda la
      pre-producción, producción y postproducción del producto audiovisual. Se consideró la voz de marca de la
      organización, así como los lineamientos de comunicación sobre infancia.
    </p>

    <img alt="Foto 1" class="col-span-4 md:col-span-3 col-start-3 mt-6 md:my-auto" src="@/assets/img/milhistorias/phone1.png" width="100%"/>

    <video autoplay loop controls muted class="col-span-6 md:col-span-5 col-start-2 md:col-end-8 my-8 md:my-20" width="100%">
      <source src="../assets/videos/video-milhistorias.mp4" type="video/mp4" />
      Parece ser que hay problemas con el navegador
    </video>

    <img alt="Foto 2" class="col-start-2 col-span-4 my-auto" src="@/assets/img/milhistorias/foto2.png" width="100%"/>
    <img alt="Foto 3" class="col-span-2 my-auto" src="@/assets/img/milhistorias/foto3.png" width="100%"/>

    <div class="col-span-8 mt-10">
      <Title>Plecas</Title>
    </div>

    <img alt="Pleca 1" class="col-start-2 col-span-2 my-10" src="@/assets/img/milhistorias/pleca1.png" width="100%"/>
    <img alt="Pleca 2" class="col-span-2 my-10" src="@/assets/img/milhistorias/pleca2.png" width="100%"/>
    <img alt="Pleca 3" class="col-span-2 my-10" src="@/assets/img/milhistorias/pleca3.png" width="100%"/>
  </div>

  <div class="bg-white py-16">
    <Title>Proceso</Title>
    <img alt="Proceso" class="max-w-1920 w-full mx-auto mt-8" src="@/assets/img/milhistorias/process.png">
  </div>

  <div class="py-12 text-center">
    <p class="font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
    <p>Guión_Daniela Raffo</p>
    <p>Diseño gráfico_<span class="font-semibold">Francisco Rivas</span></p>
    <p>Fotografía_Adaly Fuentes - <span class="font-semibold">Francisco Rivas</span></p>
    <p>Etalonaje_Otoniel López</p>
    <p>Motion graphics_Adaly Fuentes - Otoniel López - <span class="font-semibold">Francisco Rivas</span></p>
    <p>Post producción_Adaly Fuentes - <span class="font-semibold">Francisco Rivas</span></p>
  </div>
  <Footer/>
</template>

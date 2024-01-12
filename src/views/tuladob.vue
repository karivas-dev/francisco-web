<script setup>
import OpeningTitle from "@/components/OpeningTitle.vue";
import Title from "@/components/Title.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="bg-[#262626] pt-[67px]">
    <div class="max-w-1920 mx-auto">
      <video autoplay controls loop muted width="100%">
        <source src="@/assets/videos/tuladob-cortinas.mp4" type="video/mp4"/>
        Parece ser que hay problemas con el navegador
      </video>
    </div>
  </div>

  <OpeningTitle>
    <template #title>
      <img alt="Titulo" src="@/assets/img/tuladob/title.png" width="100%"/>
    </template>
    <template #description>
      Diseño gráfico, Motion graphics
    </template>
  </OpeningTitle>

  <div class="max-w-1920 mx-auto grid grid-cols-8 gap-2 pb-12">
    <p class="row-start-1 col-start-2 md:col-start-2 col-span-6 md:col-span-3">
      Tu Lado B podcast es un espacio con un enfoque diferente para poder conocer más sobre temas relacionados al mundo
      del marketing digital, así como actores del rubro que permiten encontrar una mejor versión.
    </p>
    <p class="row-start-2 col-start-2 md:col-start-5 col-span-6 md:col-span-3">
      Junto al equipo multidisciplinario de Grupo Plan B generamos una propuesta de refrescamiento de los elementos
      gráficos del podcast, así mismo se desarrolló un refrescamiento visual y contenido de sus redes sociales. El
      diseño gráfico del podcast implicó el desarrollo de plecas, cortinas, y demás elementos requeridos.
    </p>
    <img alt="Banner" class="col-span-6 col-start-2 border py-4 mt-10 md:mt-20" src="@/assets/img/tuladob/plecas.png"/>
    <img alt="Mockup pantalla" class="col-span-6 md:col-span-3 col-start-2 md:col-start-2 mt-6" src="@/assets/img/tuladob/pantalla1.png"/>
    <img alt="Mockup pantalla" class="col-span-6 md:col-span-3 col-start-2 md:col-start-5 mt-6" src="@/assets/img/tuladob/pantalla2.png"/>
  </div>

  <div class="bg-white py-12">
    <div class="max-w-1920 mx-auto grid grid-cols-8 gap-2">
      <video autoplay class="col-start-2 col-span-6" controls loop muted width="100%">
        <source src="@/assets/videos/tuladob-temp4.mp4" type="video/mp4"/>
        Parece ser que hay problemas con el navegador
      </video>

      <p class="mt-4 mb-12 col-start-2 col-span-6">
        Video de expectación para redes sociales como parte de la comunicación para el inicio de temporada y transición
        al refrescamiento de línea gráfica del podcast.
      </p>

      <video autoplay class="col-start-2 col-span-6" controls loop muted width="100%">
        <source src="@/assets/videos/tuladob-cortinas.mp4" type="video/mp4"/>
        Parece ser que hay problemas con el navegador
      </video>

      <p class="col-start-2 col-span-6 mt-4">Mood visual y de animación de plecas y cortinas, así como animación de
        backing de pantallas secundarias en
        estudio como parte de los elementos gráficos</p>
    </div>
  </div>

  <div class="max-w-1920 mx-auto grid grid-cols-8 gap-2 md:gap-6 pt-12">
    <div class="col-span-8 mb-6">
      <Title>Proceso</Title>
    </div>
    <img alt="Proceso" class="col-start-2 lg:col-start-2 col-span-6 lg:col-span-4" src="@/assets/img/tuladob/proceso.png"/>
    <p class="col-start-2 col-span-6 lg:col-span-2 lg:col-start-2 my-5 lg:my-auto">La conceptualización visual del contenido se enfocó en mantener la limpieza de los
      elementos gráficos, el uso del característico naranja perteneciente a la marca, a su vez se propuso una desaturación del negro puro. Las ondas
      circulares en expansión forman parte de los elementos gráficos propuestos.
    </p>

    <img alt="Proceso" class="col-start-2 col-span-6 lg:col-span-4 lg:col-start-4 mt-2" src="@/assets/img/tuladob/proceso1.png"/>

    <div class="col-span-8 py-12 text-center">
      <p class="font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
      <p>Project Manager_Fátima Molina</p>
      <p>Contenido_Lidia Echaegoyen, Paola Ortíz</p>
      <p>Dirección creativa_Andrea Sánchez</p>
      <p>Diseño gráfico - Motion graphics_<span class="font-semibold">Francisco Rivas</span></p>
      <p>GPB</p>
    </div>
  </div>
  <Footer/>
</template>

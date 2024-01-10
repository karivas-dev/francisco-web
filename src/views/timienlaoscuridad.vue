<script setup>
import Title from "@/components/Title.vue"
import OpeningTitle from "@/components/OpeningTitle.vue"
import Footer from "@/components/Footer.vue";
</script>

<template>
  <img alt="Timi banner" width="100%" class="mb-24" src="../assets/img/timienlaoscuridad/banner-timi.png" />

  <OpeningTitle>
    <template #title>
      <img alt="Titulo" width="100%" src="@/assets/img/timienlaoscuridad/title.png" />
    </template>
    <template #description>
      Diseño de personaje, Diseño editorial
    </template>
  </OpeningTitle>

  <div class="max-w-1920 mx-auto">
    <div class="grid grid-cols-2 gap-x-8 my-20 mx-32">
      <p class="col-span-1">
        Timi en la oscuridad es un cuento infantil para un público a partir de los 5 años, con lectura acompañada. El cúal
        está enfocado en el manejo de las emociones. Dicho proyecto me permitió el diseño de los personajes de este
        cuento, así como el mundo que rodea a Timi.
      </p>

      <p class="col-span-1">
        Al tratarse de un cuento infantil sobre emociones, se desarrolló junto a la autora el estilo gráfico y la
        representación de las emociones de los personajes, esto por medio de la asignación de colores como lo representa
        el libro, y las expresiones faciales de Timi.
      </p>
    </div>

    <div class="grid grid-cols-5">
      <img alt="Timi feliz" class="w-full col-start-2 place-self-end"
        src="../assets/img/timienlaoscuridad/felicidad.jpg" />
      <img alt="Timi confundido" class="w-full place-self-end" src="../assets/img/timienlaoscuridad/confusion.jpg" />
      <img alt="Timi enojado" class="w-full place-self-end" src="../assets/img/timienlaoscuridad/enojo.jpg" />
    </div>
  </div>

  <img alt="Paisaje banner" class="w-full my-20" src="../assets/img/timienlaoscuridad/banner-landscape.png" />
  <img alt="Portada del libro" class="w-full my-20" src="../assets/img/timienlaoscuridad/banner-book.png" />

  <div class="max-w-1920 mx-auto">
    <div class="grid grid-cols-4 mx-32">
      <p class="col-span-2 my-auto mr-20">
        Dada la naturaleza del libro, se trabajó un enfoque donde dominara la ilustración, aportando mucho color y
        considerando los descansos visuales a lo largo de la lectura.
      </p>

      <img alt="Familia de Timi" class="col-span-2 w-full" src="../assets/img/timienlaoscuridad/family.png" />
      <img alt="Book spread 1" class="col-span-2 w-full mt-20" src="../assets/img/timienlaoscuridad/spread-01.png" />
      <img alt="Book spread 2" class="col-span-2 w-full mt-20" src="../assets/img/timienlaoscuridad/spread-02.png" />

      <Title>Procesos</Title>

      <p class="col-span-2 ml-20 my-20">Parte de la bocetería como ideas iniciales para la búsqueda de los personajes, así
        como la escena del paisaje
        dónde vive Timi.</p>
    </div>
  </div>

  <div class="bg-white py-12">
    <img alt="Procesos Timi" class="w-full max-w-1920 mx-auto" src="../assets/img/timienlaoscuridad/proceso-timi.png" />
  </div>

  <img alt="Timi miedo" class="flex mx-auto w-1/4 my-12" src="../assets/img/timienlaoscuridad/miedo.png" />

  <div class="my-12">
    <p class="text-center font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
    <p class="text-center">Cuento_Guadalupe Zaghini</p>
    <p class="text-center">Ilustraciones y editorial_Francisco Rivas</p>
  </div>
  <Footer/>
</template>

<script setup>
import OpeningTitle from "@/components/OpeningTitle.vue";
import Footer from "@/components/footer.vue";
</script>

<template>
  <img alt="Banner 11va Entrega" class="max-w-1920 mx-auto" src="../assets/img/11va/banner.png" width="100%"/>

  <OpeningTitle>
    <template #title>
      <img alt="Titulo" src="@/assets/img/11va/title.png" width="100%"/>
    </template>
    <template #description>
      Diseño de marca, Motion design
    </template>
  </OpeningTitle>

  <div class="grid grid-cols-8 max-w-1920 mx-auto">
    <p class="col-start-2 col-span-3 row-start-1">ARIES EGC es la organización encargada de velar por el cumplimiento de
      los
      derechos de autor de cantautores y artistas del rubro de la música en El Salvador. Cada año se realiza un evento
      para hacer entrega de las regalías a sus socios. Para la edición número once colaboré en el desarrollo de una
      propuesta gráfica para dicha entrega, donde, a su vez, trabajé la animación de contenido visual para el
      evento.</p>
    <p class="col-span-3 col-start-5 row-start-2">La construcción del isologo está constituido por tres elementos
      formando la marca,
      por un lado el imagotipo, además, la expresión escrita del evento. Dado que este es desarrollado por la
      organización ARES EGC. Se tomó a bien integrar un elemento representativo de su marca. Para el desarrollo de la
      propuesta se trabajó el tagline, el cúal representa la acción del evento, que es la entrega de regalías económicas
      a los artistas asociados.
    </p>

    <img alt="Logo" class="col-span-4 col-start-3 row-start-3 mt-20" src="../assets/img/11va/logo.png" width="100%"/>

    <div class="col-span-6 col-start-2">
      <video autoplay class="my-20" controls loop muted width="100%">
        <source src="../assets/videos/entrega-logos.mp4" type="video/mp4"/>
        Parece ser que hay problemas con el navegador
      </video>
    </div>

    <p class="col-start-2 col-span-3 row-start-5">Entre los alcances de este proyecto incluía el diseño de una marca
      gráfica para anunciar el evento, diseño de
      invitaciones digitales para los asistentes, así como la animación de pantallas que serían incluidas en dicho
      evento</p>
    <img alt="Invitación 11va Entrega" class="col-start-2 row-start-6 col-span-3 place-self-end"
         src="../assets/img/11va/invitacion.png"
         width="100%"/>
    <img alt="Mockup en celular" class="col-end-8 col-span-2 row-start-5 row-span-2"
         src="@/assets/img/11va/phone-mockup.png">
  </div>

  <div class="bg-[#262626] my-20">
    <div class="grid grid-cols-8 max-w-1920 mx-auto">
      <video autoplay class="my-8 col-span-6 col-start-2" controls loop muted width="100%">
        <source src="../assets/videos/entrega-process.mp4" type="video/mp4"/>
        Parece ser que hay problemas con el navegador
      </video>
    </div>
  </div>

  <div class="pb-12 text-center">
    <p class="font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
    <p>Textos_Carol Hills</p>
    <p>Diseño de gráfico y Motion Design_<span class="font-semibold">Francisco Rivas</span></p>
  </div>
  <Footer/>
</template>

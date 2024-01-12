<script setup>

import Button from "@/components/Button.vue";
</script>

<template>
  <div class="mx-8 md:mx-28">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 mt-16 md:mt-20">
      <Button>Mi trabajo</Button>
      <Button>Reel 2024</Button>
      <Button>Portafolio</Button>
    </div>

    <div class="grid grid-cols-6 mt-16">
      <p class="col-span-6 md:col-span-4">
        Mi trabajo es un esfuerzo de una constante por el diseño, un reflejo de la apertura por encontrar la receta
        creativa que mejor se adapta a las distintas problemáticas visuales, es un placer colaborar en cada proyecto que
        se presenta y es de sumo agrado hacerlo desde el Diseño flexible.
      </p>
    </div>

    <div class="grid grid-cols-8 mt-8 pb-20 gap-y-4">
      <div class="row-start-1 col-span-8 md:col-span-4 space-y-5 mt-10">
          <p
              class="font-agrandir w-fit ml-auto text-xl text-right px-4 pl-32 py-2.5 font-black italic font-ultraexpanded border border-[#333] rounded-full">
            Degustar</p>

        <p class="text-right">"Una fracción de un todo. Un pequeño acercamiento al paladar visual
          y atreverse a querer más"
        </p>
      </div>

      <div class="row-start-2 col-start-4 md:col-start-5 col-span-4 space-y-4">
        <router-link :to="{name: '36 Days of Type'}" class="block">
          36 Days of type
        </router-link>
        <router-link :to="{ name: 'Timi en la Oscuridad'}" class="block">
          Timi en la oscuridad
        </router-link>
      </div>

      <div class="row-start-3 col-span-8 md:col-span-4 md:col-start-5 space-y-5 mt-10">
        <p class="font-agrandir text-xl px-4 block w-fit pr-20 md:pr-32 py-2.5 font-black font-ultraexpanded italic border border-[#333] rounded-full">
          Plato principal</p>
        <p>"La esencia de una diversidad presentada en un plato lleno de entrega y dedicación en cada ración"</p>
      </div>

      <div class="row-start-4 col-start-4 md:col-start-5 col-span-4 space-y-5">
        <router-link :to="{ name: 'Al tazón'}" class="block text-left">
          Al Tazón
        </router-link>
        <router-link :to="{ name: 'Ancestral'}" class="block">
          Ancestral
        </router-link>
        <router-link :to="{ name: 'Web GPB'}" class="block">
          Web GPB
        </router-link>
        <router-link :to="{ name: 'Preparados'}" class="block">
          Preparados
        </router-link>
        <router-link :to="{ name: '1 Escuela mil historias'}" class="block">
          Mil historias
        </router-link>
      </div>

      <div class="row-start-5 col-span-8 md:col-span-4 space-y-5 justify-self-end mt-10">
        <p
            class="font-agrandir ml-auto w-fit text-xl text-right px-4 pl-32 py-2.5 font-black font-ultraexpanded italic border border-[#333] rounded-full">
          Sobremesa</p>
        <p class="text-right">"Al momento en que somos conscientes de cuán relevante es nuestra oportunidad de amar, en
          ese momento somos más capaces de creer"
        </p>
      </div>

      <div class="row-start-6 col-start-4 md:col-start-5 col-span-4 space-y-4">
        <router-link :to="{ name: 'Mestizo'}" class="block">
          Mestizo
        </router-link>
        <router-link :to="{ name: 'Go eat'}" class="block">
          Go eat
        </router-link>
        <router-link :to="{ name: '11va Entrega'}" class="block">
          11va entrega
        </router-link>
        <router-link :to="{ name: 'Tu lado B'}" class="block">
          Tu lado B Podcast
        </router-link>
      </div>
    </div>
  </div>
</template>

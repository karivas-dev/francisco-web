<script setup>

import Button from "@/components/Button.vue";
</script>

<template>
  <div class="mx-28">
    <div class="grid grid-cols-3 gap-5 mt-20">
      <Button>Mi trabajo</Button>
      <Button>Reel 2024</Button>
      <Button>Portafolio</Button>
    </div>

    <div class="grid grid-cols-6 mt-16">
      <p class="col-span-4">
        Mi trabajo es un esfuerzo de una constante por el diseño, un reflejo de la apertura por encontrar la receta
        creativa que mejor se adapta a las distintas problemáticas visuales, es un placer colaborar en cada proyecto que
        se presenta y es de sumo agrado hacerlo desde el Diseño flexible.
      </p>
    </div>

    <div class="grid grid-cols-8 mt-8 pb-16 gap-y-4">
      <div class="row-start-1 col-span-4 space-y-5 mt-10">
        <div class="flex justify-end">
          <span
              class="font-agrandir text-xl text-right px-4 pl-32 py-2.5 font-black italic font-ultraexpanded border border-[#333] rounded-full">Degustar</span>
        </div>

        <p class="text-right">"Una fracción de un todo. Un pequeño acercamiento al paladar visual
          y atreverse a querer más"
        </p>
      </div>

      <div class="row-start-2 col-start-5 col-span-4 space-y-4">
        <router-link class="block" :to="{name: '36 Days of Type'}">
          36 Days of type
        </router-link>
        <router-link class="block" :to="{ name: 'Timi en la Oscuridad'}">
          Timi en la oscuridad
        </router-link>
      </div>

      <div class="row-start-3 col-span-4 col-start-5 space-y-5 mt-10">
        <span
            class="font-agrandir text-xl px-4 pr-32 py-2.5 font-black font-ultraexpanded italic border border-[#333] rounded-full">Plato principal</span>
        <p>"Una fracción de un todo. Un pequeño acercamiento al paladar visual y atreverse a querer más"</p>
      </div>

      <div class="row-start-4 col-start-5 col-span-4 space-y-5">
        <router-link class="block text-left" :to="{ name: 'Al tazón'}">
          Al Tazón
        </router-link>
        <router-link class="block" :to="{ name: 'Ancestral'}">
          Ancestral
        </router-link>
        <router-link class="block" :to="{ name: 'Web Grupo Plan B'}">
          Web GPB
        </router-link>
        <router-link class="block" :to="{ name: 'Preparados'}">
          Preparado
        </router-link>
        <router-link class="block" :to="{ name: '1 Escuela mil historias'}">
          Mil historias
        </router-link>
      </div>

      <div class="row-start-5 col-span-4 space-y-5 justify-self-end mt-10">
        <div class="flex justify-end">
          <span
              class="font-agrandir text-xl text-right px-4 pl-32 py-2.5 font-black font-ultraexpanded italic border border-[#333] rounded-full">Sobremesa</span>
        </div>
        <p class="text-right">"Al momento en que somos conscientes de cuán relevante es nuestra oportunidad de amar, en
          ese momento somos más capaces de creer"
        </p>
      </div>

      <div class="row-start-6 col-start-5 col-span-4 space-y-4">
        <router-link class="block" :to="{ name: 'Mestizo'}">
          Mestizo
        </router-link>
        <router-link class="block" :to="{ name: 'Go eat'}">
          Go eat
        </router-link>
        <router-link class="block" :to="{ name: '11va Entrega'}">
          11va entrega
        </router-link>
        <router-link class="block" :to="{ name: 'Tu lado B'}">
          Tu lado B Podcast
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<template>
  <div class="mx-28">
    <p>
      Mi trabajo
    </p>
    <div class="grid grid-cols-4">
      <p class="col-span-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna mauris, rhoncus nec molestie nec, egestas
        a nulla. Fusce scelerisque vitae diam in blandit. Aliquam arcu nisi, laoreet nec tempor id, tempus vel lacus.
        Duis tempor sem quis dolor suscipit elementum.
      </p>
    </div>

    <div class="grid grid-cols-2">
      <div class="col-span-1 text-right">
        <button class="font-agrandir text-xl w-1/2 text-right px-4 py-2.5 mt-16 mb-5 font-black font-ultraexpanded border border-[#333] rounded-full">
          Plato principal
        </button>

        <p>"Una fracción de un todo. Un pequeño acercamiento al paladar visual y atreverse a más"</p>
      </div>

      <div class="col-span-1 ">
        <router-link to="/proyectos/36daysoftype">
          <p>
            36 Days of type
          </p>
        </router-link>
        <router-link to="/proyectos/Timi-en-la-oscuridad">
          Timi en la oscuridad
        </router-link>
      </div>
    </div>
    <router-link to="/proyectos/Ancestral">
      Ancestral
    </router-link>
    <router-link to="/proyectos/Web-gpb">
      Web Gpb
    </router-link>
    <router-link to="/proyectos/Preparados">
      Preparado
    </router-link>
    <router-link to="/proyectos/Mestizo">
      Mestizo
    </router-link>
  </div>
</template>

<style scoped>

</style>
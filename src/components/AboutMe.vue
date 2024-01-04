<script setup>

</script>

<template>
  <div class="px-10 w-full h-[calc(100vh-80)] grid grid-cols-6 relative">
    <div class="absolute top-0 left-50 -z-10">
      <img alt="" class="animate-random-circle w-full" src="../assets/img/gradientecirc.svg">
    </div>

    <div class="col-span-3">
      <img alt="r logo" class="w-3/4 mb-10" src="../assets/img/greeting-fran.png"/>
      <p class="ml-28 mb-6">
        ¡Hey!, agradezco que te detienes a conocerme.
      </p>
      <p class="ml-28">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna mauris, rhoncus nec molestie nec, egestas
        a nulla. Fusce scelerisque vitae diam in blandit. Aliquam arcu nisi, laoreet nec tempor id, tempus vel lacus.
        Duis tempor sem quis dolor suscipit elementum.
      </p>
    </div>

    <div class="col-span-3">
      <img alt="r logo" class="w-full px-28" src="../assets/img/fran-foto.png"/>
    </div>

    <div class="col-span-3 mt-10">
      El diseño flexible
    </div>

    <div class="col-span-3 mt-10 mx-28">
      <button class="font-agrandir text-3xl font-thin font-ultracondensed italic
      border border-[#333] rounded-full w-full py-2 hover:bg-[#f7bf33]">
        Mi trabajo
      </button>
    </div>
  </div>
</template>
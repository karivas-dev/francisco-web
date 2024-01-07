<script setup>
import OpeningTitle from '@/components/OpeningTitle.vue';
</script>
<template>
    <img alt="Banner Go eat" width="100%" class="max-w-1920 mx-auto" src="../assets/img/goeat/banner-goeat.png" />

    <div class="grid grid-cols-8">
        <div class="col-span-6 col-start-2">
            <OpeningTitle>
                <template #title>
                    <img alt="Titulo" width="100%" src="@/assets/img/goeat/title.png" />
                </template>

                <template #description>
                    Motion design
                </template>
            </OpeningTitle>
        </div>

        <div class="col-start-2 col-span-3 bg-[#272727] text-white">  
            <p class="my-auto">Go eat, una marca en el servicio de delivery, buscaba posicionarse en
                el área metropolitana de San Salvador,
                para ello se generó una campaña digital para anunciar la llegada de la marca. Teniendo la oportunidad de mi
                parte trabajar, de manera colaborativa, en el proceso de conceptualización así como el desarrollo del motion
                design de las piezas.
            </p>
        </div>

        <img alt="Banner Go eat" width="100%" class="col-span-3" src="../assets/img/goeat/anuncio.png" />


    </div>


    <div>
        <img alt="Banner Go eat" width="100%" class="max-w-1920 mx-auto" src="../assets/img/goeat/process.png" />
    </div>
</template>
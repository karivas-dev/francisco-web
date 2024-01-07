<script setup>
import Title from "@/components/Title.vue"
</script>

<template>
    <div class="h-[calc(100vh-68px)] bg-[#1b191b] flex items-center">
        <video autoplay loop muted width="100%">
            <source src="@/assets/banner-daysoftype.mp4" type="video/mp4" />
            Parece ser que hay problemas con el navegador
        </video>
    </div>


    <div class="bg-[#1a1a1a] pt-5 mb-20">
        <div class="max-w-1920 mx-auto">
            <div class="grid grid-cols-2 gap-x-20 mx-20 mb-28">

                <img alt="36 Days of Type" class="col-span-2 mx-auto mb-28" src="@/assets/img/daysoftype/title-full.png" />

                <div class="col-span-1 my-auto">
                    <img alt="Subtítulo" class="w-full" src="@/assets/img/daysoftype/subtitle1.png" />
                    <p class="text-white mt-12">El interés por la experimentación nos permiten tomar retos propios, y es ese
                        interés el que me ha llevado de
                        manera constante a participar en el challenge #36DaysOfType que cada año se desarrolla entre los
                        meses de abril y mayo. Dicho reto consta en una convocatoria abierta que explora los límites
                        creativos de las formas de las letras, los participantes tienen un desafío y es de diseñar una letra
                        o un número cada
                        día durante 36 días consecutivos, como un acto global y simultáneo que muestra el resultado de la
                        capacidad de
                        representar los mismos símbolos.
                    </p>
                </div>

                <img alt="Letra a" class="w-full" src="@/assets/img/daysoftype/a-900.png" />
            </div>
        </div>

        <div class="h-[calc(100vh-68px)] bg-[#f2f2f2]">
            <img alt="Número 9" class="h-full mx-auto" src="../../public/img/36daysoftype/36.png" />
        </div>

        <div class="grid grid-cols-3 max-w-1920 mx-auto">
            <img alt="Banner 1" class="col-span-1" src="@/assets/img/daysoftype/CARRUSEL-01.png" />
            <img alt="Banner 2" class="col-span-1" src="@/assets/img/daysoftype/CARRUSEL-02.png" />
            <img alt="Banner 3" class="col-span-1" src="@/assets/img/daysoftype/CARRUSEL-03.png" />
            <img alt="Letra i" class="col-span-1" src="../../public/img/36daysoftype/9.png" />
            <img alt="Letra R" class="col-span-1" src="../../public/img/36daysoftype/18.png" />
            <img alt="Letra U" class="col-span-1" src="../../public/img/36daysoftype/21.png" />
        </div>
    </div>

    <div class="max-w-1920 mx-auto">
        <Title>Las 36</Title>
        <div class="my-16 mx-20 border border-[#222] p-5">
            <swiper-container slides-per-view="4" speed="500" loop="true" css-mode="true" autoplay-delay="2500"
                space-between="15" autoplay-disable-on-interaction="false" pagination="true" navigation="true">
                <swiper-slide v-for="n in 36">
                    <img alt="Banner 1" class="col-span-1" :src="`../public/img/36daysoftype/${n}.png`" />
                </swiper-slide>
            </swiper-container>
        </div>

        <div class="grid grid-cols-4 mx-40 gap-x-8 my-20">
            <img alt="Subtítulo" class="col-span-4 mx-auto" src="@/assets/img/daysoftype/subtitle2.png" />
            <p class="col-span-4 my-12 mx-auto">Este es un ejemplo de algunas formas básicas retomadas para la construcción
                de
                los cuerpos tipográficos. Antes de
                darle la forma o aspecto de tridimensionalidad, realicé una estructuración primitiva de la anatomía
                geométrica
                de cada letra.
            </p>
            <img alt="Letra U" class="col-span-1" src="@/assets/img/daysoftype/A1-8.png" />
            <img alt="Letra U" class="col-span-1" src="@/assets/img/daysoftype/A2-8.png" />
            <img alt="Letra U" class="col-span-1" src="@/assets/img/daysoftype/A3-8.png" />
            <img alt="Letra U" class="col-span-1" src="@/assets/img/daysoftype/A4-8.png" />
        </div>

        <div class="my-16 text-center">
            <p class="font-bold">Créditos<span class="text-[#fbb91c]">//</span></p>
            <p>Diseño gráfico_Francisco Rivas</p>
        </div>
    </div>
</template>

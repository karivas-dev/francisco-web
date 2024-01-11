<script setup>

</script>

<template>
    <div class="grid grid-cols-8 mt-16 md:mt-20 md:mb-12 max-w-1920 mx-auto">
        <img alt="Titulo" width="100%" class="rotate-180 my-auto col-start-2 hidden md:block" src="@/assets/img/adorno1.svg" />
        <div class="col-span-8 md:col-span-4 px-6 md:px-12">
            <slot name="title" />
        </div>
        <img alt="Titulo" width="100%" class="my-auto hidden md:block" src="@/assets/img/adorno1.svg" />

        <div class="col-span-8 text-center m-12">
            <p class="px-5 py-4 border border-[#] mx-auto rounded-full w-fit">
                <span class="font-bold">
                    Menú// Alcances:
                </span>
                <slot name="description"/>    
            </p>
        </div>
    </div>
</template>

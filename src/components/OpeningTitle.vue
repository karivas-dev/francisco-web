<script setup>

</script>

<template>
    <div class="grid grid-cols-8 m-20 mb-12 max-w-1920 mx-auto">
        <img alt="Titulo" width="100%" class="rotate-180 my-auto col-start-2" src="@/assets/img/adorno1.svg" />
        <div class="col-span-4 px-12">
            <slot name="title" />
        </div>
        <img alt="Titulo" width="100%" class="my-auto" src="@/assets/img/adorno1.svg" />

        <div class="col-span-8  text-center m-12">
            <span class="px-5 py-4 border border-[#] rounded-full w-full">
                <span class="font-bold">
                    Menú// Alcances:
                </span>
                <slot name="description"/>    
            </span>
        </div>
    </div>
</template>

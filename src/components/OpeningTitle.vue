<script setup>

</script>

<template>
    <div class="grid grid-cols-6 m-20 mb-12 max-w-1920 mx-auto px-8">
        <img alt="Titulo" width="100%" class="rotate-180 my-auto" src="@/assets/img/adorno1.svg" />
        <div class="col-span-4 mx-12">
            <slot name="title" />
        </div>
        <img alt="Titulo" width="100%" class="my-auto" src="@/assets/img/adorno1.svg" />

        <div class="col-span-4 col-start-2 text-center m-12">
            <span class="px-5 py-4 border border-[#] rounded-full w-full">
                <span class="font-bold">
                    Menú// Alcances:
                </span>
                <slot name="description"/>    
            </span>
        </div>
    </div>
</template>

<script setup>

</script>

<template>
    <div class="grid grid-cols-6 mx-20 content-center">
        <img alt="Titulo" width="100%" class="rotate-180 my-auto" src="@/assets/img/adorno1.svg" />
        <div class="col-span-4 mx-12">
            <slot />
        </div>
        <img alt="Titulo" width="100%" class="my-auto" src="@/assets/img/adorno1.svg" />
    </div>
</template>

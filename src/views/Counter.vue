<script setup>
import {DateTime, Duration} from "luxon";
import {computed, inject, onBeforeMount, onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const timer = ref(null);
const currentTime = ref(DateTime.now());
const presentationTime = DateTime.fromISO(inject('presentationTime'), {zone: 'America/El_Salvador'});

const timeRemaining = computed(() => {
  const duration = presentationTime.diff(currentTime.value, ['days', 'hours', 'minutes', 'seconds']).toObject();

  if (Duration.fromObject(duration).shiftTo('milliseconds').milliseconds <= 0) {
    router.push({name: 'home'});
  }

  return `${Math.floor(duration.days)} días, ${duration.hours} horas, ${duration.minutes} minutos, ${Math.floor(duration.seconds)} seconds`;
});

onMounted(() => {
  timer.value = setInterval(() => {
    currentTime.value = DateTime.now();
  }, 1000);
});

onBeforeMount(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <div class="max-w-1920 h-[calc(100vh-69px)] mx-auto text-center grid md:grid-cols-3 px-8 md:px-20
   font-agrandir font-black font-ultraexpanded text-xl md:text-2xl">
    <img src="@/assets/img/homepage/greeting-fran.png" class="row-start-1 col-span-2 md:w-2/3 mx-auto my-20 md:mt-auto mb-8 md:mb-20" alt="">

    <img src="@/assets/img/homepage/fran-foto.png" class="col-span-2 mx-auto md:col-span-1 md:mr-auto w-2/3 my-auto row-span-2" alt="">
    <p class="row-start-2 col-span-2 mb-10">
      Nos vemos en
    <span class="text-[#f7bf33] block">{{ timeRemaining }}</span>
    </p>
  </div>
</template>
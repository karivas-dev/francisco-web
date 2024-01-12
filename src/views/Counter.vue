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
  <div class="max-w-1920 h-[calc(100vh-69px)] mx-auto flex items-center justify-center text-center
  bg-gradient-to-tr from-[#333333] from-5% to-[#f7bf33] font-agrandir font-black font-ultraexpanded text-2xl text-slate-300">
    {{ timeRemaining }}
  </div>
</template>
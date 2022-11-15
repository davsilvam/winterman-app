<script setup>
  import { ref } from 'vue'
  import { useWeather } from '@/stores/main'

  const weather = useWeather()
</script>

<template>
  <div class="w-full flex flex-col gap-2">
    <div class="flex justify-center items-center gap-6 text-slate-100">
      <h2 class="text-6xl">
        {{ weather.cityTemperature }}<span class="text-lg align-top"><i class="ri-celsius-fill"></i></span>
      </h2>
      <div class="flex flex-col items-start justify-between">
        <div class="flex items-center gap-1">
          <i :class="weather.cityWeatherIcon"></i>
          <h3 class="max-w-32 capitalize">{{ weather.cityWeather }}</h3>
        </div>
        <div class="flex items-center gap-1">
          <i class="ri-drop-line"></i>
          <h3 class="font-semibold">{{ weather.cityHumidity }}</h3>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center gap-4 text-slate-100">
      <div class="flex items-center gap-1 text-lg">
        <i class="ri-map-pin-line"></i>
        <h3 class="font-semibold">{{ weather.cityName }}</h3>
      </div>
      <div class="w-8 text-lg"><img class="w-full" :src="weather.countrySrc"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Snowflake } from 'lucide-vue-next'
import { useWeather } from '../../stores'
import WeatherIcon from './Icon.vue'

const { city, isLoading } = useWeather()
</script>

<template>
  <div
    v-if="isLoading"
    class="bottom-0 left-0 z-20 flex h-[400px] w-full flex-col items-center justify-center gap-6 rounded-t-xl bg-ice-200 text-tuna-950 transition-opacity duration-200 hover:opacity-30 max-md:fixed md:max-w-md md:rounded-xl"
  >
    <Snowflake class="w-24 animate-spin" />
  </div>

  <div
    v-else
    class="bottom-0 left-0 z-20 flex h-[400px] w-full flex-col items-center justify-center gap-6 rounded-t-xl bg-ice-200 text-tuna-950 transition-opacity duration-200 hover:opacity-30 max-md:fixed md:max-w-md md:rounded-xl"
  >
    <h1 class="flex items-end text-6xl font-bold max-sm:text-5xl">
      {{ city.max }}º
      <span class="text-xl font-semibold text-tuna-800">
        /{{ city.min }}º
      </span>
    </h1>

    <WeatherIcon />

    <h2 class="text-4xl font-bold capitalize max-sm:text-2xl">
      {{ city.weather_description }}
    </h2>
  </div>
</template>

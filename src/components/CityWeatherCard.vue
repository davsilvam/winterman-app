<script lang="ts" setup>
  import Drop from './Icons/Drop.vue'

  import { useWeather } from '../stores'
  const { city, countryFlagSrc } = useWeather()
</script>

<template>
  <div class="w-full flex flex-col gap-2">
    <div class="flex justify-center items-center gap-6 text-slate-100">
      <strong class="text-6xl">
        {{ city.temperature + '°' }}
      </strong>

      <div class="flex flex-col items-center justify-center">
        <div class="flex items-center gap-1">
          <img
            class="w-7"
            :src="city.icon"
            alt="Weather icon." />
          <strong class="capitalize">{{ city.weather }}</strong>
        </div>
        <div class="flex items-center gap-1">
          <Drop class="fill-slate-100 w-5" />
          <strong class="font-semibold">{{ city.humidity + '%' }}</strong>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center gap-4 text-slate-100">
      <div class="flex items-center gap-1 text-lg">
        <strong class="font-semibold">{{ city.name }}</strong>
      </div>

      <div class="w-8 text-lg">
        <img
          class="w-full"
          :src="countryFlagSrc" />
      </div>
    </div>
  </div>
</template>

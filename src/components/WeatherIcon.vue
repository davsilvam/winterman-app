<script lang="ts" setup>
  import {
    Sun,
    Moon,
    CloudSun,
    CloudMoon,
    Cloud,
    Cloudy,
    CloudRain,
    CloudSunRain,
    CloudMoonRain,
    CloudLightning,
    Snowflake,
    CloudFog,
  } from 'lucide-vue-next'
  import { storeToRefs } from 'pinia'
  import { useWeather } from '../stores'

  const { city } = storeToRefs(useWeather())
  console.log(city.value.icon)
</script>

<template>
  <Sun class="h-28 w-28" v-if="city.icon === '01d'" />
  <Moon class="h-28 w-28" v-if="city.icon === '01n'" />

  <CloudSun class="h-28 w-28" v-if="city.icon === '02d'" />
  <CloudMoon class="h-28 w-28" v-if="city.icon === '02n'" />

  <Cloud class="h-28 w-28" v-if="city.icon.match(/^(03d|03n)$/)" />

  <Cloudy class="h-28 w-28" v-if="city.icon.match(/^(04d|04n)$/)" />

  <CloudRain class="h-28 w-28" v-if="city.icon.match(/^(09d|09n)$/)" />

  <CloudSunRain class="h-28 w-28" v-if="city.icon === '10d'" />
  <CloudMoonRain class="h-28 w-28" v-if="city.icon === '10n'" />

  <CloudLightning class="h-28 w-28" v-if="city.icon.match(/^(11d|11n)$/)" />

  <Snowflake class="h-28 w-28" v-if="city.icon.match(/^(13d|13n)$/)" />

  <CloudFog class="h-28 w-28" v-if="city.icon.match(/^(50d|50n)$/)" />
</template>

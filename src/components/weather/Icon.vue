<script lang="ts" setup>
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudRain,
  CloudSun,
  CloudSunRain,
  Cloudy,
  Moon,
  Snowflake,
  Sun,
} from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { useWeather } from '../../stores'

const { city } = storeToRefs(useWeather())
</script>

<template>
  <Sun v-if="city.icon === '01d'" class="h-28 w-28" />
  <Moon v-if="city.icon === '01n'" class="h-28 w-28" />

  <CloudSun v-if="city.icon === '02d'" class="h-28 w-28" />
  <CloudMoon v-if="city.icon === '02n'" class="h-28 w-28" />

  <Cloud v-if="city.icon.match(/^(03d|03n)$/)" class="h-28 w-28" />

  <Cloudy v-if="city.icon.match(/^(04d|04n)$/)" class="h-28 w-28" />

  <CloudRain v-if="city.icon.match(/^(09d|09n)$/)" class="h-28 w-28" />

  <CloudSunRain v-if="city.icon === '10d'" class="h-28 w-28" />
  <CloudMoonRain v-if="city.icon === '10n'" class="h-28 w-28" />

  <CloudLightning v-if="city.icon.match(/^(11d|11n)$/)" class="h-28 w-28" />

  <Snowflake v-if="city.icon.match(/^(13d|13n)$/)" class="h-28 w-28" />

  <CloudFog v-if="city.icon.match(/^(50d|50n)$/)" class="h-28 w-28" />
</template>

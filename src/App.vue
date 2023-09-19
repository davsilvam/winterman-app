<script setup lang="ts">
import { onMounted } from 'vue'

import { Header, WeatherCard } from './components'
import { TOMTOM_API_KEY } from './constants'
import { useWeather } from './stores'

const { city, getWeatherData } = useWeather()

onMounted(() => {
  getInitialWeatherData()
})

async function getInitialWeatherData() {
  await getWeatherData('Fortaleza')
}
</script>

<template>
  <div
    class="relative flex min-h-screen w-full items-center bg-tuna-950 bg-cover bg-center md:justify-center md:px-16"
    :style="{
      backgroundImage: `url(https://api.tomtom.com/map/1/staticimage?key=${TOMTOM_API_KEY}&zoom=10&center=${city.lon},${city.lat}&format=jpg&layer=basic&style=night&width=1400&height=800&view=Unified&language=pt-BR)`,
    }"
  >
    <div
      class="absolute left-0 top-0 h-screen w-full bg-tuna-950 opacity-70"
    />

    <Header />

    <WeatherCard />
  </div>
</template>

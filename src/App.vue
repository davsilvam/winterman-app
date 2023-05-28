<script setup lang="ts">
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import AppHeader from './components/AppHeader.vue'
  import WeatherCard from './components/WeatherCard.vue'
  import { useWeather } from './stores'

  const { city } = storeToRefs(useWeather())
  const { getWeatherData } = useWeather()

  async function getInitialWeatherData() {
    await getWeatherData('Fortaleza')
  }

  const TOMTOM_API_KEY = import.meta.env.VITE_TOMTOM_API_KEY

  onMounted(() => {
    getInitialWeatherData()
  })
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
    ></div>

    <AppHeader />

    <WeatherCard />
  </div>
</template>

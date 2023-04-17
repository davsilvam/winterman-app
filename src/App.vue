<script setup lang="ts">
  import InputSearch from './components/InputSearch.vue'
  import Snowman from './components/Snowman.vue'
  import CityWeatherCard from './components/CityWeatherCard.vue'
  import { useWeather } from './stores'

  const weather = useWeather()
</script>

<template>
  <div
    class="w-full min-h-screen bg-gradient flex items-center justify-center md:px-16">
    <div
      class="w-full max-w-2xl max-md:h-screen md:rounded-2xl bg-gray-800 flex flex-col items-center justify-center gap-6 p-8">
      <div class="w-full flex flex-col items-center gap-5">
        <header class="flex flex-col items-center">
          <h1 class="text-slate-100 text-3xl font-semibold">Winterman ☃️</h1>
          <h2 class="text-slate-300">Confira o clima:</h2>
        </header>

        <InputSearch />
      </div>

      <hr class="w-full border border-slate-500" />

      <div v-if="!weather.isLoading">
        <Snowman v-if="weather.suggest" />
        <CityWeatherCard v-else />
      </div>

      <div
        v-if="weather.isLoading"
        class="w-full px-10 animate-pulse flex items-center justify-center gap-2">
        <div class="w-full h-16 bg-slate-400" />

        <div class="w-full flex flex-col items-center gap-2">
          <div class="w-full h-6 bg-slate-400" />
          <div class="w-full h-6 bg-slate-400" />
        </div>
      </div>
    </div>
  </div>
</template>

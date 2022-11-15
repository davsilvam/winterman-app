<script setup>
  import { ref } from 'vue'
  import SearchInput from '@/components/SearchInput.vue'
  import Snowman from '@/components/Snowman.vue'
  import CityWeatherCard from '@/components/CityWeatherCard.vue'
  import { useWeather } from '@/stores/main'

  const weather = useWeather()
</script>

<template>
  <div
    class="w-screen min-h-screen bg-gradient flex items-center justify-center"
  >
    <div
      class="md:w-1/2 md:h-full md:rounded-2xl w-screen h-screen bg-gray-800 flex flex-col items-center justify-start gap-6 p-10 px-0"
    >
      <div class="w-full flex flex-col items-center gap-3">
        <div class="flex flex-col items-center">
          <h1 class="text-slate-100 text-3xl">Winterman ☃️</h1>
          <h2 class="text-slate-300">Confira o clima:</h2>
        </div>
        <SearchInput @emitSuggest="disableSuggest()" />
      </div>
      <div class="w-10/12 h-0.5 bg-slate-100"></div>
      <div v-if="!weather.loading">
        <Snowman v-if="weather.suggest" />
        <CityWeatherCard v-if="!weather.suggest" />
      </div>
      <div class="w-full px-10 animate-pulse flex items-center justify-center gap-2" v-if="weather.loading">
        <div class="w-full h-16 bg-slate-400"></div>
        <div class="w-full flex flex-col items-center gap-2">
          <div class="w-3/4 h-6 bg-slate-400"></div>
          <div class="w-3/4 h-6 bg-slate-400"></div>
        </div>
      </div>
    </div>
  </div>
</template>

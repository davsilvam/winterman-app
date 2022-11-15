<script setup>
  import { capitalize, ref } from 'vue'
  import { useWeather } from '@/stores/main'

  const weather = useWeather()

  const city = ref('')

  const searchCity = async() => {
    const data = await weather.getWeatherData(city.value)

    city.value = ''
  }
</script>

<template>
  <div class="w-4/5 flex items-center justify-between">
    <input
      type="text"
      v-model="city"
      placeholder="Pesquise a cidade aqui."
      class="w-5/6 p-2 pl-4 rounded-md outline-none text-slate-600"
    />
    <button class="w-10 h-10 bg-blue-900 rounded-full" @click="searchCity()">
      <i class="ri-search-line text-slate-200"></i>
    </button>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useWeather } from '../stores'
  import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

  const { getWeatherData } = useWeather()
  const city = ref<string>('')
</script>

<template>
  <div class="w-full gap-3 flex items-center justify-between">
    <input
      type="text"
      v-model="city"
      placeholder="Pesquise a cidade aqui."
      class="w-full p-2 pl-4 rounded-md outline-none text-slate-600" />

    <button
      @click="() => getWeatherData(city)"
      class="w-10 h-10 flex-shrink-0 bg-blue-900 rounded-full flex items-center justify-center">
      <MagnifyingGlassIcon class="w-5 text-slate-50" />
    </button>
  </div>
</template>

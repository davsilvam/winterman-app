<script lang="ts" setup>
  import { ref } from 'vue'
  import { Search } from 'lucide-vue-next'
  import { useWeather } from '../stores'

  const search = ref('')

  const { getWeatherData } = useWeather()

  function handleSearch(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      getWeatherData(search.value)
    }
  }
</script>

<template>
  <div
    class="flex w-64 items-center gap-3 rounded-lg border border-tuna-800 bg-tuna-900 p-2 font-medium text-tuna-100 transition-colors placeholder:text-tuna-300 [&:has(input:focus)]:border-tuna-500"
  >
    <Search class="w-5" :class="[search ? 'text-tuna-100' : 'text-tuna-300']" />

    <input
      v-model="search"
      @keydown="handleSearch"
      class="bg-transparent outline-none"
      placeholder="Pesquise uma cidade."
      type="text"
    />
  </div>
</template>

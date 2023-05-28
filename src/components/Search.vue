<script lang="ts" setup>
  import { ref } from 'vue'
  import { ArrowRight, Search } from 'lucide-vue-next'
  import { useWeather } from '../stores'

  const search = ref('')

  const { getWeatherData } = useWeather()

  function handleSearch() {
    getWeatherData(search.value)
  }
</script>

<template>
  <div
    class="relative flex w-64 items-center gap-3 rounded-lg border border-tuna-800 bg-tuna-900 p-2 font-medium text-tuna-100 transition-colors placeholder:text-tuna-300 [&:has(input:focus)]:border-tuna-500"
  >
    <Search
      class="w-5 flex-shrink-0 max-sm:w-6"
      :class="[search ? 'text-tuna-100' : 'text-tuna-300']"
    />

    <input
      v-model.trim="search"
      @keydown="
        ({ key }) => {
          if (key === 'Enter') {
            handleSearch()
          }
        }
      "
      class="bg-transparent outline-none"
      placeholder="Pesquise uma cidade."
      type="text"
    />

    <button
      @click="handleSearch"
      class="absolute right-0 w-fit rounded-lg bg-ice-200 px-3 py-2 text-tuna-950 disabled:opacity-50"
      :disabled="!!!search"
    >
      <ArrowRight class="w-4" />
    </button>
  </div>
</template>

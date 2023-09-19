<script lang="ts" setup>
import { MapPin } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { useWeather } from '../stores'
import Search from './Search.vue'

const { city, isLoading } = storeToRefs(useWeather())
</script>

<template>
  <header
    class="fixed left-0 top-0 z-20 flex w-full items-center justify-between gap-5 p-8 max-md:flex-col sm:p-16"
  >
    <span class="w-64" />

    <span v-if="isLoading" class="h-6 w-32 animate-pulse bg-tuna-600" />

    <strong v-else class="flex items-center gap-2 text-2xl text-tuna-50">
      <MapPin class="w-6" />

      {{ city.name }}
    </strong>

    <Search />
  </header>
</template>

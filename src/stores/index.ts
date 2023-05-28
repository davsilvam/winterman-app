import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

import { AxiosError } from 'axios'
import { instance } from '../services/axios'

import { CityWeatherResponse } from '../@types/api'

interface City {
  name: string
  weather_description: string
  lon: number
  lat: number
  icon: string
  max: number
  min: number
  humidity: number
}

const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

export const useWeather = defineStore('weather', () => {
  const isLoading = ref<boolean>(false)

  const city: City = reactive({
    name: '',
    weather_description: '',
    lon: 0,
    lat: 0,
    icon: '',
    max: 0,
    min: 0,
    humidity: 0,
  })

  const getWeatherData = async (searchedCity: string) => {
    const apiWeatherURL = `/weather?q=${searchedCity}&units=metric&appid=${OPEN_WEATHER_API_KEY}&lang=pt_br`
    isLoading.value = true

    try {
      const { data } = await instance.get<CityWeatherResponse>(apiWeatherURL)

      city.name = data.name
      city.max = Math.ceil(data.main.temp_max)
      city.min = Math.floor(data.main.temp_min)
      city.lon = data.coord.lon
      city.lat = data.coord.lat
      city.icon = data.weather[0].icon
      city.humidity = data.main.humidity
      city.weather_description = data.weather[0].description

      isLoading.value = false

      return data
    } catch (error) {
      isLoading.value = false

      if (error instanceof AxiosError) {
        if (error.response?.status === 500) {
          throw new Error('Erro no servidor.')
        }

        if (error.response?.status === 401) {
          throw new Error('Não autorizado.')
        }
      }
    }
  }

  return {
    city,
    getWeatherData,
    isLoading,
  }
})

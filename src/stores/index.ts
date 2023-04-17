import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

import { AxiosError } from 'axios'
import { api } from '../services/axios'

import { CityWeatherResponse } from '../@types/api'

interface City {
  name: string
  weather: string
  icon: string
  temperature: number
  humidity: number
}

const API_KEY = import.meta.env.VITE_API_KEY
const API_WEATHER_ICON_URL = (icon: string) =>
  `https://openweathermap.org/img/wn/${icon}.png`
const API_FLAG_URL = (country: string) =>
  `https://flagsapi.com/${country}/flat/64.png`

export const useWeather = defineStore('weather', () => {
  const suggest = ref<boolean>(true)
  const isLoading = ref<boolean>(false)
  const countryFlagSrc = ref<string>('')
  const city = reactive<City>({
    name: '',
    weather: '',
    icon: '',
    temperature: 0,
    humidity: 0,
  })

  const getWeatherData = async (searchedCity: string) => {
    const apiWeatherURL = `/weather?q=${searchedCity}&units=metric&appid=${API_KEY}&lang=pt_br`

    try {
      isLoading.value = true

      const { data } = await api.get<CityWeatherResponse>(apiWeatherURL)

      city.name = data.name
      city.temperature = Number(data.main.temp.toFixed(1))
      city.icon = API_WEATHER_ICON_URL(data.weather[0].icon)
      city.humidity = data.main.humidity
      city.weather = data.weather[0].description
      countryFlagSrc.value = API_FLAG_URL(data.sys.country)

      suggest.value = false
      isLoading.value = false

      return data
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 500) {
          console.log(error.response?.status)
          throw new Error('Erro no servidor.')
        }

        if (error.response?.status === 401) {
          console.log(error.response?.status)
          throw new Error('Não autorizado.')
        }
      }
    }
  }

  return {
    city,
    countryFlagSrc,
    getWeatherData,
    isLoading,
    suggest,
  }
})

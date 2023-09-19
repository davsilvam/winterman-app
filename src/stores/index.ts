import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

import { AxiosError } from 'axios'
import { instance } from '../services'

import { City, CityWeatherResponse } from '../entities'
import { OPEN_WEATHER_API_KEY } from '../constants'

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

      return data
    }
    catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 500)
          throw new Error('Erro no servidor.')

        if (error.response?.status === 401)
          throw new Error('Não autorizado.')
      }
    }
    finally {
      isLoading.value = false
    }
  }

  return {
    city,
    getWeatherData,
    isLoading,
  }
})

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWeather = defineStore('weather', () => {
  const apiKey = '630b41503266f69f710a1a70b0bbf71f'
  const apiCountryURL = 'https://countryflagsapi.com/png/'

  const suggest = ref(true)
  const loading = ref(false)

  let countrySrc = ref('')
  let cityName = ref('')
  let cityWeather = ref('')
  let cityWeatherIcon = ref('')
  let cityTemperature = ref('')
  let cityHumidity = ref('')

  const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    loading.value = true

    const response = await fetch(apiWeatherURL)
    const data = await response.json()


    if (data.cod == 404) {
      alert('Não foi possível encontrar a cidade em questão. 😿')
      return
    }

    cityName.value = data.name
    cityTemperature.value = parseInt(data.main.temp).toFixed(1)
    cityHumidity.value = data.main.humidity + '%'
    cityWeather.value = data.weather[0].description

    switch (data.weather[0].icon) {
      case '01d': {
        cityWeatherIcon.value = "ri-sun-line"
        break
      }
      case '02d': {
        cityWeatherIcon.value = "ri-sun-cloudy-line"
        break
      }
      case '03d': {
        cityWeatherIcon.value = "ri-cloudy-line"
        break
      }
      case '04d': {
        cityWeatherIcon.value = "ri-cloudy-2-line"
        break
      }
      case '09d': {
        cityWeatherIcon.value = "ri-drizzle-line"
        break
      }
      case '10d': {
        cityWeatherIcon.value = "ri-showers-line"
        break
      }
      case '11d': {
        cityWeatherIcon.value = "ri-thunderstorms-line"
        break
      }
      case '13d': {
        cityWeatherIcon.value = "ri-snowy-line"
        break
      }
      case '50d': {
        cityWeatherIcon.value = "ri-sun-foggy-line"
        break
      }
      case '01n': {
        cityWeatherIcon.value = "ri-moon-line"
        break
      }
      case '02n': {
        cityWeatherIcon.value = "ri-moon-cloudy-line"
        break
      }
      case '03n': {
        cityWeatherIcon.value = "ri-cloudy-line"
        break
      }
      case '04n': {
        cityWeatherIcon.value = "ri-cloudy-2-line"
        break
      }
      case '09n': {
        cityWeatherIcon.value = "ri-drizzle-line"
        break
      }
      case '10n': {
        cityWeatherIcon.value = "ri-showers-line"
        break
      }
      case '11n': {
        cityWeatherIcon.value = "ri-thunderstorms-line"
        break
      }
      case '13n': {
        cityWeatherIcon.value = "ri-snowy-line"
        break
      }
      case '50n': {
        cityWeatherIcon.value = "ri-moon-foggy-line"
        break
      }
    }

    countrySrc.value = apiCountryURL + data.sys.country

    suggest.value = false
    loading.value = false

    return data
  }

  return {
    apiCountryURL,
    loading,
    suggest,
    countrySrc,
    getWeatherData,
    cityWeather,
    cityWeatherIcon,
    cityTemperature,
    cityHumidity,
    cityName,
  }
})
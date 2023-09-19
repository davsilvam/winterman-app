interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export interface CityWeatherResponse {
  coord: { lon: number; lat: number }
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: {
    speed: number
    deg: number
  }
  clouds: { all: number }
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface City extends Pick<CityWeatherResponse, 'name'> {
  weather_description: string
  lon: number
  lat: number
  icon: string
  max: number
  min: number
  humidity: number
}

type Weather = {
  id: number
  main: string
  description: string
  icon: string
}

type Main = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

type Sys = {
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

import axios, { AxiosError } from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 500) {
        throw new Error('Erro no servidor.')
      }

      if (error.response?.status === 401) {
        throw new Error('Não autorizado.')
      }
    }

    return Promise.reject(error)
  },
)

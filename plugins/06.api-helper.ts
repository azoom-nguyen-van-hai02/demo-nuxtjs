import axios from 'axios'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()

  const axiosInstance = axios.create({
    baseURL: config.public.apiBaseURL
  })

  axiosInstance.interceptors.request.use((request) => {
    // console.log('Starting Request', request)
    const { token } = useAuthStore()

    if (token){
      request.headers.Authorization = `Bearer ${token}`
    }      
      
    return request
  })

  axiosInstance.interceptors.response.use((response) => {
    // console.log('Response:', response)

    
    return response.data
  }, (error) => {
    console.error('Error:', error)

    if (error.response?.status === 401) {
      useAuthStore().logout()
    }

    return Promise.reject(error)
  })

  return {
    provide: {
      axios: axiosInstance
    }
  }
})

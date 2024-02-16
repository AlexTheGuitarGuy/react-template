import * as axios from 'axios'

export const baseURL = import.meta.env.PROD
  ? import.meta.env.VITE_API_URL
  : `${import.meta.env.VITE_APPLICATION_URL}/api/`

export const instance = axios.default.create({
  baseURL,
  withCredentials: true,
})

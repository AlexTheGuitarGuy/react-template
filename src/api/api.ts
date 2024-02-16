import * as axios from 'axios'

export const baseURL = 'http://localhost:5173/api/'
export const instance = axios.default.create({
  baseURL,
  withCredentials: true,
})

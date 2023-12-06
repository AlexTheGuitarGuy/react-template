import * as axios from 'axios'

export const baseURL = 'http://localhost:4000'
export const instance = axios.default.create({
  baseURL,
  withCredentials: true,
})

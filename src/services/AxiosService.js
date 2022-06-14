import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  timeout: 12000,
  params:{
    api_key: 'gDIjNLFHFKrLlUBfc89IAr4h2BMx4fxNfmiNEKkh'
  }
})

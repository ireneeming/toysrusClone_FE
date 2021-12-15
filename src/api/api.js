import axios from 'axios'

const api = axios.create({
  baseURL: 'http://13.125.197.66',
  //baseURL: "http://localhost:3500"
})

export default api

import axios from 'axios'

const api = axios.create({
  //baseURL: "http://3.38.98.44"
  baseURL: 'http://localhost:3500',
})

export default api

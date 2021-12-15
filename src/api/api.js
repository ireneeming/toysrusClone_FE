import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://3.38.98.44',
  baseURL: 'http://13.125.197.66',
  //baseURL: "http://localhost:3500"
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json',
  },
})

export default api

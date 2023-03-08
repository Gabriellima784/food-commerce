import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get('/burgers')
export const getSorvetes = () => api.get ('/sorvetes')
export const getPizzas = () => api.get ('/pizzas')
export const getBebidas = () => api.get ('/bebidas')

export default api

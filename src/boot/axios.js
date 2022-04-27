import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Cookies } from 'quasar'

const token = Cookies.get('token')

const api = axios.create({
  baseURL: 'https://api.rise.skb-44.ru/api/',
  credentials: 'include',
  headers: {
    Authorization: `Bearer ${token}`,
    accept: 'application/json'
  }
})

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }

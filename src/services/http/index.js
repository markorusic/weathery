import { SERVER_URL, API_ID } from 'config/app'
import axios from 'axios'

const http = axios.create({
  baseURL: `${SERVER_URL}${API_ID}/`
})

export default http

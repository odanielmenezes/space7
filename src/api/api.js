import axios from 'axios'

const api = axios.create({
    // baseURL: 'https://sender-email.onrender.com'
    baseURL: 'http://localhost:3030'
})

export default api;
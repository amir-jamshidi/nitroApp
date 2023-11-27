import axios from 'axios'

const baseApi = axios.create({
    baseURL: 'http://127.0.0.1:5000/'
})

baseApi.interceptors.request.use((config) => {
    let token = '';
    if (localStorage.getItem('auth')) {
        token = JSON.parse(localStorage.getItem('auth')).token
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})


export default baseApi

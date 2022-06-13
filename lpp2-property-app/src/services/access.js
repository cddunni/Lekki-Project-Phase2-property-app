import axios from 'axios'
import { baseUrl } from '../helpers/variables'

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
})

instance.interceptors.response.use(
    (res) => {
        return res.data
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance

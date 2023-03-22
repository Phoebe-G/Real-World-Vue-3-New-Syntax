import axios from 'axios'

const apiClient = axios.create({
    baseURL: "https://phoebe-g.github.io/vue-db1",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/db.json')
    }
}
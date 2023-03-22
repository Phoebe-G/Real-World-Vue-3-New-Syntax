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
    },

    getEvent(id) {
        return apiClient.get('/db.json')
        .then((response) => {
            // return response.data.events.find((obj, index) => { console.log(obj, index); return obj.id == id })
            return response.data.events.find((obj, index) => { if(obj.id == Number(id)) console.log(obj, index); return String(obj.id) == Number(id) })
        })
    }
}
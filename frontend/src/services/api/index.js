import axios from 'axios'

export function getUser() {
    return axios.get('/api/users')
}